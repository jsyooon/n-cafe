'use client';

import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import TextareaComponent from '@/components/textarea';
import { fetchGet, fetcher } from '@/helpers/fetch';
import type { FeedImage, FeedItem, FeedPayloadType } from '@/types/feed';
import styles from './style.module.scss';

interface Props {
  data: Pick<FeedItem, 'id' | 'images' | 'content'>;
  content?: string;
  feedId?: string;
}

export default function Editor({ data }: Props) {
  const router = useRouter();

  const { mutate: submitMutate } = useMutation({
    mutationFn: (body: FeedPayloadType) => {
      if (data.id) return fetcher(`/feed/${data.id}`, 'PUT', { body });
      return fetcher('/feed', 'POST', { body });
    },
  });

  const fetchImageMetadata = async (url: string) => {
    const urlObject = new URL(url);
    const { data } = await fetchGet<Pick<FeedImage, 'width' | 'height'>>(`/upload/metadata?path=${urlObject.pathname}`);
    return data;
  };

  const onSubmit = async ({ content, images }: FeedPayloadType) => {
    try {
      const payload = { content, images };
      const firstImage = images?.[0];
      if (firstImage) {
        const medadata = await fetchImageMetadata(firstImage.url);
        payload.images[0] = { ...firstImage, ...medadata };
      }

      submitMutate(payload, {
        onSuccess() {
          router.push('/');
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.textareaWrapper}>
      <TextareaComponent onSubmit={onSubmit} initialContent={data?.id ? data?.content : undefined} placeholder='오늘의 이야기를 들려주세요.' />
    </div>
  );
}
