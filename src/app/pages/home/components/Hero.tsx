import Container from "@/app/pages/shared/components/Container";

export default function Hero() {
  return (
    <section className="py-16 text-center">
      <Container>
        <h2 className="text-4xl font-bold mb-4">Olá, sou Flávio</h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          Eu gosto de resolver problemas utilizando tecnologias modernas.
        </p>
      </Container>
    </section>
  );
}
