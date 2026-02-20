import { useShallow } from "zustand/shallow";
import AddIcon from "../../icons/AddIcon";
import StatusIcon from "../../icons/StatusIcon";
import type { TaskStatus } from "../../interfaces/tasks.interface";
import { useBoundStore } from "../../store/bound.stores";

interface StatusBarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: "Fazer" | "Fazendo" | "Feito";
  status: TaskStatus;
}

const StatusBar = ({ title, status, ...props }: StatusBarProps) => {
  const { openModal } = useBoundStore(
    useShallow((state) => ({
      openModal: state.openModal,
    })),
  );

  return (
    <button
      onClick={openModal}
      type="button"
      aria-label={`Adicionar tarefa em: ${title}`}
      className="w-full flex items-center justify-between p-4 rounded-default cursor-pointer bg-background-400"
      {...props}
    >
      <div className="flex items-center gap-2">
        <StatusIcon color={`var(--color-${status})`} />
        <span className="font-body-base text-body">{title}</span>
      </div>

      <AddIcon />
    </button>
  );
};

export default StatusBar;
