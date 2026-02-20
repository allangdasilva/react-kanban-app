interface InputProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label = ({ children, ...props }: InputProps) => {
  return (
    <label className="font-body-base text-body" {...props}>
      {children}
    </label>
  );
};

export default Label;
