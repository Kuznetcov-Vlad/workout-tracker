import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 — Страница не найдена</h1>
      <p>Такой страницы не существует.</p>
      <Link to="/">← Вернуться на главную</Link>
    </div>
  );
}