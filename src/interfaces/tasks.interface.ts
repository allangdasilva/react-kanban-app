export interface TasksSlice {
  tasks: ITask[];
  draggingTask?: ITask;

  removeTask: (taskId: string) => void;
  newTask: (taskTitle: string, taskDesc: string, status: TaskStatus) => void;

  setDraggingTask: (task: ITask) => void;
  removeDraggingTask: () => void;

  changeTaskStatus: (taskId: string, status: TaskStatus) => void;
  onTaskDrop: (status: TaskStatus) => void;
}
export interface ITask {
  id: string;
  title: string;
  desc?: string;
  status: TaskStatus;
}
export type TaskStatus = "to-do" | "doing" | "done";
