import { useState } from 'react';

export const Task12 = () => {
  const [text, setText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();

    function toHex(rgbNum) {
      if (rgbNum <= 0) {
        return 0;
      }
      if (rgbNum >= 255) {
        return 'ff';
      }
      const hexNum = Number(rgbNum).toString(16).padStart(2, '0');

      return hexNum;
    }

    function rgb(r, g, b) {
      // complete this function
      let result = '';
      for (let arg of arguments) {
        if (arg <= 0) {
          result += '00';
        } else if (arg >= 255) {
          result += 'FF';
        } else {
          result += arg.toString(16).padStart(2, '0').toUpperCase();
        }
      }
      return result;
    }
    console.log(rgb(0, 0, 0));
    setText(toHex(e.target.text.value));
    console.log(toHex(e.target.text.value));
  };

  return (
    <>
      <h2>Codewars Task 12</h2>
      <h3>{text}</h3>
      <a href="https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript">
        Task link
      </a>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder="text" />
        <button type="submit">START</button>
      </form>
    </>
  );
};
