import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createTheme } from "./slices/theme.slice";
import { createTasks } from "./slices/tasks.slice";
import { createModal } from "./slices/modal.slice";
import type { ThemeSlice } from "../interfaces/theme.interface";
import type { TasksSlice } from "../interfaces/tasks.interface";
import type { ModalSlice } from "../interfaces/modal.interface";

export const useBoundStore = create<ThemeSlice & TasksSlice & ModalSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createTheme(...a),
        ...createTasks(...a),
        ...createModal(...a),
      }),
      { name: "kanban-storage" },
    ),
  ),
);
