import type { TaskStatus } from "./tasks.interface";

export interface ModalSlice {
  isModalOpen: boolean;
  modalStatus: undefined | TaskStatus;
  openModal: (status: TaskStatus) => void;
  closeModal: () => void;
}
