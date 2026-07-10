import type { MouseEvent, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  disable?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  variant?: "contained" | "outlined" | "standard";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <button 
  className="px-4 py-2 rounded-md bg-primary cursor-pointer text-white"
  onClick={(e) => onClick?.(e)}>{children}</button>;
};

export default Button;
