'use client';

import DropdownContext from './context';
import DropdownSelected from './selected';
import DropdownList from './list';
import type { PropsWithChildren } from 'react';
import type { StateType } from './context';
import styles from './style.module.scss';

interface Props extends Partial<Pick<StateType, 'inset'>> {
  open?: boolean;
}

function Dropdown({ children, open = false, inset = 'start' }: PropsWithChildren<Props>) {
  return (
    <DropdownContext initialState={{ isOpen: open, inset }}>
      <div className={styles.dropdown}>{children}</div>
    </DropdownContext>
  );
}

export { Dropdown, DropdownSelected, DropdownList };
