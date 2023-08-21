'use client';

import { useRef, useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import Button from '@/components/button';
import ImageUpload from '@/components/imageUpload';
import { fetchPost } from '@/helpers/fetch';
import type { FeedImageList, FeedImage, FeedPayloadType } from '@/types/feed';
import styles from './style.module.scss';

interface Props {
  placeholder?: string;
  initialContent?: string;
  onSubmit: (payload: FeedPayloadType) => any;
}

export default function Textarea({ placeholder, initialContent, onSubmit }: Props) {
  const { mutate: uploadImageMutate } = useMutation({ mutationFn: (body: FormData) => fetchPost<Array<FeedImage['url']>>('/upload/feed', { body }) });

  const textarea = useRef<HTMLDivElement>();
  const [uploadImages, setUploadImages] = useState<FeedImageList>([]);
  const [selectRange, setSelectRange] = useState<Range>();

  const onClickSubmit = () => {
    const attatchedImages = Array.from(textarea.current.querySelectorAll('img')).map<FeedImage>((element: HTMLImageElement) => ({ url: element.src }));

    onSubmit({ images: attatchedImages?.length ? attatchedImages : uploadImages, content: textarea.current.innerHTML });
  };

  useEffect(() => {
    if (initialContent) {
      textarea.current.innerHTML = initialContent;
    }
  }, [initialContent]);

  const onSelect = () => {
    const select = getSelection();
    if (select) setSelectRange(select?.getRangeAt(0));
  };

  const onChangeImage = (fileList: FileList) => {
    const body = new FormData();

    for (let file of fileList) {
      body.append('images', file);
    }

    uploadImageMutate(body, {
      onSuccess({ data }) {
        for (let url of data) {
          setUploadImages((prev) => [...prev, { url }]);
          const image = new Image();
          image.src = url;
          if (selectRange) {
            selectRange.insertNode(image);
            selectRange.setStartAfter(image);
          } else {
            textarea.current.appendChild(image);
          }
        }
      },
    });
  };

  return (
    <div className={styles.textareaWrap}>
      <div className='editable' contentEditable suppressContentEditableWarning ref={textarea} onSelect={onSelect}>
        <style jsx>
          {`
            div:empty:before {
              content: '${placeholder ?? ''}';
            }
          `}
        </style>
      </div>
      <div className='button-wrap'>
        <ImageUpload multiple className={styles.imageUpload} onChange={onChangeImage} />
        <Button type='button' className='submit-button' onClick={onClickSubmit}>
          등록
        </Button>
      </div>
    </div>
  );
}
