import type { ReactNode } from "react";
import { useConfig } from "../../Provider";

export function H1({ children }: { children: ReactNode }) {
  const { headingId } = useConfig();
  return (
    <h1 className={`${headingId} text-5xl   font-extrabold`}> {children} </h1>
  );
}

export function H2({ children }: { children: ReactNode }) {
  const { headingId } = useConfig();
  return (
    <h2 className={`${headingId} text-4xl  font-extrabold`}>{children}</h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  const { headingId } = useConfig();
  return (
    <h3 className={`${headingId} text-3xl   font-extrabold`}>{children}</h3>
  );
}
