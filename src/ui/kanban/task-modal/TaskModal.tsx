import ModalForm from "./ModalForm";

const TaskModal = () => {
  return (
    <div className="fixed inset-0 p-4 flex items-center justify-center min-h-dvh w-full z-50 bg-background-700/80">
      <ModalForm />
    </div>
  );
};

export default TaskModal;
