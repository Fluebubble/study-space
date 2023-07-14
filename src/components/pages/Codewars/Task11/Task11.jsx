import { useState } from 'react';

export const Task11 = () => {
  const [text, setText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const regex = /[^\w']/g;
    const str = e.target.text.value.replace(regex, ' ');
    const arr = str.split(' ');
    const newArr = [];
    console.log(arr);
    const wordCount = {
      // word1: 'word1value',
      // word2: 'word2value',
      // word3: 'word3value',
      // word4: 'word4value',
    };

    console.log(wordCount['word1']);
    console.log(Object.keys(wordCount).includes('word11'));
    arr.forEach(word => {
      if (word !== '') {
        if (Object.keys(wordCount).includes(word)) {
          wordCount[word] += 1;
        } else {
          wordCount[word] = 1;
        }
      }
    });

    console.log(wordCount);

    const sortedWords = Object.keys(wordCount).sort(
      (a, b) => wordCount[b] - wordCount[a]
    );

    console.log(sortedWords.slice(0, 3));
  };

  return (
    <>
      <h2>Codewars Task 11</h2>
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
