import type { FeedImageList } from '@/types/feed';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

interface Props {
  images?: FeedImageList;
}

export default function FeedImages({ images }: Props) {
  const GRID_TYPE = ['columns', 'rows'];

  const [imageType, setImageType] = useState<number>();

  useEffect(() => {
    setImageType(+(images[0].width < images[0].height));
  }, [images]);

  return (
    <>
      {images?.length > 0 && (
        <div className={styles.imageWrap}>
          {images.map(({ url }) => (
            <div key={url.slice(url.lastIndexOf('/'))} className='image-item'>
              <img src={url} alt='' />
            </div>
          ))}

          <style jsx>
            {`
              div {
                ${images.length === 2 && 'grid-template-columns: repeat(2, 1fr)'}
              }
            `}
          </style>
          <style jsx>
            {`
            div {
              ${
                images.length > 2 &&
                `
              grid-template-${GRID_TYPE[GRID_TYPE.length - imageType + 1]}: repeat(2, 1fr);
              grid-template-${GRID_TYPE.at(imageType * -1)}: repeat(${images.length - 1}, 1fr);
              `
              }

              .image-item:first-child {
                grid-${GRID_TYPE.at(imageType * -1).replace(/s$/, '')}: 1 / ${images.length - 2};
              }
            }
          `}
          </style>
        </div>
      )}
    </>
  );
}
