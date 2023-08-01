'use client';

import { useMutation } from '@tanstack/react-query';
import ImageUpload from '@/components/imageUpload';
import ProfileImage from '@/components/profileImage';
import { fetchPost } from '@/helpers/fetch';
import styles from './style.module.scss';

interface Props {
  profileImage?: string;
  onChange(value: string): any;
}

export default function ProfileUpload({ profileImage, onChange }: Props) {
  const { mutate } = useMutation({ mutationFn: (body: FormData) => fetchPost('/upload/profile', { body }) });

  const onChangeImage = async (file: File) => {
    const body = new FormData();
    body.append('profile', file[0]);

    mutate(body, {
      onSuccess(response) {
        onChange(response.data);
      },
    });
  };

  return (
    <div className={styles.profileUpload}>
      <ProfileImage src={profileImage} />
      <ImageUpload onChange={onChangeImage} className={styles.imageUpload} />
    </div>
  );
}
