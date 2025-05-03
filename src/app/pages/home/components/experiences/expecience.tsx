import experience from "@/app/data/experiences";
import ExperienceCard from "@/app/pages/home/components/experiences/experience-card";
import Container from "@/app/pages/shared/components/Container";

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <Container>
        <h3 className="text-2xl font-semibold mb-8 text-center">Experiência</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {experience.map((item, idx) => (
            <ExperienceCard
              key={idx}
              role={item.role}
              company={item.company}
              period={item.period}
              responsibilities={item.responsibilities}
              techs={item.techs}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
