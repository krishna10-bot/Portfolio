import { profile, skillGroups } from "../data.js";
import { Band, initials } from "../ui.jsx";

export default function About() {
  return (
    <>
      <section className="wrap page-head">
        <h1>About me</h1>
      </section>

      <section className="wrap about-grid">
        <div>
          {profile.about.map((t) => <p className="lead" key={t}>{t}</p>)}
        </div>
        <aside className="card">
          <div className="mono" aria-hidden="true">{initials}</div>
          <h2 className="card-name">{profile.name}</h2>
          <p className="card-role">{profile.role}</p>
          <dl className="facts">
            <dt>Location</dt><dd>{profile.location}</dd>
            <dt>Status</dt><dd>{profile.status}</dd>
            <dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd>
          </dl>
        </aside>
      </section>

      <section className="wrap block">
        <h2>Skills</h2>
        <div className="groups">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <h3>{g.title}</h3>
              <ul className="chips solid">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <Band title="Let’s work together" text="Have a role, an internship or a project that needs testing? I’d like to hear about it." />
    </>
  );
}
