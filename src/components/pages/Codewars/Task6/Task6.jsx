import { useState } from 'react';

export const Task6 = () => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const hours = Number(e.target.elements.text.value) / 3600;
    console.log('hours:' + hours);

    const minutes = (Number(e.target.elements.text.value) % 3600) / 60;
    console.log('minutes:' + minutes);

    const seconds = Number(e.target.elements.text.value) % 60;
    console.log('seconds:' + seconds);

    const resultHours =
      String(Math.floor(hours)).length <= 1
        ? `0${Math.floor(hours)}`
        : Math.floor(hours);
    const resultMinutes =
      String(Math.floor(minutes)).length <= 1
        ? `0${Math.floor(minutes)}`
        : Math.floor(minutes);
    const resultSeconds =
      String(Math.floor(seconds)).length <= 1
        ? `0${Math.floor(seconds)}`
        : Math.floor(seconds);

    console.log(`${resultHours}:${resultMinutes}:${resultSeconds}`);

    setText(
      `${Math.floor(hours)}:${Math.floor(minutes)}:${Math.floor(seconds)}`
    );
  };

  return (
    <>
      <h2>Codewars Task 6</h2>
      <h3>{text}</h3>
      <a href="https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript">
        Task link
      </a>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder="seconds" />
        <button type="submit">START</button>
      </form>
    </>
  );
};
