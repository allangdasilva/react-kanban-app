import clsx from "clsx";

interface TaskSkeletonProps {
  color: "open" | "in-progress" | "done";
}

const bgLinear =
  "rounded-lg bg-linear-to-r from-background-400 via-background-300 to-background-400";

const TaskSkeleton = ({ color, ...props }: TaskSkeletonProps) => {
  return (
    <div
      aria-hidden="true"
      {...props}
      className={clsx(
        "flex flex-col gap-2 p-4 border-2 border-dashed rounded-default",
        { "border-open": color === "open" },
        { "border-in-progress": color === "in-progress" },
        { "border-done": color === "done" },
      )}
    >
      <div className={clsx("h-7", bgLinear)}></div>
      <div className={clsx("h-12", bgLinear)}></div>
    </div>
  );
};

export default TaskSkeleton;
