interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: InputProps) => {
  return (
    <input
      {...props}
      className="w-full p-4 rounded-default font-body-base text-body bg-background-500 placeholder:opacity-20 focus:outline-2 focus:outline-primary focus:ring-4 focus:ring-background-500"
    />
  );
};

export default Input;
