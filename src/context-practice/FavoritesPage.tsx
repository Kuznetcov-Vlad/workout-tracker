import { books } from './books';
import { useFavorites } from './useFavorites';

export function FavoritesPage() {
  const { favoriteIds, removeFavorite } = useFavorites();
  const selectedBooks = books.filter(book => favoriteIds.includes(book.id));

  return (
    <section>
      <h2>Избранное</h2>
      {selectedBooks.length === 0 && <p>Избранное пусто</p>}
      {selectedBooks.map(book => (
        <article key={book.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <span style={{ marginRight: '10px' }}>{book.title}</span>
          <button onClick={() => removeFavorite(book.id)}>Удалить</button>
        </article>
      ))}
    </section>
  );
}