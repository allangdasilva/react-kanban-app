interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      type="submit"
      className="py-4 px-8 font-button uppercase"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
