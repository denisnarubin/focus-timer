import Dexie, { type Table } from 'dexie';
import type { Task, FocusSession } from './schema';

class FocusTimerDatabase extends Dexie {
  tasks!: Table<Task>;
  history!: Table<FocusSession>;

  constructor() {
    super('FocusTimerDB');

    this.version(1).stores({
      tasks: '++id, category, dueDate, isCompleted, createdAt',
      history: '++id, taskId, completedAt',
    });
  }
}
export const db = new FocusTimerDatabase();
