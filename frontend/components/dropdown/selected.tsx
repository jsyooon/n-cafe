'use client';

import { PropsWithChildren, useContext } from 'react';
import DropdownContext from './context';

export default function DropdownSelected({ children }: PropsWithChildren) {
  const { isOpen, toggleOpen } = useContext(DropdownContext);

  const onClickSelected = () => toggleOpen(!isOpen);
  return (
    <button type='button' onClick={onClickSelected}>
      {children}
    </button>
  );
}
