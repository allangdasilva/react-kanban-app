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

  const { tasks, onTaskDrop } = useBoundStore(
    useShallow((state) => ({
      tasks: state.tasks,
      onTaskDrop: state.onTaskDrop,
    })),
  );

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };
  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
  };
  const handleOnDrop = (event: React.DragEvent) => {
    event.preventDefault();
    onTaskDrop(status);
  };

  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleOnDrop}
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
