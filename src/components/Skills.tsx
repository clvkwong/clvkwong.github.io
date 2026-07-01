import { skills } from "../data/profile";

const skillPillVariants = ["coral", "pink", "peach"] as const;

function getSkillPillVariant(index: number) {
  return skillPillVariants[index % skillPillVariants.length];
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <span className="eyebrow">skills</span>
        <h2 className="sec-title">What I reach for</h2>
        <div className="skill-row">
          <div className="skill-col">
            <div className="skill-col-label">languages</div>
            <div className="skill-pills">
              {skills.languages.map((s, index) => (
                <span key={s.label} className={`skill-pill ${getSkillPillVariant(index)}`}>
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="skill-row">
          <div className="skill-col">
            <div className="skill-col-label">tools &amp; platforms</div>
            <div className="skill-pills">
              {skills.tools.map((s, index) => (
                <span key={s.label} className={`skill-pill ${getSkillPillVariant(index)}`}>
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
