import React from "react";
import Task from "./Task";
import NoTask from "./NoTask";
import TaskSkeleton from "./TaskSkeleton";
import type { TaskStatus } from "../../interfaces/tasks.interface";
import useTasks from "../../hooks/useTasks";

interface TasksCardProps extends React.HTMLAttributes<HTMLDivElement> {
  status: TaskStatus;
}

const TasksCard = ({ status, ...props }: TasksCardProps) => {
  const {
    filteredTasks,
    isTaskOverCard,
    handleDragOver,
    handleDragLeave,
    handleOnDrop,
  } = useTasks(status);

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleOnDrop}
      className="flex flex-col gap-4"
      {...props}
    >
      {!filteredTasks.length && <NoTask />}
      {filteredTasks.map((filteredTask) => (
        <Task key={filteredTask.id} task={filteredTask} />
      ))}
      {isTaskOverCard && <TaskSkeleton status={status} />}
    </div>
  );
};

export default TasksCard;
