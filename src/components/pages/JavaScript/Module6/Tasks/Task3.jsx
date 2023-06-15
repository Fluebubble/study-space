import { NavBar } from 'components/NavBar/NavBar';
import { NavItem } from 'components/NavItem/NavItem';
import { useEffect, useState } from 'react';

export const JsTask3 = () => {
  const [counterValue, setCounterValue] = useState(0);

  // useEffect(() => {}, []);

  const handleIncrement = () => {
    setCounterValue(counterValue + 1);
  };
  const handleDecrement = () => {
    setCounterValue(counterValue - 1);
  };
  return (
    <>
      <div id="counter">
        <button type="button" data-action="decrement" onClick={handleDecrement}>
          -1
        </button>
        <span id="value">{counterValue}</span>
        <button type="button" data-action="increment" onClick={handleIncrement}>
          +1
        </button>
      </div>
    </>
  );
};
