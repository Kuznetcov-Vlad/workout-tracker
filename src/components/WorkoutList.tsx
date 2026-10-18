import type { Workout } from '../data/mockWorkouts';
import { WorkoutCard } from './WorkoutCard';

export function WorkoutList({ workouts }: { workouts: Workout[] }) {
  if (workouts.length === 0) {
    return <p>Тренировок пока нет.</p>;
  }

  return (
    <div>
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}