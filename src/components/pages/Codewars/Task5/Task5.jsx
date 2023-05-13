import { useState } from 'react';

export const Task5 = () => {
  const [text, setText] = useState('');

  const romanToArabic = string => {
    console.log(string);
    const romanArr = string.split('');
    console.log(romanArr);
    const arabicArr = romanArr.map(romanNumber => {
      // if (romanNumber === 'I') {
      //   return 1;
      // }
      // if (romanNumber === 'V') {
      //   return 5;
      // }
      // if (romanNumber === 'X') {
      //   return 10;
      // }
      // if (romanNumber === 'L') {
      //   return 50;
      // }
      // if (romanNumber === 'C') {
      //   return 100;
      // }
      // if (romanNumber === 'D') {
      //   return 500;
      // }
      // if (romanNumber === 'M') {
      //   return 1000;
      // }
      if (romanNumber === 1) {
        return 'I';
      }
      if (romanNumber === 5) {
        return 'V';
      }
      if (romanNumber === 10) {
        return 'X';
      }
      if (romanNumber === 50) {
        return 'L';
      }
      if (romanNumber === 100) {
        return 'C';
      }
      if (romanNumber === 500) {
        return 'D';
      }
      if (romanNumber === 1000) {
        return 'M';
      }
      return 'Exception';
    });
    let sum = 0;
    for (const number of arabicArr) {
      sum += number;
    }
    return sum;
    // console.log(arabicArr);
    // return romanArr;
  };
  const handleSubmit = e => {
    e.preventDefault();
    setText(romanToArabic(e.target.elements.text.value));
  };
  // console.log(maskify('Alexx'));
  return (
    <>
      <h2>Codewars Task 5</h2>
      <h3>{text}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <button type="submit">START</button>
      </form>
    </>
  );
};
