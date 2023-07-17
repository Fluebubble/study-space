import { useState } from 'react';

export const Task12 = () => {
  const [text, setText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const str = e.target.text.value;

    function changeStuff(a, b, c) {
      a = a * 10;
      b.item = 'changed';
      c = { item: 'changed' };
    }

    let num = 10;
    const obj1 = { item: '-' };
    const obj2 = { item: '-' };

    changeStuff(num, obj1, obj2);

    console.log(num);
    console.log(obj1);
    console.log(obj2);
  };

  return (
    <>
      <h2>Codewars Task 12</h2>
      <h3>{text}</h3>
      <a href="https://www.codewars.com/kata/decode-the-morse-code">
        Task link
      </a>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder="text" />
        <button type="submit">START</button>
      </form>
    </>
  );
};
