import { useState } from 'react';

export const Task5 = () => {
  const [text, setText] = useState('');

  const generateHashtag = string => {
    if (string.trim().length !== 0) {
      const arr = string
        .trim()
        .replace(/\s+/g, ' ')
        .split(' ')
        .map(word => {
          return word[0].toUpperCase() + word.slice(1, word.length);
        });
      const hashtag = `#${arr.join('')}`;
      console.log(hashtag);
      if (hashtag.length > 140) {
        console.log('kek');
        return false;
      }
      console.log('hashtagReturned');
      return hashtag;
    }
    console.log(false);
    return false;
  };
  const handleSubmit = e => {
    e.preventDefault();
    setText(generateHashtag(e.target.elements.text.value));
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
