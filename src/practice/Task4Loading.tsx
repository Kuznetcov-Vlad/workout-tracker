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