export type Task = {
  id: number;
  title: string;
  done: boolean;
  priority: number;
  createdAt: number;
};

export const initialTasks: Task[] = [
  { id: 1, title: 'Drink water', done: false, priority: 2, createdAt: Date.now() },
  { id: 2, title: 'Read docs', done: true, priority: 1, createdAt: Date.now() - 5000 },
  { id: 3, title: 'Walk 10 mins', done: false, priority: 3, createdAt: Date.now() - 9000 },
];
