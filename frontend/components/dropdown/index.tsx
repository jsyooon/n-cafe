'use client';

import { DropdownContext } from './context';
import DropdownWrap from './wrapper';
import DropdownSelected from './selected';
import DropdownList from './list';
import type { PropsWithChildren } from 'react';
import type { StateType } from './context';

interface Props extends Partial<Pick<StateType, 'inset' | 'className'>> {
  open?: boolean;
}

function Dropdown({ children, className, open = false, inset = 'start' }: PropsWithChildren<Props>) {
  return (
    <DropdownContext initialState={{ isOpen: open, inset, className }}>
      <DropdownWrap>{children}</DropdownWrap>
    </DropdownContext>
  );
}

export { Dropdown, DropdownSelected, DropdownList };
