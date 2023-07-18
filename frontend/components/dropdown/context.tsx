import { createContext, useReducer } from 'react';
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

export const DropdownStateContext = createContext<StateType>(null);

export const DropdownDispatchContext = createContext(null);

export default function DropdownContext({ children, initialState }: PropsWithChildren<{ initialState: StateType }>) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DropdownStateContext.Provider value={state}>
      <DropdownDispatchContext.Provider value={dispatch}>{children}</DropdownDispatchContext.Provider>
    </DropdownStateContext.Provider>
  );
}
