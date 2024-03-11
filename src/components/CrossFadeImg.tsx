import './CrossFade.css';

import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function CrossFadeImg({ src }: { src: string }) {
  const [inProp, setInProp] = useState(false);

  return (
    <>
      <CSSTransition
        in={inProp}
        onEnter={() => {
          console.log('onEnter');
        }}
        onExited={() => console.log('onExited')}
        classNames="cross-fade"
        timeout={2000}
      >
        <img
          width={400}
          height={400}
          src={src}
        />
      </CSSTransition>
      <button
        onClick={() => {
          setInProp(prev => !prev);
        }}
      >
        click
      </button>
    </>
  );
}

export { CrossFadeImg };
