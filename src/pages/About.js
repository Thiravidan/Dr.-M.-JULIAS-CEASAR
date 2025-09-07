import Section from '../components/Section';
import { profile } from '../data/profile';

export default function About() {
  return (
    <main>
      <Section title="About">
        <p>{profile.objective}</p>
      </Section>
      <Section title="Education">
        <ul className="list">
          {profile.education.map((e) => (<li key={e}>{e}</li>))}
        </ul>
      </Section>
      <Section title="Personal Profile">
        <ul className="grid two">
          <li><strong>Email</strong><span>{profile.email}</span></li>
          <li><strong>Phone</strong><span>{profile.phones.join(' / ')}</span></li>
          <li><strong>Institution</strong><span>{profile.institution}</span></li>
          <li><strong>Languages</strong><span>{profile.personal.languages.join(', ')}</span></li>
        </ul>
      </Section>
    </main>
  );
}


