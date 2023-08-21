import useImageViewer from '@/hooks/useImageViewer';
import { BsImage } from 'react-icons/bs';
import type { FeedImageList } from '@/types/feed';
import styles from './styles.module.scss';

interface Props {
  images: FeedImageList;
}

export default function FeedImages({ images }: Props) {
  const GRID_TYPE = ['columns', 'rows'];

  const THUMBNAIL_LENGTH = 4;

  const thumbnailLength = Math.min(images.length, THUMBNAIL_LENGTH);
  const imageType = +(images[0].width < images[0].height);

  const viewImage = useImageViewer(images);

  return (
    <>
      {images.length > 0 && (
        <div className={`image-wrap ${styles.feedImages}`}>
          <style jsx>
            {`
              .image-wrap {
                ${thumbnailLength === 2 ? 'grid-template-columns: repeat(2, 1fr)' : ''}
                ${
                  thumbnailLength > 2
                    ? `
                aspect-ratio: 10 / 9;
                grid-template-${GRID_TYPE[GRID_TYPE.length - (imageType + 1)]}: repeat(2, 1fr);
                grid-template-${GRID_TYPE.at(imageType * -1)}: repeat(${thumbnailLength - 1}, 1fr);
                `
                    : ''
                }
  
                .image-item:first-child {
                  grid-${GRID_TYPE.at(imageType * -1).replace(/s$/, '')}: 1 / ${thumbnailLength};
                }
              }
            `}
          </style>

          {images.slice(0, THUMBNAIL_LENGTH).map(({ url }, index) => (
            <div key={`${index}-${url.slice(url.lastIndexOf('/') + 1)}`} className='image-item' onClick={() => viewImage(index)}>
              <img src={url} alt='' />
            </div>
          ))}
          {images.length > THUMBNAIL_LENGTH && (
            <div className='more'>
              <BsImage size={15} />
              <span>+{images.length - THUMBNAIL_LENGTH}</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
