import { Link } from 'react-router-dom';

export function BookCard({ book, isFavorite, onAdd }: any) {
  return (
    <article style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3 style={{ margin: '0 0 10px 0' }}>
        <Link to={`/practice-context/books/${book.id}`}>{book.title}</Link>
      </h3>
      <p>{book.author}</p>
      <button 
        disabled={isFavorite} 
        onClick={() => onAdd(book.id)}
      >
        {isFavorite ? "В избранном" : "В избранное"}
      </button>
    </article>
  );
}