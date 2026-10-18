// src/App.tsx
import { useState, useEffect } from 'react';
import { fetchWorkouts } from './data/mockApi';
import type { Workout } from './data/mockWorkouts';
import { Header } from './components/Header';
import { WorkoutList } from './components/WorkoutList';
import './App.css';

function App() {
  // 1. Состояние для данных
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  
  // 2. Состояние для загрузки
  const [isLoading, setIsLoading] = useState(true);

  // 3. useEffect для имитации загрузки с сервера
  useEffect(() => {
    fetchWorkouts().then((data) => {
      setWorkouts(data);
      setIsLoading(false);
    });
  }, []); // [] означает, что эффект сработает 1 раз при открытии страницы

  // Считаем сводку на основе полученных данных
  const completedCount = workouts.filter(w => w.isCompleted).length;
  const totalMinutes = workouts
    .filter(w => w.isCompleted)
    .reduce((sum, w) => sum + w.duration, 0);

  return (
    <div className="App">
      <Header />

      {isLoading ? (
        <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Загрузка данных...</h2>
      ) : (
        <>
          <section className="summary">
            <h2>Общая сводка</h2>
            <p>Всего тренировок: <strong>{workouts.length}</strong></p>
            <p>Завершено: <strong>{completedCount}</strong></p>
            <p>Общее время: <strong>{totalMinutes} мин</strong></p>
          </section>

          <section className="list-section">
            <h2>Все тренировки</h2>
            <WorkoutList workouts={workouts} />
          </section>
        </>
      )}
    </div>
  );
}

export default App;