import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { books } from './books';

export function HomePage() {
  const [id, setId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Задание 3: Открытие по номеру
  function openBook() {
    const book = books.find(b => b.id === Number(id));
    if (!book) {
      return setError('Книга не найдена');
    }
    setError('');
    navigate(`/library/books/${book.id}`);
  }

  return (
    <div>
      <h3>Главная страница</h3>
      <p>Добро пожаловать в библиотеку!</p>
      
      <div style={{ marginTop: '20px', padding: '10px', background: '#f0f0f0' }}>
        <h4>Задание 3: Открыть книгу по номеру</h4>
        <input 
          value={id} 
          onChange={e => setId(e.target.value)} 
          placeholder="Введите номер (1, 2, 3)" 
        />
        <button onClick={openBook}>Открыть</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}