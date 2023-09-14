import UpDownButton from '@/components/upDownButton';
import { useMutation } from '@tanstack/react-query';
import { fetcher } from '@/helpers/fetcher';
import type { FeedItem, ReactionStatus, UpDownType, UpdownReactions } from '@/types/feed';

interface Props {
  id: FeedItem['id'];
  reactions: UpdownReactions;
  reactionStatus: ReactionStatus;
  className?: string;
  onSuccess?: (reactionStatus: Partial<ReactionStatus>) => void;
}

export default function FeedUpdown({ id, reactions, reactionStatus, onSuccess, className }: Props) {
  const reactionCode = {
    '1': 'up',
    '-1': 'down',
  };
  const reactionResult = {
    POST: true,
    DELETE: false,
  };

  const { mutate } = useMutation({
    mutationFn: ({ method, rating }: { method: 'POST' | 'DELETE'; rating: UpDownType }) => fetcher(`/feed/${id}/rating`, method, { body: rating }),
  });

  const onClick = (rating: UpDownType) => {
    const method = reactionStatus[reactionCode[`${rating}`]] ? 'DELETE' : 'POST';
    mutate({ method, rating }, { onSuccess: () => onSuccess({ [reactionCode[rating]]: reactionResult[method] }) });
  };

  return <UpDownButton className={className} reactions={reactions} onClick={onClick} reactionStatus={reactionStatus} />;
}
