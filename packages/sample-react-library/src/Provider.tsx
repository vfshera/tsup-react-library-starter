import React, { FC, ReactNode } from "react";
import { useConfig } from "./hooks";

export interface ProviderProps {
  children: ReactNode;
  options?: { a: string; b: string }; // like config options for lib
}

export const Provider: FC<ProviderProps> = ({ children, options }) => {
  const config = useConfig();
  console.log({ options, config });
  return <div className="sample-library-provider">{children}</div>;
};
