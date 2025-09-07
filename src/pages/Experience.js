import Section from '../components/Section';
import { profile } from '../data/profile';

export default function Experience() {
  return (
    <main>
      <Section title="Teaching Experience">
        <ul className="timeline">
          {profile.experience.roles.map((r) => (
            <li key={r.role + r.period}>
              <h3>{r.role}</h3>
              <p>{r.dept}, {r.org}</p>
              <span className="time">{r.period}</span>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}


