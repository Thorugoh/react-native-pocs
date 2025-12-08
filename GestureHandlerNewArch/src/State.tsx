
import React, {createContext, useReducer, useContext, ReactNode} from 'react';

type State = {
  inputValue: number;
};

type Action = {
  type: 'SET_INPUT_VALUE';
  payload: number;
};

const initialState: State = {
  inputValue: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return {...state, inputValue: action.payload};
    default:
      return state;
  }
};

const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<React.Dispatch<Action> | undefined>(
  undefined,
);

export const StateProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a StateProvider');
  }
  return context;
};

export const useDispatchContext = () => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error('useDispatchContext must be used within a StateProvider');
  }
  return context;
};
