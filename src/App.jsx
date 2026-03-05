import React, { useEffect, useState } from 'react';
import './index.css';
import profilePic from './assets/profile.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">Sandeep<span className="text-gradient">.Dev</span></a>

        <div className="nav-links">
          <a href="#home">Start</a>
          <a href="#experience">Experience</a>
          <a href="#work">Showcase</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero container">
      <div className="grid-2">
        <div className="hero-content">
          <div className="hero-greeting">👋 Creative Technologist</div>
          <h1 className="hero-title">
            I Engineer <br />
            <span className="text-gradient">Digital Magic.</span>
          </h1>
          <p className="hero-subtitle">
            Hi, I'm Sandeep. A Fullstack Engineer blurring the line between beautiful design and complex backend architecture. I build scalable applications with Node.js, React, and AWS.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">See my work</a>
            <a href="#contact" className="btn btn-outline">Let's talk</a>
          </div>
        </div>

        <div className="hero-visuals">
          <div className="profile-frame">
            <div className="profile-backdrop"></div>
            <img src={profilePic} alt="Sandeep portrait" className="profile-img" />

            <div className="floating-badge badge-1">
              <div className="badge-icon">🚀</div>
              <div className="badge-text">
                <div>Fast & Scalable</div>
                <div>AWS CI/CD</div>
              </div>
            </div>

            <div className="floating-badge badge-2">
              <div className="badge-icon">✨</div>
              <div className="badge-text">
                <div>Pixel Perfect</div>
                <div>React / Tailwind</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <div className="section-head">
        <span className="section-tag">Career Journey</span>
        <h2 className="section-title">Where I've <span className="text-gradient">Engineered</span></h2>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-date">2023 — Present</div>
            <h3 className="timeline-title">Senior Fullstack Developer</h3>
            <div className="timeline-company">🏢 TechNova Solutions</div>
            <p className="timeline-desc">
              Led the migration of legacy REST APIs to a highly performant GraphQL federation. Architected the main client dashboard using Next.js, resulting in a 40% performance boost globally.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-date">2021 — 2023</div>
            <h3 className="timeline-title">Backend Software Engineer</h3>
            <div className="timeline-company">☁️ CloudScale Inc.</div>
            <p className="timeline-desc">
              Designed and deployed serverless microservices on AWS Lambda. Built heavy data-processing pipelines processing over 1M events daily with DynamoDB and event-driven architecture.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-date">2019 — 2021</div>
            <h3 className="timeline-title">Frontend Developer</h3>
            <div className="timeline-company">🎨 PixelCreative Agency</div>
            <p className="timeline-desc">
              Authored rich interactive web experiences and component libraries from scratch using React, Redux, and custom CSS animations for top-tier e-commerce brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Works = () => {
  return (
    <section id="work" className="section container">
      <div className="section-head">
        <span className="section-tag">Portfolio Showcase</span>
        <h2 className="section-title">Selected <span className="text-gradient">Projects</span></h2>
      </div>

      <div className="works-grid">
        {/* Card 1 - Large */}
        <div className="work-card work-card-1">
          <div className="work-bg work-bg-1"></div>
          <div className="work-content">
            <div className="work-tags">
              <span className="w-tag">React</span>
              <span className="w-tag">Node.js</span>
            </div>
            <h3 className="work-title">E-Commerce Ecosystem</h3>
            <a href="#" className="work-link">Explore Case Study &rarr;</a>
          </div>
        </div>

        {/* Card 2 - Small */}
        <div className="work-card work-card-2">
          <div className="work-bg work-bg-2"></div>
          <div className="work-content">
            <div className="work-tags">
              <span className="w-tag">AWS Gateway</span>
            </div>
            <h3 className="work-title">Serverless Auth</h3>
            <a href="#" className="work-link">View Source &rarr;</a>
          </div>
        </div>

        {/* Card 3 - Small */}
        <div className="work-card work-card-4">
          <div className="work-bg work-bg-3"></div>
          <div className="work-content">
            <div className="work-tags">
              <span className="w-tag">WebSockets</span>
            </div>
            <h3 className="work-title">Realtime Canvas</h3>
            <a href="#" className="work-link">Waitlist Beta &rarr;</a>
          </div>
        </div>

        {/* Card 4 - Large */}
        <div className="work-card work-card-3">
          <div className="work-bg work-bg-4"></div>
          <div className="work-content">
            <div className="work-tags">
              <span className="w-tag">Next.js</span>
              <span className="w-tag">PostgreSQL</span>
            </div>
            <h3 className="work-title">Analytics Engine AI</h3>
            <a href="#" className="work-link">Explore Live Site &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section id="contact" className="cta-section container">
      <div className="cta-box">
        <h2 className="cta-title">Have an interesting project?</h2>
        <p className="hero-subtitle" style={{ margin: '0 auto 2rem' }}>
          I'm currently open for new opportunities. Let's create something awesome together.
        </p>
        <a href="mailto:contact@url.com" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.2rem' }}>
          Drop me a line
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="social-links">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
        <a href="#">Dribbble</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Sandeep. Designed & Built flawlessly.</p>
    </footer>
  );
};

function App() {
  return (
    <>
      <div className="bg-mesh">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>
      <Navbar />
      <Hero />
      <Experience />
      <Works />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
