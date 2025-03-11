import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { Todo, TodoStore } from './store/home/todoStore';


const TodoApp = observer(() => {
  const store = useLocalObservable(() => new TodoStore());
  const [newTodoText, setNewTodoText] = useState('');
  const [editingTodoId, setEditingTodoId] = useState<number>();
  const [editingTodoText, setEditingTodoText] = useState('');

  const handleAddTodo = () => {
    store.addTodo(newTodoText);
    setNewTodoText('');
  };

  const handleRemoveTodo = (id: number) => {
    store.removeTodo(id);
  };

  const handleToggleCompleted = (todo: Todo) => {
    todo.toggleCompleted();
  };

  const handleEditTodo = (todo: Todo) => {
    setEditingTodoId(todo.id);
    setEditingTodoText(todo.text);
  };

  const handleSaveEdit = (todo: Todo) => {
    if (editingTodoText.trim()) {
      todo.setText(editingTodoText);
      setEditingTodoId(undefined);
      setEditingTodoText('');
    }
  };

  const renderItem = ({ item }: {item: Todo}) => (
    <View style={styles.todoItem}>
      {editingTodoId === item.id ? (
        <TextInput
          style={styles.editInput}
          value={editingTodoText}
          onChangeText={setEditingTodoText}
          onBlur={() => handleSaveEdit(item)}
          autoFocus
        />
      ) : (
        <TouchableOpacity onPress={() => handleToggleCompleted(item)} style={{flex:1, flexDirection: 'row', alignItems:"center"}}>
          <Text style={[styles.todoText, item.completed && styles.completedText]}>
            {item.text}
          </Text>
        </TouchableOpacity>
      )}

      <View style={styles.buttonContainer}>
        {editingTodoId !== item.id && (
          <TouchableOpacity style={styles.editButton} onPress={() => handleEditTodo(item)}>
            <Text>Edit</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveTodo(item.id)}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a todo"
          value={newTodoText}
          onChangeText={setNewTodoText}
        />
        <Button title="Add" onPress={handleAddTodo} />
      </View>

      <View style={styles.filterContainer}>
        <Button title="All" onPress={() => store.setFilter('all')} />
        <Button title="Active" onPress={() => store.setFilter('active')} />
        <Button title="Completed" onPress={() => store.setFilter('completed')} />
      </View>

      <FlatList
        data={store.filteredTodos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  todoText: {
    fontSize: 16,
    flex:1,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  removeButton: {
    backgroundColor: '#ff6961',
    padding: 8,
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: '#87ceeb',
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  editInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default TodoApp;