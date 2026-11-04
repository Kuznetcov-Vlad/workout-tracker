import { NavLink, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ background: '#282c34', padding: '15px 20px' }}>
        <nav style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#61dafb' : 'white', fontWeight: isActive ? 'bold' : 'normal', textDecoration: 'none' })}>Главная</NavLink>
          <NavLink to="/workouts" style={({ isActive }) => ({ color: isActive ? '#61dafb' : 'white', fontWeight: isActive ? 'bold' : 'normal', textDecoration: 'none' })}>Тренировки</NavLink>
          <NavLink to="/stats" style={({ isActive }) => ({ color: isActive ? '#61dafb' : 'white', fontWeight: isActive ? 'bold' : 'normal', textDecoration: 'none' })}>Статистика</NavLink>
          <NavLink to="/workouts/new" style={({ isActive }) => ({ color: isActive ? '#61dafb' : 'white', fontWeight: isActive ? 'bold' : 'normal', textDecoration: 'none' })}>+ Добавить</NavLink>
        </nav>
      </header>

      <main style={{ flex: 1, padding: '20px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Outlet />
      </main>
    </div>
  );
}