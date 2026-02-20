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
      className="fixed inset-0 p-4 flex items-center justify-center min-h-dvh w-full z-50 bg-background-700/80"
      onClick={closeModal}
    >
      <div className="w-full max-w-107" onClick={(e) => e.stopPropagation()}>
        <ModalForm />
      </div>
    </div>
  );
};

export default TaskModal;
