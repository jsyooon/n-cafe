import { BsHandThumbsUp, BsHandThumbsDown, BsHandThumbsUpFill, BsHandThumbsDownFill } from 'react-icons/bs';
import { formatNumber } from '@/helpers/utils';
import styles from './styles.module.scss';
import type { UpDownType } from '@/types/feed';

interface Props {
  reactions: {
    up: number;
    down: number;
  };
  reactionStatus: {
    up: boolean;
    down: boolean;
  };
  className?: string;
  iconSize?: number;
  onClick(type: UpDownType): void;
}

export default function UpDownButton({ className, reactions, reactionStatus, iconSize = 18, onClick }: Props) {
  return (
    <div className={`${styles.buttonWrap} ${className ?? ''}`}>
      <button type='button' className={reactionStatus.up ? 'is-active' : ''} onClick={() => onClick(1)}>
        <span className='icon'>{reactionStatus.up ? <BsHandThumbsUpFill size={iconSize} /> : <BsHandThumbsUp size={iconSize} />}</span>
        <span className='text'>{formatNumber(reactions.up)}</span>
      </button>
      <button type='button' className={reactionStatus.down ? 'is-active' : ''} onClick={() => onClick(-1)}>
        <span className='icon'>
          <span className='icon'>{reactionStatus.down ? <BsHandThumbsDownFill size={iconSize} /> : <BsHandThumbsDown size={iconSize} />}</span>
        </span>
        <span className='text'>{reactions.down}</span>
      </button>
    </div>
  );
}
