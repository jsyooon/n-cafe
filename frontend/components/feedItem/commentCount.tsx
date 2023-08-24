import styles from './styles.module.scss';

interface Props {
  count: number;
}

export default function CommentCount({ count }: Props) {
  return (
    <span className={styles.commentCount}>
      <span>댓글</span>
      <em>
        {count}
        <style jsx>{`
          em {
            ${count > 0 ? 'color: rgb(var(--point-color))' : ''}
          }
        `}</style>
      </em>
    </span>
  );
}
