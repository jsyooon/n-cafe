import { AiOutlineCamera } from 'react-icons/ai/index';
import type { ChangeEvent } from 'react';
import styles from './style.module.scss';

interface Props {
  multiple?: boolean;
  className?: string;
  onChange: (file: File | FileList) => any;
}

export default function ImageUpload({ multiple = false, className, onChange }: Props) {
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.files);
  };

  return (
    <div className={`${styles.imageUpload} ${className ?? ''}`}>
      <span className='upload-icon'>
        <AiOutlineCamera size={20} />
      </span>
      <label>
        <input type='file' hidden accept='image/*' multiple={multiple} onChange={onChangeInput} />
      </label>
    </div>
  );
}
