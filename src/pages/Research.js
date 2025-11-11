import Section from '../components/Section';
import { profile } from '../data/profile';

export default function Research() {
  return (
    <main>
      <Section title="UGC Sponsored Minor Research Projects">
        <ul className="list">
          {profile.researchProjects.map((p) => (
            <li key={p.title}>
              <strong>{p.role}:</strong> {p.title} <span className="time">({p.period})</span>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}


