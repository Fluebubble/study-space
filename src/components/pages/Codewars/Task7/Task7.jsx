import { useState } from 'react';

export const Task7 = () => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const alphabet = {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5,
      F: 6,
      G: 7,
      H: 8,
      I: 9,
      J: 10,
      K: 11,
      L: 12,
      M: 13,
      N: 14,
      O: 15,
      P: 16,
      Q: 17,
      R: 18,
      S: 19,
      T: 20,
      U: 21,
      V: 22,
      W: 23,
      X: 24,
      Y: 25,
      Z: 26,
    };

    const arrayText = e.target.elements.text.value.split('');

    const numbersOfLetters = [];

    for (const letter of arrayText) {
      console.log(letter.toUpperCase());
      if (letter.toUpperCase() in alphabet) {
        numbersOfLetters.push(alphabet[letter.toUpperCase()]);
      }
    }

    console.log(numbersOfLetters);
    setText(numbersOfLetters.join(' '));
    return numbersOfLetters.join(' ');
  };

  return (
    <>
      <h2>Codewars Task 7</h2>
      <h3>{text}</h3>
      <a href="https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript">
        Task link
      </a>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder="text" />
        <button type="submit">START</button>
      </form>
    </>
  );
};
