'use client';

import { redirect } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import TextareaComponent from '@/components/textarea';
import { fetchGet, fetchPost } from '@/helpers/fetch';
import type { FeedImage, FeedPayloadType } from '@/types/feed';
import styles from './style.module.scss';

export default function Editor() {
  const { mutate: submitMutate } = useMutation({ mutationFn: (body: FeedPayloadType) => fetchPost('/feed', { body }) });

  const onSubmit = async ({ content, images }: FeedPayloadType) => {
    try {
      const payload = { content, images };
      const firstImage = images?.[0];
      if (firstImage) {
        const url = new URL(images[0].url);
        const { data } = await fetchGet<Pick<FeedImage, 'width' | 'height'>>(`/upload/metadata?path=${url.pathname}`);
        payload.images[0] = { ...firstImage, ...data };
      }

      submitMutate(payload, {
        onSuccess() {
          redirect('/');
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.textareaWrapper}>
      <TextareaComponent onSubmit={onSubmit} placeholder='오늘의 이야기를 들려주세요.' />
    </div>
  );
}
