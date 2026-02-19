import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createTheme } from "./slices/theme.slice";
import { createTasks } from "./slices/tasks.slice";
import type { ThemeSlice } from "../interfaces/theme.interface";
import type { TasksSlice } from "../interfaces/tasks.interface";

export const useBoundStore = create<ThemeSlice & TasksSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createTheme(...a),
        ...createTasks(...a),
      }),
      { name: "theme-storage" },
    ),
  ),
);
