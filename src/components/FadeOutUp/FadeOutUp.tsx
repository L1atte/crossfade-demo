import { ReactNode, useEffect } from 'react';

import { animated, useSpringRef, useTransition } from '@react-spring/web';

function FadeInOut({ children, childKey }: { children: ReactNode; childKey: string | number }) {
  const transRef = useSpringRef();
  const transitions = useTransition(childKey, {
    ref: transRef,

    from: { opacity: 0, transform: 'translate3d(0,100%,0)' },

    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },

    leave: { opacity: 0, transform: 'translate3d(0,-100%,0)' },
  });

  useEffect(() => {
    transRef.start();
  }, [childKey, transRef]);

  return (
    <>
      {transitions(style => (
        <animated.div style={style}>{children}</animated.div>
      ))}
    </>
  );
}

export { FadeInOut };
