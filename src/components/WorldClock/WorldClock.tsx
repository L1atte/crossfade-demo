import './WorldClock.css';

import { DateTime } from 'luxon';
import { useEffect, useRef, useState } from 'react';
import FlipNumbers from 'react-flip-numbers';

import location from '../../assets/location.svg';
import { cities } from '../../const';

function WorldClock({
  cityData,
  author,
}: {
  cityData: (typeof cities)[number];
  author: string;
}): JSX.Element {
  const timer = useRef<ReturnType<typeof setInterval>>();
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    setTime(DateTime.now().toFormat('HH : mm'));

    timer.current = setInterval(() => {
      setTime(DateTime.now().setZone(cityData.timezone).toFormat('HH : mm'));
    }, 1000);

    return () => {
      clearInterval(timer.current);
      timer.current = undefined;
    };
  }, [cityData.timezone]);

  return (
    <div className="text-wrapper">
      <div>
        <div className="city-wrapper">
          <img
            width={30}
            height={30}
            src={location}
          ></img>
          <span className="city">{cityData.city}</span>
        </div>
        <div>
          <FlipNumbers
            height={40}
            width={40}
            color="white"
            background="transparent"
            play
            numbers={time ?? ''}
          />
        </div>

        <div>{`By ${author} - Unsplash`}</div>
      </div>
    </div>
  );
}

/**
 *  function App() {
  const [index, set] = useState(0)
  const onClick = () => set(state => (state + 1) % 3)
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  useEffect(() => {
    transRef.start()
  }, [index])
  return (
    <div className={`flex fill ${styles.container}`} onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })}
    </div>
  )
}
 */

export { WorldClock };
