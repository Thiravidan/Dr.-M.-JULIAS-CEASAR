import Section from '../components/Section';
import { profile } from '../data/profile';

export default function Seminars() {
  return (
    <main>
      <Section title="Sponsored Seminars and Conferences Organized">
        <ul className="list">
          {profile.seminarsOrganized.map((s) => (<li key={s}>{s}</li>))}
        </ul>
      </Section>
    </main>
  );
}


