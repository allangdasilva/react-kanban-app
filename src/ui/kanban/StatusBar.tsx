import AddIcon from "../../icons/AddIcon";
import StatusIcon from "../../icons/StatusIcon";

interface StatusBarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: "Fazer" | "Fazendo" | "Feito";
  color: "color-open" | "color-in-progress" | "color-done";
}

const StatusBar = ({ title, color, ...props }: StatusBarProps) => {
  return (
    <button
      type="button"
      aria-label="Adicionar tarefa a fazer"
      className="w-full flex items-center justify-between p-4 rounded-default cursor-pointer bg-background-400"
      {...props}
    >
      <div className="flex items-center gap-2">
        <StatusIcon color={`var(--${color})`} />
        <span className="font-body-base text-body">{title}</span>
      </div>

      <AddIcon />
    </button>
  );
};

export default StatusBar;
