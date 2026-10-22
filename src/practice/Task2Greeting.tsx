import { useState, useEffect } from 'react';

export function Task2Greeting() {
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = name.trim() ? name : 'Приветствие';
  }, [name]);

  return (
    <div>
      <h2>Задача 2: Приветствие</h2>
      <label>
        Ваше имя: 
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Введите имя" />
      </label>
      <p>{name.trim() ? `Привет, ${name}!` : 'Введите имя'}</p>
    </div>
  );
}