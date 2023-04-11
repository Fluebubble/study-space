import { useState } from 'react';

export const Task2 = () => {
  const [text, setText] = useState('');

  const spinningWords = string => {
    const arrString = string.split(' ');
    const editedArr = arrString.map(word => {
      if (word.length >= 5) {
        console.log(word);
        return word.split('').reverse().join('');
      }
      return word;
    });
    const finishedString = editedArr.join(' ');
    return finishedString;
  };

  const handleSubmit = e => {
    e.preventDefault();
    setText(spinningWords(e.target.elements.text.value))
  };
  console.log(spinningWords('lol my Face is pretty good'));
  return (
    <>
      <h2>Codewars Task 1</h2>
      <h3>{text}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name='text' />
        <button type="submit">START</button>
      </form>
    </>
  );
};
