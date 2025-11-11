import Section from '../components/Section';
import { profile } from '../data/profile';

export default function Contact() {
  return (
    <main>
      <Section title="Contact">
        <ul className="list">
          <li><strong>Email:</strong> <a href="mailto:julius.sxc@gmail.com">{profile.email}</a></li>
          <li><strong>Mobile:</strong> {profile.phones.join(' / ')}</li>
          <li><strong>Institution:</strong> {profile.institution}</li>
        </ul>
      </Section>
    </main>
  );
}


