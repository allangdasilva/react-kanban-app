import { useShallow } from "zustand/shallow";
import { useBoundStore } from "../../../store/bound.stores";
import ModalForm from "./ModalForm";

const TaskModal = () => {
  const { isModalOpen, closeModal } = useBoundStore(
    useShallow((state) => ({
      isModalOpen: state.isModalOpen,
      closeModal: state.closeModal,
    })),
  );

  if (!isModalOpen) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="create-task-modal"
      className="fixed inset-0 min-h-dvh p-4 flex items-start justify-center overflow-y-auto z-50 bg-background-700/80"
      onClick={closeModal}
    >
      <div
        className="w-full max-w-107 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalForm />
      </div>
    </div>
  );
};

export default TaskModal;
