'use client';

import { useState } from 'react';
import DropdownContext, { type ValueType } from './context';
import DropdownSelected from './selected';
import DropdownList from './list';
import type { PropsWithChildren } from 'react';
import styles from './style.module.scss';

interface Props extends Partial<Pick<ValueType, 'inset'>> {
  open?: boolean;
}

function Dropdown({ children, open, inset = 'start' }: PropsWithChildren<Props>) {
  const [isOpen, setIsOpen] = useState(open);

  const toggleOpen = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <DropdownContext.Provider value={{ isOpen, inset, toggleOpen }}>
      <div className={styles.dropdown}>{children}</div>
    </DropdownContext.Provider>
  );
}

export { Dropdown, DropdownSelected, DropdownList };
