import { profile, projects, highlights, focus } from "../data.js";
import { Band, ProjectCard } from "../ui.jsx";
import portrait from "../assets/prof.png";

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <div>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role} from {profile.location}</p>
          <p className="intro">{profile.intro}</p>
          <div className="cta">
            <a className="btn primary" href="#/projects">See my projects</a>
            <a className="btn" href="#/contact">Contact me</a>
          </div>
        </div>
        <figure className="portrait">
          <img src={portrait} alt={`Portrait of ${profile.name} working on a laptop`} />
        </figure>
      </section>

      <section className="wrap about-strip" aria-label="Education, internship and interests">
        <div className="grid">
          {highlights.map((h) => (
            <div key={h.label} className="card highlight">
              <h3>{h.label}</h3>
              <p>{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap block">
        <h2>What I do</h2>
        <div className="focus">
          {focus.map((f) => (
            <div className="card" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="wrap block">
        <div className="section-head">
          <h2>Projects</h2>
          <a className="more" href="#/projects">View all projects &rarr;</a>
        </div>
        <div className="grid">
          {projects.slice(0, 3).map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
      </section>

      <Band
        title="Need someone to test your app?"
        text="Send me a message and I’ll get back to you."
      />
    </>
  );
}
