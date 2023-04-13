import { useState } from 'react';

export const Task4 = () => {
  const [text, setText] = useState('');

  const maskify = string => {
    const arrFromString = string.split('');
    if (arrFromString.length > 4) {
      for (let i = 0; i < arrFromString.length - 4; i++) {
        arrFromString[i] = '#';
      }
    }
    return arrFromString.join('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    setText(maskify(e.target.elements.text.value));
  };
  // console.log(maskify('Alexx'));
  return (
    <>
      <h2>Codewars Task 4</h2>
      <h3>{text}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <button type="submit">START</button>
      </form>
    </>
  );
};
