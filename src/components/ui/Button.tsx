import type { MouseEvent, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "contained" | "outlined" | "standard";

interface ButtonProps {
  children?: ReactNode;
  disable?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  variant?: ButtonVariant;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Button = ({
  children,
  disable,
  endIcon,
  onClick,
  startIcon,
  variant,
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "px-3 py-1 rounded-sm cursor-pointer text-lg duration-200 scale-100 active:scale-95",
        variant && variant === "contained"
          ? "bg-primary hover:bg-primary-2 text-textcolor-white"
          : variant === "outlined"
          ? "text-primary border border-primary hover:bg-background-50"
          : "bg-gray-1 text-textcolor-primary hover:bg-background-100",
        (endIcon || startIcon) && "flex flex-row items-center gap-0.5",
        disable &&
          "bg-disabled-1 hover:bg-disabled-1 cursor-default active:scale-100"
      )}
      onClick={(e) => !disable && onClick?.(e)}
    >
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default Button;
