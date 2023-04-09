export const Task1 = () => {
  const headingString = string => {
    const arrString = string.split(' ');
    const headedArr = arrString.map(
      word => word[0].toUpperCase() + word.slice(1)
    );
    const headedString = headedArr.join(' ');
    return headedString;
  };

  console.log(headingString('lol my Face is pretty good'));
  return <h2>Codewars Task 1</h2>;
};
