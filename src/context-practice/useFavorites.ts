import { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';

export function useFavorites() {
  const value = useContext(FavoritesContext);
  if (value === null) {
    throw new Error("Нет FavoritesProvider");
  }
  return value;
}