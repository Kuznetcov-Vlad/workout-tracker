// src/App.tsx
import { mockWorkouts } from './data/mockWorkouts';
import './App.css';

function App() {
  const totalWorkouts = mockWorkouts.length;
  const completedWorkouts = mockWorkouts.filter(w => w.isCompleted).length;
  const totalMinutes = mockWorkouts
    .filter(w => w.isCompleted)
    .reduce((sum, w) => sum + w.duration, 0);

  const recentWorkouts = mockWorkouts.slice(0, 5);

  return (
    <div className="App">
      <h1>🏋️ Трекер тренировок</h1>

      <section className="summary">
        <h2>Сводка</h2>
        <p>Всего тренировок: <strong>{totalWorkouts}</strong></p>
        <p>Завершено: <strong>{completedWorkouts}</strong></p>
        <p>Общее время: <strong>{totalMinutes} мин</strong></p>
      </section>

      <section className="recent">
        <h2>Последние тренировки</h2>
        <ul>
          {recentWorkouts.map(workout => (
            <li key={workout.id}>
              <strong>{workout.title}</strong> — {workout.category}, {workout.duration} мин,{' '}
              {workout.isCompleted ? '✅ Завершена' : '⏳ Запланирована'}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;