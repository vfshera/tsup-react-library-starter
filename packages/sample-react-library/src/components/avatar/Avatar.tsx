import React, { FC } from "react";
import { HTMLProps } from "../../types";

// type Img = ImgHTMLAttributes<HTMLImageElement>;
export interface AvatarProps extends HTMLProps<"img"> {}

export const Avatar: FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  as: Component = "img",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className: _,
  ...props
}) => {
  return (
    <Component
      src={src}
      {...props}
      className="w-32 rounded-full shadow-lg "
      alt={alt}
    />
  );
};
