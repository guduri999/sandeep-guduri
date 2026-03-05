import React, { useEffect, useState } from 'react';
import './index.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ background: scrolled ? 'rgba(5, 5, 5, 0.9)' : 'transparent', boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none' }}>
      <div className="container nav-content">
        <a href="#" className="logo">SE<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="container hero-content">
        <span className="hero-subtitle">Hi, my name is</span>
        <h1 className="hero-title">
          Sandeep
          <span>I build things for the web.</span>
        </h1>
        <p className="hero-description">
          I'm a Fullstack Engineer specializing in building exceptional digital experiences using Node.js, React.js, and AWS. Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Check out my works</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillset = [
    {
      category: 'Frontend',
      icon: '🎨',
      items: ['React.js', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'Tailwind', 'Framer Motion']
    },
    {
      category: 'Backend',
      icon: '⚙️',
      items: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
      category: 'Database & Cloud',
      icon: '☁️',
      items: ['AWS (Lambda, S3, EC2)', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'CI/CD']
    }
  ];

  return (
    <section id="skills" className="container">
      <h2 className="section-title">Technical Expertise</h2>
      <div className="skills-grid">
        {skillset.map((skill, idx) => (
          <div className="skill-category" key={idx}>
            <h3><span>{skill.icon}</span> {skill.category}</h3>
            <ul className="skill-list">
              {skill.items.map((item, i) => (
                <li className="skill-tag" key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      desc: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features secure payment integration, role-based access control, and an intuitive admin dashboard.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      title: 'Cloud Document Manager',
      desc: 'AWS-powered document management system enabling secure file uploads, versioning, and sharing. Built serverless with AWS Lambda and S3.',
      tech: ['AWS', 'React', 'Serverless', 'DynamoDB'],
      link: '#',
      github: '#'
    },
    {
      title: 'Real-time Collaboration Tool',
      desc: 'A collaborative workspace for remote teams supporting real-time messaging, document co-editing, and video calls.',
      tech: ['Node.js', 'Socket.io', 'React', 'WebRTC'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-image">
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `linear-gradient(45deg, rgba(0, 240, 255, 0.2), rgba(138, 43, 226, 0.2))` }} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{proj.title}</h3>
              <div className="project-tech">
                {proj.tech.map((t, i) => <span key={i}>{t}</span>)}
              </div>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-links">
                <a href={proj.github} className="project-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  GitHub
                </a>
                <a href={proj.link} className="project-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  Live Demo
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
    <section id="contact" className="container contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-desc">
        Although I'm not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a href="mailto:hello@example.com" className="btn btn-primary">Say Hello</a>
    </section>
  );
};

function App() {
  return (
    <>
      <div className="bg-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
      </div>
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer>
        <p>Built with React & Vanilla CSS.</p>
        <p>© {new Date().getFullYear()} Sandeep. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
