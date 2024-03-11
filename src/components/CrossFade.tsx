import './CrossFade.css';

import { ReactNode, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function CrossFade({ children }: { children: ReactNode | ReactNode[] }) {
  const [index, setIndex] = useState<number>(0);

  function handleClick() {
    if (Array.isArray(children)) {
      if (index >= children.length - 1) {
        setIndex(0);
      } else {
        setIndex(prev => ++prev);
      }
    }
  }

  return (
    <TransitionGroup className="component-wrapper">
      <div
        key={index}
        onClick={handleClick}
      >
        {Array.isArray(children) ? children[index] : children}
      </div>
    </TransitionGroup>
  );
}

function CrossFadeImg({ src }: { src: string }) {
  return (
    <TransitionGroup>
      <CSSTransition
        classNames="cross-fade"
        timeout={2000}
      >
        <img src={src} />
      </CSSTransition>
    </TransitionGroup>
  );
}

export { CrossFade, CrossFadeImg };
