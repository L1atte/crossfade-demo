import './WorldClock.css';

import { DateTime } from 'luxon';
import { useEffect, useRef, useState } from 'react';
import FlipNumbers from 'react-flip-numbers';

import location from '../../assets/location.svg';
import { cities } from '../../const';
import { FadeOutUp } from '../FadeOutUp/FadeOutUp';

function WorldClock({ cityData }: { cityData: (typeof cities)[number] }): JSX.Element {
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
        <span className="city">{cityData.city}</span>
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
            background="transparent"
            play
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
