import Section from '../components/Section';
import { profile } from '../data/profile';

export default function Publications() {
  const p = profile.publicationsSummary;
  return (
    <main>
      <Section title="Publications & Contributions">
        <ul className="stats">
          <li><strong>{p.booksAuthored}</strong><span>Books Authored</span></li>
          <li><strong>{p.booksEdited}</strong><span>Books Edited</span></li>
          <li><strong>{p.contributionsToBooks}</strong><span>Contributions to Books</span></li>
          <li><strong>{p.journalPapers}</strong><span>Journal Papers</span></li>
          <li><strong>{p.papersPresented}</strong><span>Papers Presented</span></li>
          <li><strong>{p.eventsAttended}</strong><span>Events Attended</span></li>
          <li><strong>{p.phdProduced}</strong><span>Ph.D. Produced</span></li>
          <li><strong>{p.internationalVisits}</strong><span>International Visits</span></li>
        </ul>
      </Section>
    </main>
  );
}


