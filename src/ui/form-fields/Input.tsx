interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: InputProps) => {
  return (
    <input
      {...props}
      type="text"
      className="w-full p-4 rounded-default font-body-base text-body bg-background-500 placeholder:opacity-20"
    />
  );
};

export default Input;
