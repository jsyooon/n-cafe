'use client';

import { useRef, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import type { ChangeEvent } from 'react';
import styles from './style.module.scss';

interface Props {
  value: string;
  allowSpace?: boolean;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  onChange: (value: string) => any;
}

function InputText({ value, className, maxLength, placeholder, allowSpace, onChange }: Props) {
  const [isFocus, setIsFocus] = useState(false);

  const input = useRef<HTMLInputElement>();
  const blurTimer = useRef<ReturnType<typeof setTimeout>>();

  const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const replaced = allowSpace ? value : value.replace(/\s/g, '');
    setIsFocus(replaced.length > 0);
    onChange(replaced);
  };

  const onReset = () => {
    onChange('');
    input.current.focus();
  };

  const onFocusEvent = () => {
    clearTimeout(blurTimer.current);
    setIsFocus(true);
  };

  const onBlurEvent = () => {
    blurTimer.current = setTimeout(() => {
      setIsFocus(false);
    }, 100);
  };

  return (
    <div className={`${styles.inputStyle} ${className ?? ''}`}>
      <input type='text' placeholder={placeholder} value={value} maxLength={maxLength} onChange={onChangeEvent} onFocus={onFocusEvent} onBlur={onBlurEvent} ref={input} />
      {isFocus && value.length > 0 && (
        <button type='button' aria-label='삭제' onClick={onReset}>
          <AiFillCloseCircle size={20} color='rgba(var(--black-color), 0.3)' />
        </button>
      )}
    </div>
  );
}

export default InputText;
