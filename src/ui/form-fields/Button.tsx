import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type: "submit" | "button";
}

const Button = ({ children, type, ...props }: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        "py-4 px-8 font-button uppercase rounded-default cursor-pointer hover:outline-2  hover:ring-4 focus:outline-2  focus:ring-4",
        {
          "hover:outline-primary focus:outline-primary focus:ring-background-700 hover:ring-background-700":
            type === "submit",
          "hover:outline-body focus:outline-body focus:ring-background-400 hover:ring-background-400":
            type === "button",
        },
        props.className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
