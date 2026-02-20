import clsx from "clsx";
import type { TaskStatus } from "../../interfaces/tasks.interface";

interface TaskSkeletonProps {
  status: TaskStatus;
}

const bgLinear =
  "rounded-lg bg-linear-to-r from-background-400 via-background-300 to-background-400 animate-pulse";

const TaskSkeleton = ({ status, ...props }: TaskSkeletonProps) => {
  return (
    <div
      aria-hidden="true"
      {...props}
      className={clsx(
        "flex flex-col gap-2 p-4 border-2 border-dashed rounded-default",
        {
          "border-to-do": status === "to-do",
          "border-doing": status === "doing",
          "border-done": status === "done",
        },
      )}
    >
      <div className={clsx("h-7", bgLinear)}></div>
      <div className={clsx("h-12", bgLinear)}></div>
    </div>
  );
};

export default TaskSkeleton;
