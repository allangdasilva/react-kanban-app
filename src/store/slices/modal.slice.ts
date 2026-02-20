import type { StateCreator } from "zustand";
import type { ModalSlice } from "../../interfaces/modal.interface";
import type { ThemeSlice } from "../../interfaces/theme.interface";
import type { TasksSlice } from "../../interfaces/tasks.interface";

export const createModal: StateCreator<
  ModalSlice & ThemeSlice & TasksSlice,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [],
  ModalSlice
> = (set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }, false, "openModal"),
  closeModal: () => set({ isModalOpen: false }, false, "closeModal"),
});
