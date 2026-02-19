import type { StateCreator } from "zustand";
import type { TasksSlice } from "../../interfaces/tasks.interface";
import type { ThemeSlice } from "../../interfaces/theme.interface";

export const createTasks: StateCreator<
  TasksSlice & ThemeSlice,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [],
  TasksSlice
> = (set, get) => ({
  tasks: [
    {
      id: "1",
      title: "Estudar HTML",
      desc: "Praticar Semântica",
      status: "to-do",
    },
  ],
  draggingTaskId: undefined,

  setDraggingTaskId: (taskId) =>
    set({ draggingTaskId: taskId }, false, "setDraggingTaskId"),
  removeDraggingTaskId: () =>
    set({ draggingTaskId: undefined }, false, "removeDraggingTaskId"),

  changeTaskStatus: (taskId, status) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status } : task,
      ),
    }));
  },
  onTaskDrop: (status) => {
    const taskId = get().draggingTaskId;
    if (!taskId) return;

    get().changeTaskStatus(taskId, status);
    get().removeDraggingTaskId();
  },
});
