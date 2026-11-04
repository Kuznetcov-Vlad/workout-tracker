import { NavLink } from 'react-router-dom';
import { useFavorites } from './useFavorites';

export function ContextPracticeMenu() {
  const { favoriteIds } = useFavorites();

  return (
    <nav style={{ background: '#eee', padding: '10px', marginBottom: '20px', display: 'flex', gap: '15px' }}>
      <NavLink to="/practice-context" end>Каталог</NavLink>
      <NavLink to="/practice-context/favorites">Избранное: {favoriteIds.length}</NavLink>
    </nav>
  );
}