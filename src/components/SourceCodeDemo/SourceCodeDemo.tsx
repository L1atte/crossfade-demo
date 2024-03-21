import { useEffect, useRef, useState } from 'react';
import { Basic } from 'unsplash-js/dist/methods/photos/types';

import { cities, res } from '../../const';
import { preloadPhotos } from '../../util';
import { CrossFadeImg } from '../SourceCode';
import { WorldClock } from '../WorldClock/WorldClock';

function SourceCodeDemo() {
  const imageSlideshowTimer = useRef<ReturnType<typeof setInterval>>();
  const [photos, setPhotos] = useState<Basic[][]>([]);
  const [cityIndex, setCityIndex] = useState<number>(0);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  useEffect(() => {
    setPhotos(res);

    const urls = res.map(item => {
      return item[(photoIndex + 1) % 30].urls.regular;
    });

    requestIdleCallback(() => preloadPhotos(urls));
  }, [photoIndex]);

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
    <>
      <WorldClock
        cityData={cities[cityIndex]}
        author={photos?.[cityIndex]?.[photoIndex].user.username}
      />
      <CrossFadeImg
        src={photos?.[cityIndex]?.[photoIndex].urls.regular ?? ''}
        // width="1856px"
        // height="952px"
        width="100%"
        height="100%"
      />
    </>
  );
}

export { SourceCodeDemo };
