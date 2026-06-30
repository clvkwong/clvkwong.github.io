import { sectors } from "../data/profile";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <span className="eyebrow">about</span>
        <h2 className="sec-title">The short version</h2>
        <p className="about-text">
          I fell in love with the endless possibilities of software engineering.
          In the pursuit of greatness, I spent years shipping features at large
          companies and pursuing entrpreneurial ventures.{" "}
          <span className="dim">
            But somewhere along the way, I lost track of whether I was doing
            good.
          </span>{" "}
          I'm looking forward to getting back to what inspired me. If you're
          building in one of these spaces, I'd love to chat:
        </p>
        <div className="chip-row">
          {sectors.map((s) => (
            <span key={s.label} className={`chip ${s.variant}`}>
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
