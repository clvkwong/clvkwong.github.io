import { projects } from "../data/profile";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <span className="eyebrow">projects</span>
        <h2 className="sec-title">Things I've built for fun</h2>
        <div className="proj-grid">
          {projects.map((p) => (
            <div key={p.title} className={`proj-card ${p.variant}`}>
              <span className="proj-badge">{p.badge}</span>
              <div className="proj-title">{p.title}</div>
              <p className="proj-desc">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
