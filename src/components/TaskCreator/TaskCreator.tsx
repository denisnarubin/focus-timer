import React, { useState } from 'react';

import { useTasks } from '../../hooks/useTasks';

function TaskCreator() {

  const { addTask } = useTasks();
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('');
  const [allDay, setAllDay] = useState(false);
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !category) {
      return;
    }



    try {
        await addTask(
            title.trim(),
            category,
            allDay ? null : Number(duration) || 0,
            allDay,
            dueDate || null
        );


      setTitle('');
      setDuration('');
      setCategory('');
      setAllDay(false);
      setDueDate('');
    } catch (error) {
      console.error('Failed to save task to Dexie:', error);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-md w-full mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col gap-5 mt-25"
    >
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Create New Task</h3>
        <p className="text-sm text-slate-500">Fill in the details below to add a task.</p>
      </div>


      <div className="flex flex-col gap-1.5">
        <label htmlFor="task-title" className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Task Title
        </label>
        <input 
          id="task-title" 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Design landing page" 
          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-transparent text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 dark:text-white"
        />
      </div>


      <div className="flex flex-col gap-1.5">
        <label htmlFor="task-category" className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Category
        </label>
        <div className="relative w-full">
         
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="task-category"
            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 dark:text-white appearance-none cursor-pointer"
          >
            <option value="" disabled className="dark:bg-slate-900 text-slate-400">Select type...</option>
            <option value="work" className="dark:bg-slate-900 text-slate-900 dark:text-white">Work & Coding</option>
            <option value="education" className="dark:bg-slate-900 text-slate-900 dark:text-white">Education (English)</option>
            <option value="routine" className="dark:bg-slate-900 text-slate-900 dark:text-white">Routine & Other</option>
          </select>
          
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 dark:text-slate-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-2 gap-4 items-end">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="task-duration" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Duration (min)
          </label>
          <input 
            id="task-duration"
            type="number" 
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="60" 
            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-transparent text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 dark:text-white"
          />
        </div>

        <div className="flex items-center h-[38px] px-1">
          <label htmlFor="all-day" className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer select-none">
            <div className="relative flex items-center justify-center">
              <input 
                checked={allDay}
                onChange={(e) => setAllDay(e.target.checked)}
                id="all-day"
                type="checkbox" 
                className="peer sr-only"
              />
              <div className="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-700 bg-transparent transition-all duration-200 flex items-center justify-center peer-checked:bg-indigo-600 peer-checked:border-indigo-600 peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-500 peer-focus-visible:ring-offset-2">
                <svg className="w-3 h-3 text-white scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            All day
          </label>
        </div>
      </div>


      <div className="flex flex-col gap-1.5">
        <label htmlFor="task-date" className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Due Date
        </label>
        <div className="relative w-full">
          <input 
            id="task-date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            type="date" 
            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all
            [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 dark:text-slate-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>


      <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
        <button 
          type="button"
          className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button 
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors"
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default TaskCreator;