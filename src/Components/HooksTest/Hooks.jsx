import { useRef, useEffect, useState, forwardRef } from 'react';
import { ButtoryLevel } from './Hooks.styled';
import { useBattery } from 'react-use';
import { BsBatteryCharging, BsBatteryFull } from 'react-icons/bs';
import { Button } from 'Components/GlobalStyle.styled';

export const TestHooks = () => {
  const [value, setValue] = useState(0);
  const batteryState = useBattery();
  const valueRef = useRef(0);

  const level = (batteryState.level * 100).toFixed(0);
  const colorLevel = level < 20 ? 'red' : 'green';

  useEffect(() => {
    console.log('btnRef.current: ', valueRef.current);
  });

  const handleClick = () => {
    // valueRef.current += 1;

    setValue(value + 1);
  };

  return (
    <>
      <ButtoryLevel>
        Battery: <span style={{ color: colorLevel }}>{level}%</span>{' '}
        <span>
          {batteryState.charging ? (
            <BsBatteryCharging size="40" />
          ) : (
            <BsBatteryFull size="40" />
          )}
        </span>
      </ButtoryLevel>

      <Button ref={valueRef} onClick={handleClick}>
        {value}
      </Button>
    </>
  );
};
