import { createContext } from 'react';

export interface ValueType {
  inset: 'start' | 'end';
  isOpen: boolean;
  toggleOpen(value: boolean): void;
}

const DropdownContext = createContext<ValueType>(null);

export default DropdownContext;
