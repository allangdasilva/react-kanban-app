import TrashIcon from "../../icons/TrashIcon";
import Divider from "../divider/Divider";

interface TaskProps extends React.HTMLAttributes<HTMLDivElement> {
  task: {
    id: number;
    title: string;
    desc: string;
    status: string;
  };
}

const Task = ({ task }: TaskProps) => {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-default cursor-grab bg-background-400">
      <span className="font-body-xl text-title">{task.title}</span>
      <span className="font-body-base text-body">{task.desc}</span>
      <Divider bg="bg-background-300" />
      <button type="button" className="self-end cursor-pointer">
        <TrashIcon />
      </button>
    </div>
  );
};

export default Task;
