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
    {
      id: "2",
      title: "Estudar JS",
      desc: "Praticar Classes",
      status: "to-do",
    },
    {
      id: "3",
      title: "Estudar Node.js",
      desc: "Praticar req e res",
      status: "to-do",
    },
  ],

  draggingTask: undefined,

  removeTask: (taskId) => {
    set(
      (state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      }),
      false,
      "removeTask",
    );
  },

  setDraggingTask: (task) =>
    set({ draggingTask: task }, false, "setDraggingTask"),
  removeDraggingTask: () =>
    set({ draggingTask: undefined }, false, "removeDraggingTask"),

  changeTaskStatus: (taskId, status) => {
    set(
      (state) => ({
        tasks: state.tasks.map((task) =>
          task.id === taskId ? { ...task, status } : task,
        ),
      }),
      false,
      "changeTaskStatus",
    );
  },

  onTaskDrop: (status) => {
    const taskId = get().draggingTask;
    if (!taskId) return;

    get().changeTaskStatus(taskId.id, status);
    get().removeDraggingTask();
  },
});
