import React from "react";
import Task from "./Task";
import NoTask from "./NoTask";
import TaskSkeleton from "./TaskSkeleton";
import type { TaskStatus } from "../../interfaces/tasks.interface";
import { useBoundStore } from "../../store/bound.stores";
import { useShallow } from "zustand/shallow";

interface TasksCardProps extends React.HTMLAttributes<HTMLDivElement> {
  status: TaskStatus;
}

const TasksCard = ({ status, ...props }: TasksCardProps) => {
  const [dragOver, setDragOver] = React.useState(false);

  const { tasks } = useBoundStore(
    useShallow((state) => ({ tasks: state.tasks })),
  );

  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div
      onDragOver={() => setDragOver(true)}
      onDragLeave={() => setDragOver(false)}
      className="h-full flex flex-col gap-4"
      {...props}
    >
      {!filteredTasks.length && <NoTask />}
      {filteredTasks.map((filteredTask) => (
        <Task key={filteredTask.id} task={filteredTask} />
      ))}
      {dragOver && <TaskSkeleton status={status} />}
    </div>
  );
};

export default TasksCard;
