import { useState } from 'react';

const ref = {
  '·-': 'A',
  '-···': 'B',
  '-·-·': 'C',
  '-··': 'D',
  '·': 'E',
  '··-·': 'F',
  '--·': 'G',
  '····': 'H',
  '··': 'I',
  '·---': 'J',
  '-·-': 'K',
  '·-··': 'L',
  '--': 'M',
  '-·': 'N',
  '---': 'O',
  '·--·': 'P',
  '--·-': 'Q',
  '·-·': 'R',
  '···': 'S',
  '-': 'T',
  '··-': 'U',
  '···-': 'V',
  '·--': 'W',
  '-··-': 'X',
  '-·--': 'Y',
  '--··': 'Z',
  '·----': '1',
  '··---': '2',
  '···--': '3',
  '····-': '4',
  '·····': '5',
  '-····': '6',
  '--···': '7',
  '---··': '8',
  '----·': '9',
  '-----': '0',
  '   ': ' ',
};

export const Task10 = () => {
  const [text, setText] = useState('');
  const handleSubmit = e => {
    const arr = e.target.text.value
      .trim()
      .split(/(\s+)/)
      .filter(char => char !== ' ');
    console.log('arr ===', arr);
    e.preventDefault();
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      console.log('arr[i] === ', arr[i]);
      console.log('ref[arr[i]] === ', ref[arr[i]]);
      console.log(Object.keys(ref).includes(arr[i]));

      if (Object.keys(ref).includes(arr[i]) || arr[i] === '   ') {
        // console.log(Object.keys(ref)[arr[i]]);
        // console.log(ref[arr[i]]);
        newArr.push(ref[arr[i]]);
      }
    }
    console.log(newArr.join(''));
    setText(newArr);
  };

  return (
    <>
      <h2>Codewars Task 10</h2>
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
