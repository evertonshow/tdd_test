import { ReactNode } from "react";

const Button = ({
  disabled,
  children,
  onClick,
}: {
  disabled: boolean;
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: disabled ? "red" : "blue",
        color: "white",
        padding: 10,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
