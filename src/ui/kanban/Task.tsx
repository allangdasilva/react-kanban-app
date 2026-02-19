import React from "react";
import TrashIcon from "../../icons/TrashIcon";
import Divider from "../divider/Divider";
import clsx from "clsx";

interface TaskProps extends React.HTMLAttributes<HTMLDivElement> {
  task: {
    id: number;
    title: string;
    desc: string;
    status: "open" | "in-progress" | "done";
  };
}

const Task = ({ task }: TaskProps) => {
  const [dragStart, setDragStart] = React.useState(false);

  return (
    <div className="relative">
      <div
        draggable
        onDragStart={() => setDragStart(true)}
        onDragEnd={() => setDragStart(false)}
        className={clsx(
          "relative flex flex-col gap-2 p-4 rounded-default cursor-grab bg-background-400 z-10 origin-top-left transition-transform",
          { "rotate-z-4": dragStart },
        )}
      >
        <span className="font-body-xl text-title">{task.title}</span>
        <span className="font-body-base text-body">{task.desc}</span>
        <Divider bg="bg-background-300" />
        <button type="button" className="self-end pl-2 cursor-pointer z-20">
          <TrashIcon />
        </button>
      </div>
      <div
        className={clsx(
          "absolute inset-0 rounded-default border-2 border-dashed opacity-0 z-0",
          { "border-open": task.status === "open" },
          { "border-in-progress": task.status === "in-progress" },
          { "border-done": task.status === "done" },
          { "opacity-100": dragStart },
        )}
      ></div>
    </div>
  );
};

export default Task;
