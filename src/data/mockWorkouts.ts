// src/data/mockWorkouts.ts

export interface Workout {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  duration: number;
  date: string;
  isCompleted: boolean;
}

export const mockWorkouts: Workout[] = [
  { id: 'workout-01', title: 'Бег на улице', description: 'Лёгкий бег 5 км', category: 'Кардио', status: 'Завершена', duration: 45, date: '2026-10-01', isCompleted: true },
  { id: 'workout-02', title: 'Жим лёжа', description: '4 подхода по 10', category: 'Силовая', status: 'Завершена', duration: 60, date: '2026-10-02', isCompleted: true },
  { id: 'workout-03', title: 'Йога', description: 'Утренняя растяжка', category: 'Растяжка', status: 'Завершена', duration: 30, date: '2026-10-03', isCompleted: true },
  { id: 'workout-04', title: 'Интервальный бег', description: '8 интервалов', category: 'Кардио', status: 'Завершена', duration: 50, date: '2026-10-04', isCompleted: true },
  { id: 'workout-05', title: 'Приседания', description: '5 по 8', category: 'Силовая', status: 'Завершена', duration: 70, date: '2026-10-05', isCompleted: true },
  { id: 'workout-06', title: 'Плавание', description: '1000 м', category: 'Кардио', status: 'Запланирована', duration: 60, date: '2026-10-06', isCompleted: false },
  { id: 'workout-07', title: 'Становая тяга', description: '4 по 6', category: 'Силовая', status: 'Запланирована', duration: 65, date: '2026-10-07', isCompleted: false },
  { id: 'workout-08', title: 'Пилатес', description: 'Упражнения на пресс', category: 'Растяжка', status: 'Завершена', duration: 40, date: '2026-10-08', isCompleted: true },
  { id: 'workout-09', title: 'Велотренажёр', description: 'Кардио 30 мин', category: 'Кардио', status: 'Отменена', duration: 30, date: '2026-10-08', isCompleted: false },
  { id: 'workout-10', title: 'Отжимания', description: '3 по 20', category: 'Силовая', status: 'Завершена', duration: 15, date: '2026-10-08', isCompleted: true },
  { id: 'workout-11', title: 'Растяжка', description: 'Вечерняя', category: 'Растяжка', status: 'Запланирована', duration: 25, date: '2026-10-09', isCompleted: false },
  { id: 'workout-12', title: 'Кроссфит', description: 'Круговая', category: 'Силовая', status: 'Завершена', duration: 55, date: '2026-10-09', isCompleted: true },
];