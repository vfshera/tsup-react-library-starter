import type { ButtonHTMLAttributes, FC } from "react";
import { useConfig } from "../../Provider";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({
  children,
  className: classes = "",
  ...props
}) => {
  const config = useConfig();
  return (
    <button
      className={`${config.btnId} text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 ${classes}`}
      {...props}
    >
      {children}
    </button>
  );
};
