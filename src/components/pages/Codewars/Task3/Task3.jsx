import { useState } from 'react';

export const Task3 = () => {
  const [text, setText] = useState('');

  const whoLikedMessage = names => {
    if (names.length === 0) {
      return 'no one likes this';
    }

    if (names.length === 1) {
      return `${names[0]} likes this`;
    }

    if (names.length === 2) {
      return `${names[0]} and ${names[1]} like this`;
    }

    if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} others like this`;
    }

    return `${names[0]}, ${names[1]} and ${
      names.length - 2
    } like this`;
  };

  const handleSubmit = e => {
    e.preventDefault();
    setText(whoLikedMessage(e.target.elements.text.value));
  };
  console.log(whoLikedMessage(['Alex']));
  return (
    <>
      <h2>Codewars Task 1</h2>
      <h3>{text}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <button type="submit">START</button>
      </form>
    </>
  );
};
