import ProjectCard from "@/app/pages/home/components/Project/ProjectCard";
import Container from "@/app/pages/shared/components/Container";
import PinnedRepo from "@/app/pages/shared/ui/PinnedRepo";
import getAsync from "@/host/external/berrysauce/client";

export default async function Projects() {
  const username = "quirinoflavio";
  const pinnedRepos: PinnedRepo[] = await getAsync(username);

  return (
    <section id="projects" className="py-8">
      <Container>
        <h3 className="text-2xl font-semibold mb-8 text-center">Projetos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pinnedRepos?.length > 0 ? (
            pinnedRepos.map((repo: PinnedRepo, i: number) => (
              <ProjectCard
                key={i}
                title={repo.name}
                description={repo.description}
                url={"https://github.com/quirinoflavio/" + repo.name}
                language={repo.language}
                languageColor={repo.languageColor}
                stars={repo.stars}
                forks={repo.forks}
              />
            ))
          ) : (
            <p>Sem projetos ainda...</p>
          )}
        </div>
      </Container>
    </section>
  );
}
