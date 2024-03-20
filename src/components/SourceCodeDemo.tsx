import { useEffect, useRef, useState } from 'react';
import { Basic } from 'unsplash-js/dist/methods/photos/types';

import { res } from '../const';
import { CrossFadeImg } from './SourceCode';

function SourceCodeDemo() {
  const imageSlideshowTimer = useRef<ReturnType<typeof setInterval>>();
  const [photos, setPhotos] = useState<Basic[][]>([]);
  const [cityIndex, setCityIndex] = useState<number>(0);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  useEffect(() => {
    setPhotos(res);
  }, []);

  useEffect(() => {
    imageSlideshowTimer.current = setInterval(() => {
      if (cityIndex === 2) {
        setPhotoIndex(prev => ++prev % 30);
      }

      setCityIndex(prev => (prev + 1) % 3);
    }, 10 * 1000);

    return () => {
      clearInterval(imageSlideshowTimer.current);
      imageSlideshowTimer.current = undefined;
    };
  }, [cityIndex]);

  useEffect(() => {
    return () => {
      clearInterval(imageSlideshowTimer.current);
      imageSlideshowTimer.current = undefined;
    };
  }, []);

  return (
    <CrossFadeImg
      src={photos?.[cityIndex]?.[photoIndex].urls.regular ?? ''}
      width="1856px"
      height="952px"
    />
  );
}

export { SourceCodeDemo };
