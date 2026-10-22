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