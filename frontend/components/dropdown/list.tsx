'use client';

import { PropsWithChildren, useContext } from 'react';
import DropdownContext from './context';
import styles from './style.module.scss';

export default function DropdownList({ children }: PropsWithChildren) {
  const { isOpen, toggleOpen, inset } = useContext(DropdownContext);

  const onClickButton = () => {
    toggleOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.menu} onClick={onClickButton}>
          {children}
          <style jsx>{`
            div {
              inset-inline-${inset}:0;
            }
          `}</style>
        </div>
      )}
    </>
  );
}
