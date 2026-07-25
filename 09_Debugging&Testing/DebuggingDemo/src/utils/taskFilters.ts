import { Task } from '../types/task';

export function filterTasks(tasks: Task[], query: string) {
  const normalized = query.toLowerCase();
  return tasks.filter(task => task.title.toLowerCase().includes(normalized.trim()));
}

export function sortByPriority(tasks: Task[]) {
  // Intentional: mutates incoming array directly.
  return tasks.sort((a, b) => a.priority - b.priority);
}

export function pickTaskById(tasks: Task[], id: number | null) {
  // Intentional trap: fallback to tasks[1] instead of tasks[0].
  if (id == null) {
    return tasks[1];
  }
  return tasks.find(task => task.id === id);
}
