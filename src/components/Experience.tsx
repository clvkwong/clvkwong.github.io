import { roles, earlierRoles } from "../data/profile";
import type { RoleEntry } from "../data/profile";

function RoleCard({ role }: { role: RoleEntry }) {
  return (
    <div className="role">
      <div className="role-date">
        {role.dateStart}
        <br />
        {role.dateEnd}
      </div>
      <div className="role-bar">
        <div className="role-head">
          <span className="role-title">{role.title}</span>
          <span className="role-co">@ {role.company}</span>
        </div>
        <ul className="role-list">
          {role.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <span className="eyebrow">experience</span>
        <h2 className="sec-title">Where I've worked</h2>
        <div className="timeline">
          {roles.map((role) => (
            <RoleCard key={`${role.company}-${role.dateStart}`} role={role} />
          ))}

          <details className="more">
            <summary>
              earlier roles — Amazon, LinkedIn, Splunk, GE Digital (2018–2020)
            </summary>
            {earlierRoles.map((role) => (
              <RoleCard key={`${role.company}-${role.dateStart}`} role={role} />
            ))}
          </details>
        </div>
      </div>
    </section>
  );
}
