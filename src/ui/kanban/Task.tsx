import React from "react";
import TrashIcon from "../../icons/TrashIcon";
import Divider from "../divider/Divider";
import clsx from "clsx";
import { useBoundStore } from "../../store/bound.stores";
import { useShallow } from "zustand/shallow";
import type { ITask } from "../../interfaces/tasks.interface";

interface TaskProps extends React.HTMLAttributes<HTMLDivElement> {
  task: ITask;
}

const Task = ({ task }: TaskProps) => {
  const { draggingTaskId, setDraggingTaskId, removeDraggingTaskId } =
    useBoundStore(
      useShallow((state) => ({
        draggingTaskId: state.draggingTaskId,
        setDraggingTaskId: state.setDraggingTaskId,
        removeDraggingTaskId: state.removeDraggingTaskId,
      })),
    );

  return (
    <div className="relative">
      <div
        draggable
        onDragStart={() => setDraggingTaskId(task.id)}
        onDragEnd={() => removeDraggingTaskId()}
        className={clsx(
          "relative flex flex-col gap-2 p-4 rounded-default cursor-grab bg-background-400 z-10 origin-top-left transition-transform",
          { "rotate-z-4": draggingTaskId },
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
          {
            "border-to-do": task.status === "to-do",
            "border-doing": task.status === "doing",
            "border-done": task.status === "done",
          },
          { "opacity-100": draggingTaskId },
        )}
      ></div>
    </div>
  );
};

export default Task;
