import Container from "@/app/pages/shared/components/Container";

export default function About() {
  return (
    <section id="sobre" className="py-16">
      <Container>
        <h3 className="text-2xl font-semibold mb-4">Sobre</h3>
        <p className="text-gray-200">
          Engenheiro de Software com formação em Ciência da Computação pela Universidade Federal de Campina Grande
          (UFCG). Experiência com desenvolvimento de APIs, integração de sistemas e automação. Atuação complementar em
          análise e processamento de dados e algoritmos de machine learning.
        </p>
      </Container>
    </section>
  );
}
