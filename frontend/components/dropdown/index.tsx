'use client';

import { DropdownContext } from './context';
import DropdownWrap from './wrapper';
import DropdownSelected from './selected';
import DropdownList from './list';
import type { PropsWithChildren } from 'react';
import type { StateType } from './context';

interface Props extends Partial<Pick<StateType, 'inset'>> {
  open?: boolean;
}

function Dropdown({ children, open = false, inset = 'start' }: PropsWithChildren<Props>) {
  return (
    <DropdownContext initialState={{ isOpen: open, inset }}>
      <DropdownWrap>{children}</DropdownWrap>
    </DropdownContext>
  );
}

export { Dropdown, DropdownSelected, DropdownList };
