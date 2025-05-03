import { TechGroup as Group } from "@/app/data/technologies";
import TechIcon from "@/app/pages/home/components/TechCluster/TechIcon";
import Image from "next/image";

type Props = {
  group: Group;
};

export default function TechGroup({ group }: Props) {
  const radius = 120;
  const count = group.related.length;

  return (
    <div className="relative w-64 h-64">
      {/* Center main tech */}
      <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden shadow-lg flex items-center justify-center">
        <Image src={group.icon} alt={group.name} width={100} height={100} />
      </div>

      {/* Orbiting techs */}
      {group.related.map((tech, j) => {
        const angle = (360 / count) * j;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <div
            key={j}
            className="absolute"
            style={{
              top: `calc(50% + ${y}px - 36px)`,
              left: `calc(50% + ${x}px - 36px)`,
            }}
          >
            <TechIcon name={tech.name} icon={tech.icon} />
          </div>
        );
      })}
    </div>
  );
}
