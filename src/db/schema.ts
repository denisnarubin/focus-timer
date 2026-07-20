export interface Task {
  id?: number; 
  title: string;
  category: string; 
  duration: number | null; 
  allDay: boolean;
  dueDate: string | null;  
  isCompleted: boolean;    
  createdAt: number;       
}

export type TaskCardProps = Pick<Task, 'id' | 'title' | 'category'>; 

export interface FocusSession {
  id?: number;
  type: 'focus' | 'short_break' | 'long_break';
  duration: number;
  completedAt: number;
}
