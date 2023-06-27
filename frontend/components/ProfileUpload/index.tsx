'use client';

import { type ChangeEvent } from 'react';
import ProfileImage from '@/components/ProfileImage';
import { fetchPost } from '@/helpers/fetch';
import { AiOutlineCamera } from 'react-icons/ai';
import styles from './style.module.scss';

interface Props {
  profileImage?: string;
  onChange(value: string): any;
}

export default function ProfileUpload({ profileImage, onChange }: Props) {
  const onChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files[0];

      const body = new FormData();
      body.append('profile', file);

      const response = await fetchPost('/user/profile', {
        body,
      });
      if (response.data) {
        onChange(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.profileUpload}>
      <ProfileImage src={profileImage} size={120} />
      <span className='upload-icon'>
        <AiOutlineCamera size={20} />
      </span>
      <label>
        <input type='file' hidden accept='image/*' onChange={onChangeInput} />
      </label>
    </div>
  );
}
