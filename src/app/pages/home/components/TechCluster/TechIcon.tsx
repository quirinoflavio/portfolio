import Image from "next/image";

type Props = {
  name: string;
  icon: string;
};

export default function TechIcon({ name, icon }: Props) {
  return (
    <div className="flex flex-col items-center text-xs w-16">
      <div className="w-16 h-16 rounded-full overflow-hidden shadow flex items-center justify-center">
        <Image src={icon} alt={name} width={48} height={48} />
      </div>
      <span className="text-center">{name}</span>
    </div>
  );
}
