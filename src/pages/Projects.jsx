import { projects } from "../data.js";
import { Band, ProjectCard } from "../ui.jsx";

export default function Projects() {
  return (
    <>
      <section className="wrap page-head">
        <h1>Projects</h1>
        <p>A selection of my testing and development work. Each one links to its GitHub repository.</p>
      </section>

      <section className="wrap grid projects-grid">
        {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </section>

  
    </>
  );
}
