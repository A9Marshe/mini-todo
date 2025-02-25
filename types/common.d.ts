// TASK-RELATED TYPES
export type taskStatus = "ongoing" | "in progress" | "completed" | "canceled";

export interface task {
  id: string;
  name: string;
  dateCreated: string;
  dueDate?: string;
  status: taskStatus;
  workIntervals: { beginDateTime: string; endDateTime: string }[];
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
