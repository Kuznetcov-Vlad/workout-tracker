import { useState } from 'react';
import { Task1Counter } from './Task1Counter';
import { Task2Greeting } from './Task2Greeting';
import { Task3Search } from './Task3Search';
import { Task4Loading } from './Task4Loading';

export function Practice() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div style={{ padding: '20px', border: '2px solid #333', margin: '20px' }}>
      <h1>Практика: Хуки React</h1>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setActiveTab(1)}>Задача 1</button>
        <button onClick={() => setActiveTab(2)}>Задача 2</button>
        <button onClick={() => setActiveTab(3)}>Задача 3</button>
        <button onClick={() => setActiveTab(4)}>Задача 4</button>
      </div>

      <hr />

      {activeTab === 1 && <Task1Counter />}
      {activeTab === 2 && <Task2Greeting />}
      {activeTab === 3 && <Task3Search />}
      {activeTab === 4 && <Task4Loading />}
    </div>
  );
}


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

import { useState, useEffect } from 'react';

const mockItems = [
  { id: 1, title: 'Молоко' },
  { id: 2, title: 'Хлеб' },
  { id: 3, title: 'Мёд' },
];

export function Task3Search() {
  const [query, setQuery] = useState('');

  const filtered = mockItems.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    document.title = query.trim() ? `Поиск: ${query}` : 'Все продукты';
  }, [query]);

  return (
    <div>
      <h2>Задача 3: Поиск</h2>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Поиск..." />
      {filtered.length === 0 ? (
        <p>Не найдено</p>
      ) : (
        <ul>
          {filtered.map((item) => <li key={item.id}>{item.title}</li>)}
        </ul>
      )}
    </div>
  );
}

import { useState, useEffect } from 'react';

const mockItems = [
  { id: 1, title: 'Молоко', quantity: 2 },
  { id: 2, title: 'Яйца', quantity: 10 },
];

export function Task4Loading() {
  const [items, setItems] = useState<typeof mockItems>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setItems(mockItems);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div>
      <h2>Задача 4: Загрузка</h2>
      {loading ? (
        <p>Загрузка…</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.title}: {item.quantity}</li>
          ))}
        </ul>
      )}
    </div>
  );
}