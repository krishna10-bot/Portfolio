import { profile } from "./data.js";

const words = profile.name.split(" ");
const ends = [words[0], words[words.length - 1]];
export const initials = ends.map((w) => w[0]).join("");
export const shortName = ends.join(" ");

export function ExtIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 3H3v10h10v-3M9 3h4v4M13 3L7 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProjectCard({ p }) {
  return (
    <a className="card project" href={p.link} target="_blank" rel="noreferrer">
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      <ul className="chips">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
      <span className="more">View on GitHub <ExtIcon /></span>
    </a>
  );
}

export function Band({ title, text, to = "/contact", label = "Get in touch" }) {
  return (
    <section className="wrap block">
      <div className="band">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <a className="btn" href={`#${to}`}>{label}</a>
      </div>
    </section>
  );
}
