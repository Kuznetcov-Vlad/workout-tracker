import { useParams, Link } from 'react-router-dom';
import { books } from './books';
import { useFavorites } from './useFavorites';
import { BookCard } from './BookCard';

export function BookPage() {
  const { id } = useParams();
  const { favoriteIds, addFavorite } = useFavorites();
  
  const book = books.find(b => b.id === Number(id));

  if (!book) return <p>Книга не найдена</p>;

  return (
    <section>
      <h2>Страница книги</h2>
      <BookCard 
        book={book} 
        isFavorite={favoriteIds.includes(book.id)} 
        onAdd={addFavorite} 
      />
      <Link to="/practice-context">← Все книги</Link>
    </section>
  );
}