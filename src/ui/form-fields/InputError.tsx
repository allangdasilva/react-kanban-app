interface InputStatusProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const InputStatus = ({ children, ...props }: InputStatusProps) => {
  return (
    <span className="font-body-sm text-validation" {...props}>
      {children}
    </span>
  );
};

export default InputStatus;
