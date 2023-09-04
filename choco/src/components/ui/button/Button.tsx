type Props = {
  onClick?: () => void;
  buttonText?: string;
  children?: React.ReactNode;
  className?: string;
};

export const Button = ({ onClick, children, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`absolute text-white tracking-wider border-white border rounded-2xl w-24 text-md font01 h-8 ${className}`}
    >
      {children}
    </button>
  );
};
