import { useState } from 'react';

export const Task15 = () => {
  const [text, setText] = useState('');
  // const kekArr = [1, 2, 3, 4, 5, 6, 7];
  // console.log(kekArr.splice(3, 1));
  // console.log(kekArr);
  const handleSubmit = e => {
    e.preventDefault();
    const string = e.target.text.value;

    function josephus(arr, shag) {
      const newArr = [...arr];
      const deletedElements = [];
      let currentElementPosition = 0;
      let currentCircleArrLength = newArr.length;
      let currentShag = 0;

      // while (newArr.length !== 0) {
      for (let i = 0; i < 15; i++) {
        console.log(newArr);
        console.log('newArr.length' + newArr.length);
        console.log('currentCircleArrLength' + currentCircleArrLength);
        currentShag += shag;
        console.log('currentShag ' + currentShag);
        // let oldLengthOfArr = newArr.length;
        const currentDelElSum = deletedElements.length;
        if (currentShag < currentCircleArrLength) {
          console.log('if');
          deletedElements.push(newArr[currentShag - 1 - currentDelElSum]);
          newArr.splice(currentShag - 1 - currentDelElSum, 1); // удаляем элемент из основного массива с указанной позицией
          console.log('currentShag ' + currentShag);
        } else {
          console.log('else');
          currentShag -= currentCircleArrLength;
          console.log(currentShag);
          deletedElements.push(newArr[currentShag - 1]);
          console.log('currentShag ' + currentShag);
          newArr.splice(currentShag - 1 - currentDelElSum, 1); // удаляем элемент из основного массива с указанной позицией
          currentCircleArrLength = newArr.length;
        }

        // if (currentElementPosition < newArr.length) {
        //   currentElementPosition += shag; // если текущая позиция элемента меньше длины массива, то увеличиваем её на указанный шаг
        //   console.log('if');
        //   console.log('currentElementPosition ' + currentElementPosition);
        //   deletedElements.push(
        //     newArr[currentElementPosition - 1 - deletedElements.length]
        //   ); // добавляем массив с удаленными элементами из основного массива элемент с указанной позицией
        //   console.log('newArr = ' + newArr);
        //   newArr.splice(currentElementPosition - deletedElements.length, 1); // удаляем элемент из основного массива с указанной позицией
        // } else {
        //   console.log('else');
        //   // console.log(newArr.length);
        //   // currentElementPosition += shag;
        //   console.log(
        //     `currentElementPosition(${currentElementPosition}) = shag(${shag})-currentElementPosition(${currentElementPosition})%newArr.length(${newArr.length})`
        //   );
        //   currentElementPosition = shag - (newArr.length % shag);
        //   // (newArr.length % currentElementPosition) - shag;
        //   // shag - deletedElements.length;
        //   console.log('currentElementPosition ' + currentElementPosition);
        //   deletedElements.push(newArr[currentElementPosition - 1]);
        //   console.log('newArr = ' + newArr);
        //   newArr.splice(currentElementPosition - 1, 1);
        // }

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
