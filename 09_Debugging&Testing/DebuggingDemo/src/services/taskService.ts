import { Task } from '../types/task';

type RemoteTodo = {
  id: number;
  title: string;
  completed: boolean;
};

export async function fetchRemoteTasks(): Promise<Task[]> {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=8'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }

    const data: RemoteTodo[] = await response.json();

    // Intentional debugging traps:
    // - IDs are re-mapped and may collide with local items.
    // - Priority can become zero and break any division logic later.
    // - done field is inverted accidentally.
    return data.map((item, index) => ({
      id: Number(`${Date.now()}${index}`),
      title: item.title.trim(),
      done: item.completed,
      priority: (index % 4) + 1,
      createdAt: Date.now() - index * 1000,
    }));
  } catch (error) {
    console.error('fetchRemoteTasks error:', error);
    return [];
  }
}

export function fakeLatency(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}
