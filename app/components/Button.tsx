"use client";
import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx({
        ["flex justify-center items-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-white bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"]:
          true,
        ["opacity-50 cursor-default"]: disabled,
        ["w-full"]: fullWidth,
        ["text-gray-900"]: secondary,
        ["bg-rose-500 hover::bg-rose-600 focus-visible:outline-rose-600"]:
          danger,
      })}
    >
      {children}
    </button>
  );
};
