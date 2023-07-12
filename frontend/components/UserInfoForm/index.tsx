'use client';

import { useState, useCallback, useRef } from 'react';
import { fetchGet } from '@/helpers/fetch';
import ProfileUpload from '@/components/ProfileUpload';
import InputText from '@/components/inputText';
import Button from '@/components/button';
import styles from './style.module.scss';
import { debounce } from '@/helpers/throttle-debounce';
import type { FormEvent } from 'react';
import type { UserType } from '@/types/user';

interface Props {
  data: UserType;
  title?: string;
  onSubmit(value: UserType): void;
}

export default function UserInfoForm({ data, title, onSubmit }: Props) {
  const [name, setName] = useState(data.name);
  const [nameError, setNameError] = useState('');
  const nameDebounce = useRef<ReturnType<typeof debounce>>();

  const [profileImage, setProfileImage] = useState(data.profileImage);

  const fetchName = async (value: string) => {
    try {
      await fetchGet(`/user/name?value=${encodeURIComponent(value)}`);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const validateName = async (value: string) => {
    try {
      if (!value.length) {
        throw new Error('닉네임을 입력해주세요.');
      }

      if (/[<>,./]/g.test(value)) {
        throw new Error('닉네임에 < > , . / 문자는 올 수 없습니다.');
      }

      await fetchName(value);
      setNameError('');

      return true;
    } catch (error) {
      setNameError(error.message);
      return false;
    }
  };

  const onChangeName = async (value: string) => {
    setName(value);
    nameDebounce.current ??= debounce(300, validateName);
    nameDebounce.current(value);
  };

  const onSubmitEvent = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const isValidName = await validateName(name);
      if (!isValidName) return;

      onSubmit({
        name,
        profileImage,
      });
    },
    [name, profileImage]
  );

  return (
    <>
      {title && <h2 className={styles.title}>{title}</h2>}
      <form className={styles.userInfoForm} onSubmit={onSubmitEvent}>
        <ProfileUpload profileImage={profileImage} onChange={setProfileImage} />
        <InputText placeholder='닉네임' className='name-wrap' value={name} onChange={onChangeName} />
        <p className='error-text'>{nameError}</p>
        <Button type='submit' className='submit-button' point fill>
          완료
        </Button>
      </form>
    </>
  );
}
