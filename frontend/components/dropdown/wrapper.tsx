import { useEffect, useRef } from 'react';
import { useDropdownState, useDropdownDispatch } from './context';
import useOutsideClick from '@/hooks/useOutsideClick';
import type { PropsWithChildren } from 'react';
import styles from './style.module.scss';

interface Props {
  className?: string;
}

export default function DropdownList({ children }: PropsWithChildren<Props>) {
  const { className } = useDropdownState();
  const dispatch = useDropdownDispatch();
  const wrapperRef = useRef<HTMLDivElement>();
  const outsideClick = useOutsideClick(wrapperRef);

  useEffect(() => {
    if (outsideClick) dispatch({ type: 'toggle', payload: !outsideClick });
  }, [outsideClick]);

  return (
    <div className={`${styles.dropdown} ${className ?? ''}`} ref={wrapperRef}>
      {children}
    </div>
  );
}
