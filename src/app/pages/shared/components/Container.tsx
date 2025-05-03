import { ReactNode } from "react";
import clsx from "clsx"; // Optional but recommended for cleaner class merging

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={clsx("w-full max-w-4xl px-6 mx-auto", className)}>{children}</div>;
}
