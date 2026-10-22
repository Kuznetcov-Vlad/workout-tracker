import { useState } from 'react';

export function Task1Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Задача 1: Счётчик</h2>
      <h3>Значение: {count}</h3>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>-1</button>
      <button onClick={() => setCount(0)}>Сбросить</button>
      <button onClick={() => setCount(count + 1)} disabled={count === 10}>+1</button>
      {count === 10 && <p style={{ color: 'red' }}>Достигнут максимум</p>}
    </div>
  );
}