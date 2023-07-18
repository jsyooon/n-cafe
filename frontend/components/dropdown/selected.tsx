'use client';

import { PropsWithChildren, useContext } from 'react';
import { DropdownDispatchContext, DropdownStateContext } from './context';

export default function DropdownSelected({ children }: PropsWithChildren) {
  const { isOpen } = useContext(DropdownStateContext);
  const dispatch = useContext(DropdownDispatchContext);

  const onClickSelected = () => dispatch({ type: 'toggle', payload: !isOpen });

  return (
    <button type='button' onClick={onClickSelected}>
      {children}
    </button>
  );
}
