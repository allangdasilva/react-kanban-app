import React from "react";
import { useBoundStore } from "../store/bound.stores";
import { useShallow } from "zustand/shallow";
import type { TaskStatus } from "../interfaces/tasks.interface";

const useTasks = (status: TaskStatus) => {
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

  return {
    filteredTasks,
    isTaskOverCard,
    handleDragOver,
    handleDragLeave,
    handleOnDrop,
  };
};

export default useTasks;
