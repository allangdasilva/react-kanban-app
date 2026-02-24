import type { StateCreator } from "zustand";
import type { TasksSlice } from "../../interfaces/tasks.interface";
import type { ThemeSlice } from "../../interfaces/theme.interface";
import type { ModalSlice } from "../../interfaces/modal.interface";
import { v7 as uuidv7 } from "uuid";

export const createTasks: StateCreator<
  TasksSlice & ThemeSlice & ModalSlice,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [],
  TasksSlice
> = (set, get) => ({
  tasks: [],

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

  newTask: (taskTitle, taskDesc, taskStatus) => {
    const uuid = uuidv7();
    const newTask = {
      id: uuid,
      title: taskTitle,
      desc: taskDesc,
      status: taskStatus,
    };
    set(
      (state) => ({
        tasks: [...state.tasks, newTask],
      }),
      false,
      "newTask",
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
