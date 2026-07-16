
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db';

export function useTasks() {

  const tasks = useLiveQuery(
    () => db.tasks.orderBy('createdAt').reverse().toArray(),
    []
  );

  const addTask = async (title: string) => {
    if (!title.trim()) return;
    
    await db.tasks.add({
      title: title.trim(),
      isCompleted: false,
      createdAt: Date.now(),
    });
  };

  
  const toggleTask = async (id: number, currentStatus: boolean) => {
    await db.tasks.update(id, {
      isCompleted: !currentStatus,
    });
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