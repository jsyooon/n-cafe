'use client';

import { useMutation } from '@tanstack/react-query';
import TextareaComponent from '@/components/textarea';
import useToast from '@/hooks/useToast';
import { fetchPost } from '@/helpers/fetch';
import type { FeedPayloadType } from '@/types/feed';
import styles from './style.module.scss';

export default function Editor() {
  const { mutate: submitMutate } = useMutation({ mutationFn: (body: { content: string }) => fetchPost('/feed', { body }) });
  const toast = useToast();

  const onSubmit = (payload: FeedPayloadType) => {
    submitMutate(payload, {
      onSuccess() {
        toast.success('작성하였습니다.');
      },
    });
  };

  return (
    <div className={styles.textareaWrapper}>
      <TextareaComponent onSubmit={onSubmit} placeholder='오늘의 이야기를 들려주세요.' />
    </div>
  );
}
