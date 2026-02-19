import type { StateCreator } from "zustand";
import type { ThemeSlice } from "../../interfaces/theme.interface";
import type { TasksSlice } from "../../interfaces/tasks.interface";

export const createTheme: StateCreator<
  ThemeSlice & TasksSlice,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [],
  ThemeSlice
> = (set) => ({
  isLight: false,
  toggleTheme: () =>
    set((state) => ({ isLight: !state.isLight }), false, "toggleTheme"),
});
