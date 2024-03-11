import { useState } from 'react';
import CrossfadeImg from 'react-crossfade-img';

import img3 from '../assets/dima-dallacqua-_omSqvm_Ohk-unsplash.jpg';
import img1 from '../assets/dima-dallacqua-DgjKb7Y_R-4-unsplash.jpg';
import img2 from '../assets/dima-dallacqua-TkDvYSgkyFw-unsplash.jpg';

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
      <CrossfadeImg
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
