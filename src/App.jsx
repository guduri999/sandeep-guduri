import React from 'react';
import './index.css';
import profilePic from './assets/profile.png';

const Nav = () => (
  <nav className="glass-panel">
    <div className="nav-links">
      <a href="#about">Profile</a>
      <a href="#skills">Capabilities</a>
      <a href="#projects">Showcase</a>
      <a href="#contact">Reach Out</a>
    </div>
  </nav>
);

const Hero = () => (
  <section id="about" className="hero container">
    <div className="hero-box glass-panel">
      <img src={profilePic} alt="Sandeep" className="profile-avatar" />
      <div className="hero-badge">Sandeep / Cloud Architect</div>
      <h1 className="hero-title">
        Engineering <i>Fluid</i><br /> Digital Experiences.
      </h1>
      <p className="hero-desc">
        A passionate Fullstack Engineer focused on elegant backends and breathtaking user interfaces. Building applications with scalable infrastructure and uncompromising design.
      </p>
      <a href="#contact" className="btn-primary">Start a Conversation</a>
    </div>
  </section>
);

const Skills = () => {
  return (
    <section id="skills" className="container">
      <h2 className="section-title">Core Capabilities</h2>
      <div className="bento">
        {/* Large Card */}
        <div className="bento-card card-wide glass-panel">
          <div className="card-icon">🏗️</div>
          <h3 className="card-title">Backend Architecture</h3>
          <p className="card-text">
            Designing resilient microservices using Node.js, Express, and NestJS. Constructing highly available databases with PostgreSQL, Redis caching layers, and zero-downtime CI/CD pipelines. My primary focus is turning complex data flows into seamless APIs.
          </p>
        </div>

        {/* Small Card */}
        <div className="bento-card card-square glass-panel">
          <div className="card-icon">☁️</div>
          <h3 className="card-title">Cloud Native</h3>
          <p className="card-text">
            Deep expertise in AWS ecosystem: Lambda, DynamoDB, ECS, and S3. Structuring serverless paradigms for cost-effective event-driven computing.
          </p>
        </div>

        {/* Small Card */}
        <div className="bento-card card-square glass-panel">
          <div className="card-icon">✨</div>
          <h3 className="card-title">UI / UX Engineering</h3>
          <p className="card-text">
            Translating high-fidelity designs into pixel-perfect React and Next.js interfaces. Focusing heavily on accessibility, micro-interactions, and 60fps performance optimizations.
          </p>
        </div>

        {/* Large Card */}
        <div className="bento-card card-wide glass-panel">
          <div className="card-icon">🔐</div>
          <h3 className="card-title">System Security</h3>
          <p className="card-text">
            Implementing robust authentication and authorization layers. OAuth2, JWTs, SSO integrations, and role-based access control protecting critical application data under intense traffic.
          </p>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const data = [
    {
      title: "FinTech Dashboard",
      desc: "Real-time monetary transaction visualizer utilizing web sockets. Processed 10k events/sec flawlessly.",
      tags: ["React", "Express", "PostgreSQL", "Tailwind"]
    },
    {
      title: "Audio Streamer App",
      desc: "An elegant music streaming PWA built with React Native and a serverless audio-transcoding backend.",
      tags: ["React Native", "AWS Lambda", "S3"]
    },
    {
      title: "Headless Commerce API",
      desc: "A GraphQL backend for diverse storefronts globally. Automated inventory sync with external ERP providers.",
      tags: ["GraphQL", "NestJS", "Stripe API"]
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Selected Works</h2>
      <div className="projects-grid">
        {data.map((proj, i) => (
          <div key={i} className="proj-card glass-panel">
            <div className="proj-img">
              {/* Optional: <img src={...} /> could go here */}
              <span style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-serif)", fontSize: "2rem", zIndex: 2 }}>
                Preview
              </span>
            </div>
            <div className="proj-content">
              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-desc">{proj.desc}</p>
              <div className="proj-tags">
                {proj.tags.map((tag, j) => (
                  <span key={j} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="container">
    <div className="contact-wrap glass-panel">
      <h2>Let's build something beautiful.</h2>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
        My inbox is always open. Whether you have a question or just want to engineer together.
      </p>
      <a href="mailto:contact@sandeep-engineer.com" className="btn-primary">Say Hello</a>
    </div>
  </section>
);

const App = () => {
  return (
    <>
      <div className="aurora-bg">
        <div className="aurora a-1"></div>
        <div className="aurora a-2"></div>
        <div className="aurora a-3"></div>
      </div>
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer>
        &copy; {new Date().getFullYear()} Sandeep. Designed with glassmorphism aesthetics.
      </footer>
    </>
  );
};

export default App;
