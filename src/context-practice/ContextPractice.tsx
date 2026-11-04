import { Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './FavoritesProvider'; // Провайдер оборачивает всё
import { ContextPracticeMenu } from './ContextPracticeMenu';
import { CatalogPage } from './CatalogPage';
import { FavoritesPage } from './FavoritesPage';
import { BookPage } from './BookPage';

export function ContextPractice() {
  return (
    <FavoritesProvider>
      <div style={{ border: '3px dashed #28a745', padding: '20px', marginTop: '40px' }}>
        <h1 style={{ textAlign: 'center' }}>Практика: Context и Props</h1>
        
        <ContextPracticeMenu />
        
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/books/:id" element={<BookPage />} />
        </Routes>
      </div>
    </FavoritesProvider>
  );
}