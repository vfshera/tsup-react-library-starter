import React, { FC, ImgHTMLAttributes } from "react";

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Avatar: FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className: _,
  ...props
}) => {
  return (
    <img
      src={src}
      {...props}
      className="w-32 rounded-full shadow-lg "
      alt={alt}
    />
  );
};
