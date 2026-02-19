import React from "react";
import Task from "./Task";

interface TasksCardProps extends React.HTMLAttributes<HTMLDivElement> {
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
    status: "in-progress",
  },
];

const TasksCard = ({ status, ...props }: TasksCardProps) => {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div className="space-y-4" {...props}>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksCard;
