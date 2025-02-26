// TASK-RELATED TYPES
export type taskStatus = "ongoing" | "in_progress" | "completed" | "backlog";

export interface task {
  id: string;
  name: string;
  dateCreated: string;
  dueDate?: string;
  status: taskStatus;
  project?: string;
  workIntervals: { beginTime: string; endTime: string; date: string }[];
}

export type tasks = task[];

// PROJECT-RELATED TYPES

export interface project {
  id: string;
  name: string;
  dateCreated: string;
  nextMileStone?: string;
  tasks: tasks;
}
