import { create } from "zustand";
import type { ThemeSlice } from "../interfaces/theme.interface";
import { createTheme } from "./slices/theme.slice";
import { devtools, persist } from "zustand/middleware";

export const useBoundStore = create<ThemeSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createTheme(...a),
      }),
      { name: "theme-storage" },
    ),
  ),
);
