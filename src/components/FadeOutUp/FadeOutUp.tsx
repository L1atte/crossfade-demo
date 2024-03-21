import './FadeOutUp.css';

import { ReactNode, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

/**
 * <FadeOutUp>{child1}</FadeOutUp>
 * <FadeOutUp>{child2}</FadeOutUp>
 * <FadeOutUp>{child3}</FadeOutUp>
 * <FadeOutUp>{child4}</FadeOutUp>
 */

function FadeOutUp({ children }: { children: ReactNode }) {
  const [childList, setChildList] = useState<(ReactNode | null)[]>([null, null]);
  const [switchFlag, setSwitchFlag] = useState<boolean>(false);

  const nextChild = children !== childList[1] ? children : null;

  return (
    <>
      <button onClick={() => setSwitchFlag(prev => !prev)}>switch</button>
      <div style={{ position: 'relative' }}>
        <CSSTransition
          classNames="_fade_out_up"
          in={switchFlag}
          timeout={200}
          unmountOnExit
        >
          {children}
        </CSSTransition>
        <CSSTransition
          classNames="_fade_in_bottom"
          in={!switchFlag}
          timeout={200}
          unmountOnExit
        >
          {children}
        </CSSTransition>
      </div>
    </>
  );
}

export { FadeOutUp };
