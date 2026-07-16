export interface Task{
  id?: number;
  title: string;
  isCompleted: boolean;
  createdAt: number;
}

export interface FocusSession {
  id?: number;
  type: 'focus' | 'short_break' | 'long_break';
  duration: number;     
  completedAt: number;  
}