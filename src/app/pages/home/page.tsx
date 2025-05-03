import About from "@/app/pages/home/components/About";
import Contact from "@/app/pages/home/components/Contact";
import Hero from "@/app/pages/home/components/Hero";
import Projects from "@/app/pages/home/components/Project/Project";
import TechCluster from "@/app/pages/home/components/TechCluster/TechCluster";
import TechStack from "@/app/pages/home/components/TechCluster/TechStack";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <TechCluster />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </main>
  );
}
