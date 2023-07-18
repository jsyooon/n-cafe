'use client';

import { PropsWithChildren } from 'react';
import { useDropdownDispatch, useDropdownState } from './context';
import styles from './style.module.scss';

export default function DropdownList({ children }: PropsWithChildren) {
  const { isOpen, inset } = useDropdownState();
  const dispatch = useDropdownDispatch();

  const onClickButton = () => {
    dispatch({ type: 'toggle', payload: false });
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
