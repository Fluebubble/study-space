import { useState } from 'react';

export const Task9 = () => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const array = e.target.text.value.split('');
    console.log(array);
    // let previousLetter = null;

    for (let i = 0; i < array.length; i++) {
      const currentChar = array[i];
      // console.log();
      if (array.indexOf(currentChar) === array.lastIndexOf(currentChar)) {
        console.log(currentChar);
        setText(currentChar);
        return array.indexOf(currentChar);
      }
      console.log("netu");
      setText('kek');
      return '';
    }
  };

  return (
    <>
      <h2>Codewars Task 9</h2>
      <h3>{text}</h3>
      <a href="https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/javascript">
        Task link
      </a>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder="text" />
        <button type="submit">START</button>
      </form>
    </>
  );
};
