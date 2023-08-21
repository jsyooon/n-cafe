import { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import type { FeedImageList } from '@/types/feed';
import 'photoswipe/style.css';

export default function useImageViewer(images: FeedImageList) {
  const lightbox = useRef<PhotoSwipeLightbox>();

  const openImageView = (index: number) => {
    if (!lightbox.current) {
      lightbox.current = new PhotoSwipeLightbox({
        pswpModule: () => import('photoswipe'),
      });
      lightbox.current.addFilter('numItems', () => images.length);
      lightbox.current.addFilter('itemData', (itemData, index: number) => {
        const { url, ...metadata } = images[index] ?? {};
        const data = { src: url, ...metadata };
        if (data.width) return data;

        const image = new Image();
        image.src = url;

        data.width = image.width;
        data.height = image.height;
        return data;
      });

      lightbox.current.init();
    }

    lightbox.current.loadAndOpen(index);
  };

  useEffect(() => {
    return () => {
      if (lightbox.current) lightbox.current.destroy();
    };
  }, []);

  return openImageView;
}
