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
  modalStatus: undefined,
  openModal: (status) =>
    set({ isModalOpen: true, modalStatus: status }, false, "openModal"),
  closeModal: () =>
    set({ isModalOpen: false, modalStatus: undefined }, false, "closeModal"),
});
