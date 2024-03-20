import { useEffect, useState } from 'react';

import { res } from '../const';
import { preloadPhotos } from '../util';
import { CrossFadeImg } from './SourceCode';

function Test() {
  const [cityIndex, setCityIndex] = useState<number>(0);
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    const urls = res.map(item => {
      return item[photoIndex].urls.regular;
    });

    setUrls(urls);

    requestIdleCallback(() => preloadPhotos(urls));
  }, [photoIndex]);

  function handleClick() {
    if (cityIndex === 2) {
      setPhotoIndex(prev => ++prev);
    }

    setCityIndex(prev => (prev + 1) % 3);
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CrossFadeImg
          width={'400px'}
          height={'400px'}
          src={urls[cityIndex]}
        ></CrossFadeImg>
        <button onClick={handleClick}>switch</button>
      </div>
      <br />
    </>
  );
}

export { Test };
