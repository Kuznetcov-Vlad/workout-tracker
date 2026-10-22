import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function AboutPage() {
  // Задание 5: Текущий адрес
  const location = useLocation();

  return (
    <div>
      <h3>О библиотеке</h3>
      <p>Текущий путь (useLocation): <code>{location.pathname}</code></p>
      <p>Это учебный проект.</p>
    </div>
  );
}