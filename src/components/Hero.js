import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-text-content">
            <h1 className="hero-title">
              <span className="accent">{profile.name}</span>
            </h1>
            <p className="hero-subtitle">{profile.titles.join(' • ')}</p>
            <p className="hero-text">{profile.objective}</p>
            <div className="hero-cta">
              <a className="btn primary" href="mailto:julius.sxc@gmail.com">Email</a>
              <a className="btn" href="/publications">Publications</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-photo">
              <img 
                src="/profile-photo.jpg" 
                alt="Dr. M. Julias Ceasar" 
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


