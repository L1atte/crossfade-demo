import { CountUp } from 'countup.js';
import { useCallback, useEffect, useRef } from 'react';

const target = 1000;

function Countup(): JSX.Element {
  // create a ref and declare an instance for each countUp animation
  const countupRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let countUpAnim: CountUp;

  // dynamically import and initialize countUp, sets value of `countUpAnim`
  // you don't have to import this way, but this works best for next.js
  const initCountUp = useCallback(() => {
    if (countupRef.current) {
      const countUpAnim = new CountUp(countupRef.current, target);
      if (!countUpAnim.error) {
        countUpAnim.start();
      } else {
        console.error(countUpAnim.error);
      }
    }
  }, []);

  // useEffect with empty dependency array runs once when component is mounted
  useEffect(() => {
    initCountUp();
  }, [initCountUp]);

  function handleClick() {
    countUpAnim.update(2000);
  }

  // in the jsx use the ref attribute to bind the element to `countupRef`
  return (
    <>
      <div>count</div>
      <h1
        ref={countupRef}
        onClick={() => {
          // replay animation on click
          countUpAnim.reset();
          countUpAnim.start();
        }}
      >
        0
      </h1>

      <button onClick={handleClick}>update</button>
    </>
  );
}

export { Countup };
