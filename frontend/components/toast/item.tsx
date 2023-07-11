'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai/index';
import { BsFillCheckCircleFill } from 'react-icons/bs/index';
import { useSetRecoilState } from 'recoil';
import { toastListState } from '@/atom';
import type { ToastConfig, ToastType } from '@/types/toast';
import styles from './style.module.scss';

interface Props extends ToastConfig {
  id: Symbol;
  type: ToastType;
}

export default function ToastItem({ id, message, showCloseButton = false, type, closeTime = 1000 }: Props) {
  const setToastList = useSetRecoilState(toastListState);
  const [active, setActive] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const transitionRef = useRef<ReturnType<typeof requestAnimationFrame>>();

  useEffect(() => {
    closeTimer.current = setTimeout(onClose, closeTime);
    transitionRef.current = requestAnimationFrame(() => {
      setActive(true);
    });
    return onClose;
  }, []);

  const onClose = () => {
    clearTimeout(closeTimer.current);
    setActive(false);
  };

  const onTransitionEnd = useCallback(() => {
    if (active) return;

    setToastList((previous) => previous.filter((value) => value.id !== id));
  }, [active]);

  return (
    <div className={`${styles.toastItem}${active ? ` ${styles.activeToastItem}` : ''}`} onTransitionEnd={onTransitionEnd}>
      <div className='toast-content'>
        <div className='icon'>{type === 'success' && <BsFillCheckCircleFill size={22} className={type} />}</div>
        <p className='message'>{message}</p>
        {showCloseButton && (
          <button type='button' className='close-button' aria-label='닫기' onClick={onClose}>
            <AiOutlineClose size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
