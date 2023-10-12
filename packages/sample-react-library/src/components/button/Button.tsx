import type { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({
  children,
  className: classes = "",
  ...props
}) => {
  return (
    <button
      className={`text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 ${classes}`}
      {...props}
    >
      {children}
    </button>
  );
};
