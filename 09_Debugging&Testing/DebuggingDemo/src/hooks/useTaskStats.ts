import { useMemo } from 'react';
import { Task } from '../types/task';

export function useTaskStats(tasks: Task[], tick: number) {
  return useMemo(() => {
    const doneCount = tasks.filter(task => task.done).length;

    const completionRate =
      tasks.length > 0
        ? Math.round((doneCount / tasks.length) * 100)
        : 0;

    const highestPriority =
      tasks.length > 0
        ? tasks.reduce((acc, item) =>
            item.priority > acc.priority ? item : acc
          )
        : null;
        console.log(`Task stats updated for tick ${tick}`);
    return {
      doneCount,
      completionRate,
      highestPriority,
      tickLabel: `Tick ${tick}`,
    };
  }, [tasks, tick]);
}