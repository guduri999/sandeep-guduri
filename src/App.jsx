import React, { useEffect, useState } from 'react';
import './index.css';
import profilePic from './assets/profile.png';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-content">
        <a href="#" className="logo">Sandeep.</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="container hero-grid">
        <div className="hero-text">
          <div className="hero-label">
            <span className="dot"></span> Available for new opportunities
          </div>
          <h1 className="hero-title">
            I craft digital experiences <span>that are elegant and functional.</span>
          </h1>
          <p className="hero-description">
            Hi, I'm Sandeep. I'm a Fullstack Engineer based in the cloud. I specialize in building performant, accessible web applications utilizing Node.js, React, and AWS infrastructure.
          </p>
          <div className="btn-group">
            <a href="#projects" className="btn btn-primary">View my work</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub Profile</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={profilePic} alt="Sandeep Profile" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillset = [
    {
      title: 'Frontend Development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      ),
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux']
    },
    {
      title: 'Backend Engineering',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
      ),
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL']
    },
    {
      title: 'Cloud & DevOps',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
      ),
      skills: ['AWS Services', 'Docker', 'CI/CD Pipelines', 'Linux', 'Vercel']
    }
  ];

  return (
    <section id="experience" className="container">
      <div className="section-header">
        <h2 className="section-title">Technical Arsenal</h2>
        <p className="section-subtitle">Technologies I interact with on a daily basis.</p>
      </div>
      <div className="skills-grid">
        {skillset.map((cat, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-icon">{cat.icon}</div>
            <h3>{cat.title}</h3>
            <div className="skill-list">
              {cat.skills.map((skill, i) => (
                <span className="skill-tag" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'DevScale Dashboard',
      desc: 'An analytics dashboard for engineering velocity. Built using React, Node.js and highly optimized PostgreSQL queries for real-time charting over thousands of data points.',
      tech: ['React', 'Node.js', 'Chart.js'],
      link: '#',
      github: '#'
    },
    {
      title: 'EventFlow Serverless API',
      desc: 'A high-throughput event processing system securely engineered using AWS event-driven paradigms matching large-scale system constraints.',
      tech: ['AWS API Gateway', 'Lambda', 'DynamoDB'],
      link: '#',
      github: '#'
    },
    {
      title: 'AI Companion Interface',
      desc: 'A minimal, accessible UI wrapper around modern large language models, featuring a fully realtime streaming interface and conversation history caching.',
      tech: ['Next.js', 'TypeScript', 'Redis'],
      link: '#',
      github: '#'
    },
    {
      title: 'Microservices Payment Gateway',
      desc: 'An isolated payment processor proxy mapping internal billing events to Stripe APIs, ensuring reliable transaction states.',
      tech: ['Node.js', 'Stripe API', 'PostgreSQL'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="container">
      <div className="section-header">
        <h2 className="section-title">Selected Works</h2>
        <p className="section-subtitle">A collection of things I've built recently.</p>
      </div>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-image-container">
              <div className="project-image-placeholder">&#123; {proj.title.split(' ')[0]} &#125;</div>
            </div>
            <div className="project-details">
              <h3 className="project-title">{proj.title}</h3>
              <div className="project-tech">
                {proj.tech.map((t, i) => <span key={i}>{t}</span>)}
              </div>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-links">
                <a href={proj.github} className="project-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  Source Code
                </a>
                <a href={proj.link} className="project-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-box">
        <h2>Let's build together.</h2>
        <p>
          I am always open to discussing new projects, creative ideas or engineering architecture discussions.
          Send me an email and let's turn vision into reality.
        </p>
        <a href="mailto:contact@sandeep.com" className="btn btn-primary">Say Hello &rarr;</a>
      </div>
    </section>
  );
};

function App() {
  return (
    <>
      <div className="bg-grid"></div>
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer>
        <p>Built with React + Vite &middot; Designed by Sandeep</p>
      </footer>
    </>
  );
}

export default App;
