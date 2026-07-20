import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db';

export function useTasks() {
  const tasks = useLiveQuery(() => db.tasks.orderBy('createdAt').reverse().toArray(), []);

  // Теперь функция принимает все параметры формы
  const addTask = async (
    title: string,
    category: string,
    duration: number | null,
    allDay: boolean,
    dueDate: string | null
  ) => {
    if (!title.trim()) return;

    await db.tasks.add({
      title: title.trim(),
      category,
      duration,
      allDay,
      dueDate,
      isCompleted: false,
      createdAt: Date.now(),
    });
  };

  const toggleTask = async (id: number, currentStatus: boolean) => {
    await db.tasks.update(id, { isCompleted: !currentStatus });
  };

  const deleteTask = async (id: number) => {
    await db.tasks.delete(id);
  };

  return {
    tasks: tasks || [],
    isLoading: tasks === undefined,
    addTask,
    toggleTask,
    deleteTask,
  };
}