export interface TasksSlice {
  tasks: ITask[];
  draggingTaskId?: string;
  setDraggingTaskId: (taskId: string) => void;
  removeDraggingTaskId: () => void;
}
export interface ITask {
  id: string;
  title: string;
  desc: string;
  status: TaskStatus;
}
export type TaskStatus = "to-do" | "doing" | "done";
