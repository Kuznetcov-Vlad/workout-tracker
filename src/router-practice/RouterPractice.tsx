import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { LibraryLayout } from './LibraryLayout';
import { HomePage } from './HomePage';
import { BooksPage } from './BooksPage';
import { BookPage } from './BookPage';
import { AboutPage } from './AboutPage';

// Задание 5: Меняем заголовок вкладки
function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/library') document.title = 'Библиотека';
    else if (location.pathname === '/library/books') document.title = 'Книги';
    else document.title = 'Страница библиотеки';
  }, [location.pathname]);

  return null; // Этот компонент ничего не рисует
}

export function RouterPractice() {
  return (
    <div style={{ marginTop: '50px', borderTop: '3px dashed #ccc', paddingTop: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Практика React Router</h1>
      
      {/* Ссылка для входа в раздел библиотеки */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Link to="/library">Перейти в раздел Библиотеки</Link>
      </div>

      <PageTitle />

      {/* Настройка маршрутов (Задание 1) */}
      <Routes>
        <Route path="/library" element={<LibraryLayout />}>
          <Route index element={<HomePage />} />  {/* Главная */}
          <Route path="books" element={<BooksPage />} /> {/* Список книг */}
          <Route path="books/:id" element={<BookPage />} /> {/* Книга (динамический маршрут) */}
          <Route path="about" element={<AboutPage />} /> {/* О библиотеке */}
          <Route path="*" element={<h3>Страница не найдена</h3>} /> {/* Ошибка 404 */}
        </Route>
      </Routes>
    </div>
  );
}