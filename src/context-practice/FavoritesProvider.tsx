import { useState } from 'react';
import { FavoritesContext } from './FavoritesContext';

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  // Задание 2: Добавление без повторов
  function addFavorite(id: number) {
    setFavoriteIds(prev => 
      prev.includes(id) ? prev : [...prev, id]
    );
  }

  // Задание 3: Удаление
  function removeFavorite(id: number) {
    setFavoriteIds(prev => prev.filter(x => x !== id));
  }

  const value = { favoriteIds, addFavorite, removeFavorite };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}