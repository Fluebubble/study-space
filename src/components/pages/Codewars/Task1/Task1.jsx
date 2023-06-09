import { useState } from 'react';

export const Task1 = () => {
  const [text, setText] = useState('');
  const headingString = string => {
    const arrString = string.split(' ');
    const headedArr = arrString.map(
      word => word[0].toUpperCase() + word.slice(1)
    );
    const headedString = headedArr.join(' ');
    return headedString;
  };

  console.log(headingString('lol my Face is pretty good'));
  const handleSubmit = e => {
    e.preventDefault();
    setText(headingString(e.target.elements.text.value));
  };
  console.log(headingString('lol my Face is pretty good'));
  return (
    <>
      <h2>Codewars Task 1</h2>
      <a href="https://www.codewars.com/kata/5390bac347d09b7da40006f6">Task link</a>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <button type="submit">START</button>
      </form>
      <h3>{text}</h3>
    </>
  );
};
