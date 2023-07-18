'use client';

import { PropsWithChildren, useContext } from 'react';
import { DropdownDispatchContext, DropdownStateContext } from './context';
import styles from './style.module.scss';

export default function DropdownList({ children }: PropsWithChildren) {
  const { isOpen, inset } = useContext(DropdownStateContext);
  const dispatch = useContext(DropdownDispatchContext);

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
