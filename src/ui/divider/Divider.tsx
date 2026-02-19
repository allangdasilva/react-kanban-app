import clsx from "clsx";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  bg?: string;
}

const Divider = ({ bg, ...props }: DividerProps) => {
  return (
    <div
      {...props}
      className={clsx("w-full h-px", bg || "bg-background-400")}
    ></div>
  );
};

export default Divider;
