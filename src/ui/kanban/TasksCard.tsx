import React from "react";
import Task from "./Task";
import NoTask from "./NoTask";
import TaskSkeleton from "./TaskSkeleton";
import { useBoundStore } from "../../store/bound.stores";
import { useShallow } from "zustand/shallow";
import type { TaskStatus } from "../../interfaces/tasks.interface";

interface TasksCardProps extends React.HTMLAttributes<HTMLDivElement> {
  status: TaskStatus;
}

const TasksCard = ({ status, ...props }: TasksCardProps) => {
  const [isTaskOverCard, setIsTaskOverCard] = React.useState(false);

  const { tasks, draggingTask, onTaskDrop } = useBoundStore(
    useShallow((state) => ({
      tasks: state.tasks,
      draggingTask: state.draggingTask,
      onTaskDrop: state.onTaskDrop,
    })),
  );

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    if (draggingTask?.status !== status) setIsTaskOverCard(true);
  };
  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsTaskOverCard(false);
  };
  const handleOnDrop = (event: React.DragEvent) => {
    event.preventDefault();
    onTaskDrop(status);
    setIsTaskOverCard(false);
  };

  const filteredTasks = tasks.filter((task) => task.status === status);

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
