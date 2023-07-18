'use client';

import { PropsWithChildren } from 'react';
import { useDropdownDispatch, useDropdownState } from './context';

export default function DropdownSelected({ children }: PropsWithChildren) {
  const { isOpen } = useDropdownState();
  const dispatch = useDropdownDispatch();

  const onClickSelected = () => dispatch({ type: 'toggle', payload: !isOpen });

  return (
    <button type='button' onClick={onClickSelected}>
      {children}
    </button>
  );
}
