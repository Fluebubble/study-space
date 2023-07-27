import { useState } from 'react';

export const Task14 = () => {
  const [text, setText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const string = e.target.text.value;

    const restrictedSymbols = /[^0-9a-zA-Z]/g;

    function testPassword(str) {
      // console.log('kek');
      const trimmedString = str.trim();

      if (restrictedSymbols.test(trimmedString)) {
        console.log('includes restr symbols');
        return false;
      }
      if (string.length === 0) {
        return false;
      }
      return true;
    }
    setText(testPassword(string));
    // testPassword(string);
  };

  return (
    <>
      <h2>Codewars Task 14</h2>
      <h3>{text}</h3>
      <a href="https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript">
        Task link
      </a>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder="text" />
        <button type="submit">START</button>
      </form>
    </>
  );
};
