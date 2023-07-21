import { useState } from 'react';

export const Task13 = () => {
  const [text, setText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    // const dice = e.target.text.value.split(' ');

    function greedy(dice) {
      const counter = {};
      let totalPoints = 0;

      for (const num of dice) {
        console.log(num);
        if (counter.hasOwnProperty(num)) {
          // если число уже инициализированно в счетчике, увеличиваем его на единицу
          counter[num] += 1;
        } else {
          console.log(`inizial ${num}`);
          counter[num] = 1; // если не инициализированно, то инициализируем в объекте значение 1 с ключом номера выпавшего на кубике
        }
      }

      for (const key in counter) {
        if (Number(key) !== 1 && Number(key) !== 5 && counter[key] >= 3) {
          totalPoints += Number(key) * 100;
        }
        if (Number(key) === 1) {
          if (counter[key] >= 3) {
            totalPoints += 1000;
            totalPoints += (counter[key] % 3) * 100;
          } else {
            totalPoints += counter[key] * 100;
          }
        }
        if (Number(key) === 5) {
          if (counter[key] >= 3) {
            totalPoints += 500;
            totalPoints += (counter[key] % 3) * 50;
          } else {
            totalPoints += counter[key] * 50;
          }
        }

        console.log(counter);
      }
      return totalPoints;
    }
    console.log(greedy([5, 1, 3, 4, 1]));

    // setText(greedy(dice));
  };

  return (
    <>
      <h2>Codewars Task 12</h2>
      <h3>{text}</h3>
      <a href="https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript">
        Task link
      </a>
      <p>В инпут нужно ввести 5 значений через пробел от 1 до 6</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder="text" />
        <button type="submit">START</button>
      </form>
    </>
  );
};
