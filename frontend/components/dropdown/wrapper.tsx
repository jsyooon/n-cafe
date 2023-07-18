import { useContext, useEffect, useRef } from 'react';
import { DropdownDispatchContext } from './context';
import userOutSideClick from '@/hooks/userOutSideClick';
import type { ReactNode } from 'react';
import styles from './style.module.scss';

export default function DropdownList({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>();
  const dispatch = useContext(DropdownDispatchContext);

  const outsideClick = userOutSideClick(wrapperRef);

  useEffect(() => {
    if (outsideClick) dispatch({ type: 'toggle', payload: !outsideClick });
  }, [outsideClick]);

  return (
    <div className={styles.dropdown} ref={wrapperRef}>
      {children}
    </div>
  );
}
