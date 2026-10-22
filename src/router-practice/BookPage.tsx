import { useParams, Link } from 'react-router-dom';
import { books } from './books';

export function BookPage() {
  const { id } = useParams();
  const book = books.find(b => b.id === Number(id));

  if (!book) {
    return <p>Книга не найдена</p>;
  }

  return (
    <article>
      <h3>{book.title}</h3>
      <p><strong>Автор:</strong> {book.author}</p>
      <Link to="/library/books">← Все книги</Link>
    </article>
  );
}