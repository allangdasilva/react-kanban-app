import React from "react";
import Task from "./Task";
import NoTask from "./NoTask";
import TaskSkeleton from "./TaskSkeleton";

interface TasksCardProps extends React.HTMLAttributes<HTMLDivElement> {
  status: "open" | "in-progress" | "done";
}
interface Task {
  id: number;
  title: string;
  desc: string;
  status: "open" | "in-progress" | "done";
}

const tasks = [
  {
    id: 1,
    title: "Estudar Node.js",
    desc: "Praticar req e res",
    status: "open",
  },
  {
    id: 2,
    title: "Estudar HTML",
    desc: "Praticar semântica",
    status: "done",
  },
  {
    id: 3,
    title: "Estudar JS",
    desc: "Praticar classes",
    status: "open",
  },
  {
    id: 4,
    title: "Estudar CSS",
    desc: "Praticar animações",
    status: "open",
  },
];

const TasksCard = ({ status, ...props }: TasksCardProps) => {
  const [dragOver, setDragOver] = React.useState(false);

  const filteredTasks = tasks.filter(
    (task) => task.status === status,
  ) as Task[];

  return (
    <div
      onDragOver={() => setDragOver(true)}
      onDragLeave={() => setDragOver(false)}
      className="h-full flex flex-col gap-4"
      {...props}
    >
      {!filteredTasks.length && <NoTask />}
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      {dragOver && <TaskSkeleton color={status} />}
    </div>
  );
};

export default TasksCard;
