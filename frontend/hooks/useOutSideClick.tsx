import { useEffect, useState } from 'react';
import type { MutableRefObject } from 'react';

export default function useOutsideClick(ref: MutableRefObject<Element>) {
  const [outsideClick, setOutSideClick] = useState(false);

  useEffect(() => {
    const clickHandler = (event: Event) => {
      if (ref.current) {
        setOutSideClick(!ref.current.contains(event.target as Element));
      }
    };

    document.addEventListener('click', clickHandler);

    () => {
      document.removeEventListener('click', clickHandler);
    };
  }, [ref]);

  return outsideClick;
}
