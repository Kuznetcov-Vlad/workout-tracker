import { Link, useSearchParams } from 'react-router-dom';
import { books } from './books';

export function BooksPage() {
  // Задание 4: Поиск в адресе (URL)
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  
  const found = books.filter(b => 
    b.title.toLowerCase().includes(q.toLowerCase())
  );

  function handleSearch(value: string) {
    setParams(value ? { q: value } : {}, { replace: true });
  }

  return (
    <div>
      <h3>Список книг</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <input 
          value={q} 
          onChange={e => handleSearch(e.target.value)} 
          placeholder="Поиск (Задание 4)..." 
        />
        <button onClick={() => handleSearch('')}>Очистить</button>
      </div>

      {/* Задание 2: Ссылки на книги */}
      <ul>
        {found.map(book => (
          <li key={book.id}>
            <Link to={`/library/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
      
      {found.length === 0 && <p>Ничего не найдено</p>}
    </div>
  );
}