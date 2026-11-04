import { books } from './books';
import { useFavorites } from './useFavorites';
import { BookCard } from './BookCard';

export function CatalogPage() {
  const { favoriteIds, addFavorite } = useFavorites();

  return (
    <section>
      <h2>Каталог книг</h2>
      {books.map(book => (
        <BookCard 
          key={book.id} 
          book={book} 
          isFavorite={favoriteIds.includes(book.id)} 
          onAdd={addFavorite} 
        />
      ))}
    </section>
  );
}