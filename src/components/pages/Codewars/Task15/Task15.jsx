import { useState } from 'react';

export const Task15 = () => {
  const [text, setText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const string = e.target.text.value;

    function josephus(arr, shag) {
      const newArr = [...arr];
      const deletedElements = [];
      let currentElementPosition = 0;

      while (newArr.length !== 0) {
        // for (let i = 0; newArr.length; i++) {
        // console.log('currentElementPosition ' + currentElementPosition);
        if (currentElementPosition < newArr.length) {
          currentElementPosition += shag;
          console.log('if');
          console.log('currentElementPosition ' + currentElementPosition);
          deletedElements.push(
            newArr[currentElementPosition - 1 - deletedElements.length]
          );
          console.log('newArr = ' + newArr);
          newArr.splice(
            currentElementPosition - 1 - (deletedElements.length - 1),
            1
          );
        } else {
          console.log('else');
          // currentElementPosition += shag;
          currentElementPosition =
            shag - (currentElementPosition % newArr.length);
          console.log('currentElementPosition ' + currentElementPosition);
          deletedElements.push(newArr[currentElementPosition - 1]);
          console.log('newArr = ' + newArr);
          newArr.splice(currentElementPosition - 1, 1);
        }
        // console.log(currentElementPosition - 1 - deletedElements.length);
        console.log('deleted = ' + deletedElements);
        console.log('newArr = ' + newArr);
        console.log('--------------------');
      }

      // return newArr;
    }
    // setText(testPassword(string));
    // testPassword(string);
    console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3));
  };

  return (
    <>
      <h2>Codewars Task 15</h2>
      <h3>{text}</h3>
      <a href="https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript">
        Task link
      </a>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder="text" />
        <button type="submit">START</button>
      </form>
    </>
  );
};
