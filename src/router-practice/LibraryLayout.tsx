import { NavLink, Outlet } from 'react-router-dom';

export function LibraryLayout() {
  return (
    <div style={{ border: '2px solid blue', padding: '20px', margin: '20px' }}>
      <h2>Библиотека (Практика Router)</h2>
      <nav style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
        <NavLink to="/library" end style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', color: isActive ? 'blue' : 'black' })}>Главная</NavLink>
        <NavLink to="/library/books" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', color: isActive ? 'blue' : 'black' })}>Книги</NavLink>
        <NavLink to="/library/about" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', color: isActive ? 'blue' : 'black' })}>О библиотеке</NavLink>
      </nav>
      
      {/* Outlet - это место, куда вставляются страницы (Задание 1) */}
      <Outlet />
    </div>
  );
}