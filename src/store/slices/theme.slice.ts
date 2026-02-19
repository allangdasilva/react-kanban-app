import type { StateCreator } from "zustand";
import type { ThemeSlice } from "../../interfaces/theme.interface";

export const createTheme: StateCreator<
  ThemeSlice,
  [["zustand/devtools", never]],
  [],
  ThemeSlice
> = (set) => ({
  isLight: false,
  toggleTheme: () =>
    set((state) => ({ isLight: !state.isLight }), false, "toggleTheme"),
});
