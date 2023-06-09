import { useState } from 'react';

export const Task8 = () => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const cuttedFirstPart = e.target.text.value
      .replace('https://', '')
      .replace('http://', '')
      .replace('www.', '');

    const result = cuttedFirstPart.slice(0, cuttedFirstPart.indexOf('.'));
    console.log(cuttedFirstPart, cuttedFirstPart.indexOf('.'));
    console.log(result);
    setText(result);
  };

  return (
    <>
      <h2>Codewars Task 8</h2>
      <h3>{text}</h3>
      <a href="https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript">
        Task link
      </a>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder="text" />
        <button type="submit">START</button>
      </form>
    </>
  );
};
