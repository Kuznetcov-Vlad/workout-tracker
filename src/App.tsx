import { useState, useEffect } from 'react';
import { fetchWorkouts } from './data/mockApi';
import type { Workout } from './data/mockWorkouts';
import { Header } from './components/Header';
import { WorkoutList } from './components/WorkoutList';
import { RouterPractice } from './router-practice/RouterPractice'; // <-- ИМПОРТ ЗДЕСЬ
import './App.css';

function App() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchWorkouts().then((data) => {
      setWorkouts(data);
      setIsLoading(false);
    });
  }, []);

  const completedCount = workouts.filter(w => w.isCompleted).length;
  const totalMinutes = workouts.filter(w => w.isCompleted).reduce((sum, w) => sum + w.duration, 0);

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

      {/* ВОТ ЗДЕСЬ ДОЛЖЕН БЫТЬ КОМПОНЕНТ ПРАКТИКИ */}
      <RouterPractice />
    </div>
  );
}

export default App;