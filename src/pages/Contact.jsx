import { useState } from "react";
import { profile } from "../data.js";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the email link above still works */
    }
  };

  // No server needed: this opens the visitor's email app with the message filled in.
  const send = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Portfolio message from ${f.get("name")}`;
    const body = `${f.get("message")}\n\nFrom: ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section className="wrap page-head">
        <h1>Contact</h1>
        <p>I’m open to internships, jobs and collaborations. Email is the best way to reach me.</p>
      </section>

      <section className="wrap contact-grid">
        <div className="ways">
          <div className="card way">
            <span className="label">Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button type="button" className="link-btn" onClick={copy}>{copied ? "Copied" : "Copy email"}</button>
            <span className="sr-only" aria-live="polite">{copied ? "Email copied" : ""}</span>
          </div>
          <div className="card way">
            <span className="label">GitHub</span>
            <a href={profile.github} target="_blank" rel="noreferrer">{profile.github.replace(/^https?:\/\//, "")}</a>
          </div>
        </div>

        <form className="card" onSubmit={send}>
          <h2 className="form-title">Send a message</h2>
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Your email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit" className="btn primary">Send message</button>
          <p className="hint">This opens your email app with the message ready to send.</p>
        </form>
      </section>
    </>
  );
}
