import type { Workout } from '../data/mockWorkouts';

export function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginBottom: '10px', backgroundColor: '#fafafa' }}>
      <h3 style={{ margin: '0 0 10px 0' }}>{workout.title}</h3>
      <p style={{ margin: '5px 0' }}>{workout.description}</p>
      <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>
        <strong>Категория:</strong> {workout.category} | 
        <strong> Время:</strong> {workout.duration} мин. | 
        <strong> Статус:</strong> {workout.isCompleted ? '✅ Завершена' : '⏳ Запланирована'}
      </p>
    </div>
  );
}