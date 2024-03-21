import './WorldClock.css';

import { DateTime } from 'luxon';
import { useEffect, useRef, useState } from 'react';
import FlipNumbers from 'react-flip-numbers';

import location from '../../assets/location.svg';
import { FadeOutUp } from '../FadeOutUp/FadeOutUp';

const cities = ['tokyo', 'beijing', 'hangzhou'];

function WorldClock(): JSX.Element {
  const timer = useRef<ReturnType<typeof setInterval>>();
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    setTime(DateTime.now().toFormat('HH : mm : ss'));

    timer.current = setInterval(() => {
      setTime(DateTime.now().toFormat('HH : mm : ss'));
    }, 1000);

    return () => {
      clearInterval(timer.current);
      timer.current = undefined;
    };
  }, []);

  return (
    <div className="text-wrapper">
      <div>
        <span className="city">{cities[0]}</span>
        <img
          width={60}
          height={60}
          src={location}
        ></img>
        <br />
        <div>
          <FlipNumbers
            height={40}
            width={40}
            color="white"
            background="black"
            play
            perspective={400}
            numbers={time ?? ''}
          />
        </div>
      </div>
      <FadeOutUp>
        <div>hello</div>
      </FadeOutUp>
    </div>
  );
}

export { WorldClock };
