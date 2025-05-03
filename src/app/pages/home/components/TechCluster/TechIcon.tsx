import { JSX } from "react";

type Props = {
  name: string;
  icon: JSX.Element;
};

export default function TechIcon({ name, icon }: Props) {
  return (
    <div className="flex flex-col items-center text-xs w-16">
      <div className="w-16 h-16 rounded-full overflow-hidden shadow flex items-center justify-center">{icon}</div>
      <span className="text-center mt-1">{name}</span>
    </div>
  );
}
