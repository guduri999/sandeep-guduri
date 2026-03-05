import React, { useEffect, useState } from 'react';
import './index.css';
import profilePic from './assets/profile.png';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const attachHandlers = () => {
      document.querySelectorAll("a, button").forEach(el => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    attachHandlers();

    const onMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  if (typeof navigator !== "undefined" && navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    return null; // No custom cursor on mobile
  }

  const cursorClasses = `custom-cursor ${hidden ? "hidden" : ""} ${clicked ? "clicked" : ""} ${linkHovered ? "hover" : ""}`;

  return (
    <div className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  );
};

const MarqueeTop = () => (
  <div className="marquee-container">
    <div className="marquee">
      <span>AVAILABLE FOR WORK</span>
      <span>•</span>
      <span>FULLSTACK ENGINEER</span>
      <span>•</span>
      <span>NODE.JS</span>
      <span>•</span>
      <span>REACT.JS</span>
      <span>•</span>
      <span>AWS CLOUD</span>
      <span>•</span>
      <span>OPEN TO OPPORTUNITIES</span>
      <span>•</span>
      <span>AVAILABLE FOR WORK</span>
      <span>•</span>
      <span>FULLSTACK ENGINEER</span>
      <span>•</span>
      <span>NODE.JS</span>
      <span>•</span>
      <span>REACT.JS</span>
    </div>
  </div>
);

const Navbar = () => (
  <nav className="nav-bar">
    <a href="#" className="nav-logo">Sandeep.</a>
    <div className="nav-links">
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">
        Creative<br />
        <span className="solid">Fullstack</span><br />
        Developer
      </h1>

      <div className="hero-bottom-grid">
        <p className="hero-desc">
          I build robust brutalist architectures and highly functional web applications.
          Currently architecting scaleable <span>Node.js</span> APIs & robust <span>React</span> dashboards on the cloud.
        </p>
        <div className="hero-profile">
          <img src={profilePic} alt="Sandeep Portrait" />
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section className="section" id="about">
      <h2 className="section-title">Core Stack</h2>
      <div className="skills-container">
        <div className="skill-block">
          <h3>Frontend</h3>
          <ul className="skill-list">
            <li>React JS</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Redux Toolkit</li>
            <li>Framer Motion</li>
          </ul>
        </div>

        <div className="skill-block" style={{ background: 'var(--text-color)', color: 'var(--bg-color)' }}>
          <h3>Backend</h3>
          <ul className="skill-list" style={{ '--accent-color': 'var(--bg-color)' }}>
            <li>Node.js</li>
            <li>Express JS</li>
            <li>NestJS</li>
            <li>GraphQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="skill-block">
          <h3>Cloud / DevOps</h3>
          <ul className="skill-list">
            <li>Amazon Web Services</li>
            <li>Docker & Containers</li>
            <li>CI/CD Pipelines</li>
            <li>Serverless Arch</li>
            <li>Linux / Bash</li>
            <li>Vercel / Netlify</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  return (
    <section className="section" id="work">
      <h2 className="section-title">Case Studies</h2>

      <div className="project-row">
        <div className="project-img-wrap">
          {/* Using a placeholder gradient pattern for strong brutalist feel */}
          <div style={{ width: '100%', height: '100%', background: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' }} />
        </div>
        <div className="project-info">
          <h3>Data Visualization Engine</h3>
          <div className="project-tags">
            <span className="project-tag">React</span>
            <span className="project-tag">Node.js</span>
            <span className="project-tag">D3.js</span>
          </div>
          <p className="project-desc">
            A brutal, high-contrast analytics dashboard parsing thousands of JSON responses into highly responsive charts.
          </p>
          <a href="#" className="btn-brutal">View Project</a>
        </div>
      </div>

      <div className="project-row" style={{ borderTop: '2px solid var(--text-color)', paddingTop: '6rem' }}>
        <div className="project-img-wrap" style={{ border: 'none', background: 'var(--text-color)' }}>
          <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle, #fff 10%, transparent 11%), radial-gradient(circle, #fff 10%, transparent 11%)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="project-info">
          <h3>Microservice Gateway</h3>
          <div className="project-tags">
            <span className="project-tag">Express</span>
            <span className="project-tag">AWS Gateway</span>
          </div>
          <p className="project-desc">
            Engineered a proxy infrastructure heavily throttling payloads across 5 different internal banking microservices.
          </p>
          <a href="#" className="btn-brutal" style={{ color: 'var(--accent-color)', borderColor: 'var(--accent-color)', boxShadow: '8px 8px 0 var(--text-color)' }}>View Source</a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer-cta" id="contact">
    <h2 className="footer-title">Let's <span>Build</span> Something.</h2>
    <a href="mailto:hello@sandeep.com" className="btn-brutal" style={{ background: 'var(--bg-color)', color: 'var(--text-color)' }}>GET IN TOUCH</a>
  </footer>
);

const App = () => {
  return (
    <>
      <Cursor />
      <MarqueeTop />
      <Navbar />
      <Hero />
      <Skills />
      <Work />
      <Footer />
    </>
  );
};

export default App;
