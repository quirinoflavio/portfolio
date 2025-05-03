import { techGroups } from "@/app/data/technologies";
import TechGroup from "@/app/pages/home/components/TechCluster/TechGroup";
import Container from "@/app/pages/shared/components/Container";

export default function TechCluster() {
  return (
    <section className="py-16">
      <Container>
        <h3 className="text-2xl font-semibold mb-16 text-center">Principais Tecnologias</h3>
        <div className="flex flex-wrap justify-evenly gap-42">
          {techGroups.map((group, i) => (
            <TechGroup key={i} group={group} />
          ))}
        </div>
      </Container>
    </section>
  );
}
