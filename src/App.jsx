import React, { useState, useEffect } from 'react';
import './index.css';
import profilePic from './assets/profile1.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-content">
        <a href="#" className="logo">Sandeep Guduri</a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="about" className="hero container">
      <div className="hero-text">
        <h1 className="hero-title">Building clean, modern web applications.</h1>
        <p className="hero-desc">
          Hi, I'm Sandeep. I'm a Fullstack Engineer specializing in Node.js, React, and cloud infrastructure. I focus on creating fast, accessible, and scalable digital experiences.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">View my work</a>
          <div className="social-links" style={{ marginTop: 0 }}>
            <a href="https://www.linkedin.com/in/sandeep-guduri/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://naukri.com/" target="_blank" rel="noopener noreferrer" className="social-link">Naukri</a>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={profilePic} alt="Sandeep" className="hero-image" />
      </div>
    </section>
  );
};

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      tags: ["React.js", "Next.js", "TypeScript", "Bootstrap css", "Redux"]
    },
    {
      title: "Backend Engineering",
      tags: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "GraphQL"]
    },
    {
      title: "Cloud & DevOps",
      tags: ["AWS", "Api Gateway", "CI/CD", "Linux", "Serverless"]
    }
  ];

  return (
    <section id="skills" className="container">
      <h2 className="section-title">Technical Expertise</h2>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.tags.map((tag, i) => (
                <span className="skill-tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "System Analysis (Senior Full Stack Engineer)",
      company: "DAZN",
      duration: "Jul 2025 - Dec 2025",
      desc: "Developed and architected full-stack solutions with a strong focus on cloud integration. Key skills utilized: React.js, Node.js, AWS Lambda, Amazon SQS, and EventBridge.",
    },
    {
      role: "Senior Software Engineer",
      company: "ValueLabs",
      duration: "Jul 2023 - Jul 2025",
      desc: "Specialized in delivering robust enterprise solutions leveraging the MEAN stack and AWS Cloud Services. Architected highly scalable server environments.",
    },
    {
      role: "Software Engineer",
      company: "Centific",
      duration: "Jun 2022 - Jul 2023",
      desc: "Built scalable frontend and API interfaces utilizing Apollo GraphQL and Bootstrap. Streamlined development workflows across cross-functional engineering teams.",
    },
    {
      role: "Software Developer",
      company: "UMDAA Health Care",
      duration: "Aug 2019 - Jun 2022",
      desc: "Engineered critical healthcare data management infrastructure using Node.js and MySQL. Optimized database queries and constructed high-throughput API endpoints.",
    },
    {
      role: "Executive",
      company: "TeamLease Services Limited",
      duration: "Nov 2015 - Jul 2019",
      desc: "Developed client and server software for web-based internal tools used for network monitoring. Implemented features for assigning IP addresses, network security configuration, and network planning.",
    }
  ];

  return (
    <section id="experience" className="container">
      <h2 className="section-title">Work Experience</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {experiences.map((exp, idx) => (
          <div key={idx} style={{ borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem' }}>{exp.role}</h3>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.75rem', fontWeight: '500' }}>
              {exp.company} &bull; {exp.duration}
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projectData = [
    {
      title: "Serverless Event Mesh (AWS Architecture)",
      desc: "Architected an event-driven microservices platform utilizing AWS Lambda, Amazon SQS, and EventBridge. Designed to decouple order processing and inventory management, scaling automatically to handle 10x traffic spikes with zero downtime.",
      links: [{ label: "Architecture Specs", url: "#" }, { label: "GitHub", url: "#" }]
    },
    {
      title: "Real-time Telemetry Dashboard",
      desc: "Engineered a high-throughput monitoring dashboard processing 10k+ events/sec. Utilized React with WebSockets for the frontend and a Node.js/Redis caching layer for real-time ingestion, reducing data latency by 45%.",
      links: [{ label: "Live Demo", url: "#" }, { label: "GitHub", url: "#" }]
    },
    {
      title: "Healthcare Provider Portal (MEAN Stack)",
      desc: "Developed a comprehensive patient management API and responsive UI utilizing the MEAN stack. Integrated secure, HIPAA-compliant endpoints with MongoDB, resulting in a 30% increase in clinic operational efficiency.",
      links: [{ label: "Case Study", url: "#" }, { label: "GitHub", url: "#" }]
    },
    {
      title: "GraphQL Apollo Integration Layer",
      desc: "Spearheaded the migration of legacy REST APIs to a unified Apollo GraphQL federated schema for a major client. Streamlined frontend data fetching, yielding a 50% decrease in network payloads for mobile and web clients.",
      links: [{ label: "Documentation", url: "#" }, { label: "GitHub", url: "#" }]
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Selected Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div style={{ height: '180px', background: 'var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              Project Image
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-links">
                {project.links.map((link, i) => (
                  <a href={link.url} className="project-link" key={i}>{link.label}</a>
                ))}
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
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get in touch</h2>
        <p>I am currently open to new opportunities. Let's build something great together.</p>
        <a href="mailto:gudurisandeep999@gmail.com" className="btn btn-primary">Send an Email</a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Sandeep Guduri. Designed with simplicity.</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
