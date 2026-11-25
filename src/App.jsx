import { useEffect } from "react";
import { profile } from "./data.js";
import { useRoute } from "./router.jsx";
import { initials, shortName } from "./ui.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

const nav = [["/", "Home"], ["/about", "About"], ["/projects", "Projects"], ["/contact", "Contact"]];
const pages = { "/": Home, "/about": About, "/projects": Projects, "/contact": Contact };

function NotFound() {
  return (
    <section className="wrap page-head">
      <h1>Page not found</h1>
      <p>That page doesn’t exist. <a href="#/">Go back home</a>.</p>
    </section>
  );
}

export default function App() {
  const path = useRoute();
  const Page = pages[path] || NotFound;

  useEffect(() => {
    window.scrollTo(0, 0);
    const label = nav.find(([p]) => p === path)?.[1];
    document.title = path === "/" ? `${profile.name} | ${profile.role}` : `${label || "Page not found"} | ${profile.name}`;
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [path]);

  return (
    <>
      <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById("main").focus(); }}>Skip to content</a>
      <header className="site-head">
        <div className="wrap bar">
          <a className="brand" href="#/" aria-label={`${profile.name}, home`}>
            <span className="logo">{initials}</span>
            <span>{shortName}</span>
          </a>
          <nav className="nav" aria-label="Main">
            {nav.map(([to, label]) => (
              <a key={to} href={`#${to}`} aria-current={path === to ? "page" : undefined}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <Page />
      </main>

      <footer className="site-foot">
        <div className="wrap foot">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="foot-links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </span>
        </div>
      </footer>
    </>
  );
}
