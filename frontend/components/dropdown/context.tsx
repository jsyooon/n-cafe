import { createContext, useContext, useReducer } from 'react';
import type { PropsWithChildren } from 'react';

export interface StateType {
  inset: 'start' | 'end';
  isOpen: boolean;
}

function reducer<T>(state: StateType, action: { type: string; payload: any }) {
  switch (action.type) {
    case 'toggle':
      return {
        ...state,
        isOpen: action.payload,
      };

    default:
      return state;
  }
}

const StateContext = createContext<StateType>(null);

const DispatchContext = createContext(null);

export function DropdownContext({ children, initialState }: PropsWithChildren<{ initialState: StateType }>) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export const useDropdownState = () => useContext(StateContext);

export const useDropdownDispatch = () => useContext(DispatchContext);
