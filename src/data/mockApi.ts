// src/data/mockApi.ts
import { mockWorkouts, type Workout } from './mockWorkouts';

// Имитация запроса к серверу
export function fetchWorkouts(): Promise<Workout[]> {
  return new Promise((resolve) => {
    // Задержка 1.5 секунды, чтобы мы увидели надпись "Загрузка..."
    setTimeout(() => {
      resolve(mockWorkouts);
    }, 1500);
  });
}