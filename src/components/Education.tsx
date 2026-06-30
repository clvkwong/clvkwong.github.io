import { education } from "../data/profile";

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <span className="eyebrow">education</span>
        <h2 className="sec-title">Where it started</h2>
        <div className="edu-card">
          <div>
            <div className="edu-deg">{education.degree}</div>
            <div className="edu-school">{education.school}</div>
          </div>
          <div>
            <div className="edu-meta">{education.gpa}</div>
            <div className="edu-meta">{education.honour}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
