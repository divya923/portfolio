import { useEffect, useRef, useState, type CSSProperties } from "react";
import resumeUrl from "./assets/Dhivya_Frontend_Developer.pdf?url";
import { profile, stats, projects, experience, skills, education } from "./data";

const nav = ["Work", "Experience", "Skills", "Contact"];

// Optional photo: put photo.jpg (or .png / .webp) in src/assets. No file = no photo shown.
const photos = import.meta.glob<string>("./assets/photo.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});
const photoUrl = Object.values(photos)[0];

const ix = (i: number) => ({ "--i": i }) as CSSProperties;
const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

function Photo() {
  if (!photoUrl) return null; // no photo file = nothing shown
  return (
    <div className="photo-wrap reveal" style={delay(0.35)}>
      <div className="ring" aria-hidden="true" />
      <figure className="photo">
        <img src={photoUrl} alt={`Portrait of ${profile.name}`} />
      </figure>
    </div>
  );
}


export default function App() {
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState("");
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll reveal: shapes/lines draw first, text follows (see CSS)
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            reveal.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll("[data-rv]").forEach((el) => reveal.observe(el));

    // Highlight the current section in the menu
    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.toLowerCase());
      if (el) spy.observe(el);
    });

    // Scroll progress bar
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      reveal.disconnect();
      spy.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <>
      <div className="progress" ref={progress} aria-hidden="true" />
      <header className="bar">
        <a href="#top" className="brand">{profile.name}</a>
        <nav aria-label="Primary">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className={active === n.toLowerCase() ? "active" : undefined}>{n}</a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="orb" aria-hidden="true" />
          <div className={photoUrl ? "hero-grid" : "hero-grid solo"}>
            <div>
              <h1 className="hero-name">{profile.name}</h1>
              <p className="hero-role reveal" style={delay(0.2)}>{profile.role}</p>
              <p className="lead reveal" style={delay(0.35)}>{profile.summary}</p>
              <div className="actions reveal" style={delay(0.5)}>
                <a className="btn primary" href="#work">See my work</a>
                <a className="btn" href={resumeUrl} download="Dhivya_P_Resume.pdf">Download resume</a>
                <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <button className="btn" onClick={copyEmail}>
                  {copied ? "Email copied" : "Copy email"}
                </button>
              </div>
            </div>
            <Photo />
          </div>
          <dl className="stats reveal" style={delay(0.7)}>
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="work" className="wrap section">
          <div className="sec-head" data-rv="box"><h2 className="t">Selected work</h2></div>
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.title} data-rv="box">
                <div>
                  <h3 className="t">{p.title}</h3>
                  <p className="meta t" style={ix(1)}>{p.meta}</p>
                </div>
                <div>
                  <p className="t" style={ix(2)}>{p.description}</p>
                  <ul className="chips">
                    {p.tags.map((t, i) => <li key={t} className="t" style={ix(3 + i)}>{t}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className="wrap section">
          <div className="sec-head" data-rv="box"><h2 className="t">Experience</h2></div>
          <ol className="timeline" data-rv="line">
            {experience.map((e) => (
              <li key={e.role} data-rv="box">
                <p className="meta t">{e.period}</p>
                <h3 className="t" style={ix(1)}>{e.role}</h3>
                <p className="company t" style={ix(2)}>{e.company}</p>
                <ul className="points">
                  {e.points.map((pt, i) => <li key={pt} className="t" style={ix(3 + i)}>{pt}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" className="wrap section">
          <div className="sec-head" data-rv="box"><h2 className="t">Skills</h2></div>
          <div className="skills">
            {skills.map((s) => (
              <div key={s.group} data-rv="box">
                <h3 className="t">{s.group}</h3>
                <ul className="chips">
                  {s.items.map((i, k) => <li key={i} className="t" style={ix(1 + k)}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="sec-head sub" data-rv="box"><h2 className="t">Education</h2></div>
          <ul className="edu">
            {education.map((e) => (
              <li key={e.degree} data-rv="box">
                <div>
                  <h3 className="t">{e.degree}</h3>
                  <p className="meta t" style={ix(1)}>{e.place}{e.note ? `, ${e.note}` : ""}</p>
                </div>
                <p className="meta t" style={ix(2)}>{e.period}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="wrap section contact">
          <div className="contact-card" data-rv="box">
            <h2 className="t">Have a product to build?</h2>
            <p className="lead t" style={ix(1)}>I'm open to frontend roles where workflows, dashboards and reusable UI matter.</p>
            <div className="actions t" style={ix(2)}>
              <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
              <a className="btn" href={resumeUrl} download="Dhivya_P_Resume.pdf">Download resume</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap foot">
        <span>{profile.name}, {profile.location}</span>
        <span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          {" · "}
          {new Date().getFullYear()}
        </span>
      </footer>
    </>
  );
}