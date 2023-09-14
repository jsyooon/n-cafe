import { useQueryClient } from '@tanstack/react-query';
import UpDownButton from '@/components/feedItem/upDownButton';
import { FEEDS_LIST_QUERY_KEY } from '@/queries/feed';
import type { FeedPreviewItem, FeedPreviewList, ReactionStatus } from '@/types/feed';
import styles from './styles.module.scss';

interface Props {
  data: FeedPreviewItem;
}

export default function FeedPreviewUpDownButton({ data }: Props) {
  const queryClient = useQueryClient();

  const onSuccess = (reactionStatus: ReactionStatus) => {
    queryClient.setQueryData(FEEDS_LIST_QUERY_KEY, (prevData: FeedPreviewList) =>
      prevData.map((prev) => {
        if (prev.id !== data.id) return prev;
        return {
          ...prev,
          reactionStatus: {
            ...prev.reactionStatus,
            ...reactionStatus,
          },
          reactions: {
            ...prev.reactions,
            ...Object.entries(reactionStatus).reduce((acc, [key, value]) => ({ [key]: prev.reactions[key] + 1 * (value ? 1 : -1) }), {}),
          },
        };
      })
    );
  };

  return (
    <UpDownButton
      id={data.id}
      reactions={{ up: data.reactions.up, down: data.reactions.down }}
      reactionStatus={data.reactionStatus}
      className={styles.upDownButton}
      onSuccess={onSuccess}
    />
  );
}
