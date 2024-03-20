import { useState } from 'react';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import { CrossFadeImg } from './SourceCode';

function ReactCrossFade() {
  const [src, setSrc] = useState<string>(img1);

  function handleClick() {
    if (src === img1) {
      setSrc(img2);
    }
    if (src === img2) {
      setSrc(img3);
    }
    if (src === img3) {
      setSrc(img1);
    }
  }

  return (
    <>
      <button onClick={handleClick}>switch</button>
      <CrossFadeImg
        src={src} // Image URL
        width="800px" // CSS width property
        height="800px" // CSS height property
        objectFit="fill" // CSS object-fit property (optional, defaults to 'fill')
        duration="1s" // CSS transition-duration property (optional, defaults to '1s')
      />
    </>
  );
}

export { ReactCrossFade };
