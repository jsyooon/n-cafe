'use client';

import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import TextareaComponent from '@/components/textarea';
import { fetchGet, fetcher } from '@/helpers/fetch';
import { getFeedItemQueryKey, useFeedItemQuery } from '@/queries/feed';
import type { FeedImage, FeedItem, FeedPayloadType } from '@/types/feed';
import styles from './style.module.scss';

interface Props {
  data: FeedItem;
  content?: string;
  feedId?: string;
}

export default function Editor({ data }: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();
  if (data) useFeedItemQuery(data.id, { initialData: data });

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
          queryClient.invalidateQueries(getFeedItemQueryKey(data.id));
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
