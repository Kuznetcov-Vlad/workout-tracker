import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { DashboardPage } from './pages/DashboardPage';
import { WorkoutsPage } from './pages/WorkoutsPage';
import { WorkoutDetailsPage } from './pages/WorkoutDetailsPage';
import { NewWorkoutPage } from './pages/NewWorkoutPage';
import { StatsPage } from './pages/StatsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="workouts" element={<WorkoutsPage />} />
        <Route path="workouts/new" element={<NewWorkoutPage />} />
        <Route path="workouts/:id" element={<WorkoutDetailsPage />} />
        <Route path="stats" element={<StatsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;