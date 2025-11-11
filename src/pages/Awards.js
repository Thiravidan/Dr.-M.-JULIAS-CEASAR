import Section from '../components/Section';
import { profile } from '../data/profile';

export default function Awards() {
  return (
    <main>
      <Section title="Awards and Recognitions">
        <ul className="list">
          {profile.awards.map((a) => (<li key={a}>{a}</li>))}
        </ul>
      </Section>
    </main>
  );
}


