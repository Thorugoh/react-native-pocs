import { useState } from "react";
import { Text, View } from "react-native";

const ExpensiveComponent: React.FC = () => {
    // Uncomment next line to see the performance issue
    // ❌ This will run expensiveComputation on every render, causing performance issues
    // ❌ const [data, setDate] = useState(expensiveComputation)
    // ✅ Use a function to avoid running the computation on every render
    const [data, setDate] = useState(() => expensiveComputation())
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text>Expensive Component</Text>
            <Text>Data: {data}</Text>
            <Text onPress={() => setCount(count + 1)}>Count: {count}</Text>

        </View>
    );
};


function expensiveComputation() {
    console.log("Expensive computation running...");
    let total = 0;
    for (let i = 0; i < 1e8; i++) {
        total += Math.sqrt(i);
    }
    return total;
 }

export default ExpensiveComponent;