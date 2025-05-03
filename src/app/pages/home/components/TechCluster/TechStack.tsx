import { otherTechGroups } from "@/app/data/technologies";
import TechIcon from "@/app/pages/home/components/TechCluster/TechIcon";

export default function TechStack() {
  return (
    <section className="relative py-20 px-6">
      <h3 className="text-2xl font-semibold text-center mb-12">Outras Tecnologias</h3>
      <div className="flex flex-wrap justify-center gap-10 max-w-3xl mx-auto">
        {otherTechGroups.map((tech, index) => (
          <TechIcon key={index} name={tech.name} icon={tech.icon} />
        ))}
      </div>
    </section>
  );
}
