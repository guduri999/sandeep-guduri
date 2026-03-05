import React, { useEffect, useState } from 'react';
import './index.css';
import profilePic from './assets/profile.png';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="logo-stamp">SYS_CORE_V1</div>
      <div className="nav-line">
        <a href="#init" className="nav-btn" data-tip="Init()"><span className="mono">[0]</span></a>
        <a href="#skills" className="nav-btn" data-tip="Skills()"><span className="mono">[1]</span></a>
        <a href="#work" className="nav-btn" data-tip="Projects()"><span className="mono">[2]</span></a>
        <a href="#comms" className="nav-btn" data-tip="CommLink()"><span className="mono">[3]</span></a>
      </div>
    </nav>
  );
};

const GlitchText = ({ text }) => {
  return (
    <div className="glitch-wrapper">
      <h1 className="glitch" data-text={text}>{text}</h1>
    </div>
  );
};

const MainView = () => {
  return (
    <main className="main-view">
      <div className="bento-grid">

        {/* PANEL: HERO */}
        <div className="panel panel-hero" id="init">
          <div className="hero-text-content">
            <div className="sys-status">
              <span>&#x25A0;</span> SYS.ONLINE // CONNECTION SECURED
            </div>
            <div>
              <span className="mono" style={{ color: 'var(--cyber-blue)', fontSize: '1.2rem' }}>&gt; hello_world()</span>
            </div>
            <GlitchText text="SANDEEP" />
            <h2 className="mono" style={{ color: 'var(--cyber-pink)', marginTop: '0.5rem', fontSize: '2rem' }}>.DEV</h2>
            <p className="hero-sub">
              Fullstack Architect. Constructing digital realities in Node.js, React, and AWS.
              Bridging the gap between raw data streams and human interfaces.
            </p>
          </div>

          <div className="profile-scan">
            <div className="scanner-line"></div>
            <img src={profilePic} alt="Sandeep Avatar" />
            <div className="scan-data">
              <div>BIO_METRICS: VERIFIED</div>
              <div>AUTH_LVL: OMEGA</div>
              <div>LOC: CLOUD_SECTOR_7</div>
            </div>
          </div>
        </div>

        {/* PANEL: SKILLS TERMINAL */}
        <div className="panel panel-skills" id="skills">
          <div className="panel-header">
            <span>TERMINAL.exe</span>
            <span className="icon">&#9881;</span>
          </div>
          <div className="terminal-block">
            <div className="cmd-line">
              <span className="prompt">sandeep@host:~$</span>
              <span className="cmd">npm show stack --frontend</span>
            </div>
            <div className="skill-output">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Tailwind</span>
              <span className="skill-tag">Redux</span>
            </div>

            <div className="cmd-line">
              <span className="prompt">sandeep@host:~$</span>
              <span className="cmd">npm show stack --backend</span>
            </div>
            <div className="skill-output">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">GraphQL</span>
            </div>

            <div className="cmd-line">
              <span className="prompt">sandeep@host:~$</span>
              <span className="cmd">aws configure get core</span>
            </div>
            <div className="skill-output">
              <span className="skill-tag">Lambda</span>
              <span className="skill-tag">EC2</span>
              <span className="skill-tag">DynamoDB</span>
              <span className="skill-tag">S3</span>
              <span className="skill-tag">Docker</span>
            </div>

            <div className="cmd-line">
              <span className="prompt">sandeep@host:~$</span><span className="cmd" style={{ animation: 'blink 1s infinite' }}>_</span>
            </div>
          </div>
        </div>

        {/* PANEL: PROJECT 1 */}
        <div className="panel panel-project proj-1" id="work">
          <div className="panel-header" style={{ border: 'none', marginBottom: 0 }}>
            <span className="mono" style={{ color: 'var(--text-dim)' }}>// 01 ARCHIVE</span>
          </div>
          <h3 className="proj-title">DevScale Engine</h3>
          <p className="proj-desc">
            A high-performance analytics dashboard for engineering teams. Processes millions of metric points through a custom-built data pipeline and visualizes them natively.
          </p>
          <div className="tech-stack">
            <span>[ React ]</span>
            <span>[ Node.js ]</span>
            <span>[ PostgreSQL ]</span>
          </div>
          <div className="proj-links">
            <a href="#" className="proj-btn">DEMO.exe</a>
            <a href="#" className="proj-btn">SRC_CODE</a>
          </div>
        </div>

        {/* PANEL: PROJECT 2 */}
        <div className="panel panel-project proj-2">
          <div className="panel-header" style={{ border: 'none', marginBottom: 0 }}>
            <span className="mono" style={{ color: 'var(--text-dim)' }}>// 02 ARCHIVE</span>
          </div>
          <h3 className="proj-title">EventFlow API</h3>
          <p className="proj-desc">
            Serverless architecture built heavily on AWS event-driven patterns. Handles secure transactional webhooks at massive scale without dropping packets.
          </p>
          <div className="tech-stack">
            <span>[ API Gateway ]</span>
            <span>[ Lambda ]</span>
          </div>
          <div className="proj-links">
            <a href="#" className="proj-btn">DEMO.exe</a>
            <a href="#" className="proj-btn">SRC_CODE</a>
          </div>
        </div>

        {/* PANEL: PROJECT 3 */}
        <div className="panel panel-project proj-3">
          <div className="panel-header" style={{ border: 'none', marginBottom: 0 }}>
            <span className="mono" style={{ color: 'var(--text-dim)' }}>// 03 ARCHIVE</span>
          </div>
          <h3 className="proj-title">Neural Chat UI</h3>
          <p className="proj-desc">
            A completely accessible wrapper around LLMs with real-time websocket streaming, caching, and chat history utilizing a slick, minimal frontend.
          </p>
          <div className="tech-stack">
            <span>[ TypeScript ]</span>
            <span>[ Next.js ]</span>
            <span>[ Redis ]</span>
          </div>
          <div className="proj-links">
            <a href="#" className="proj-btn">DEMO.exe</a>
            <a href="#" className="proj-btn">SRC_CODE</a>
          </div>
        </div>

        {/* PANEL: CONTACT */}
        <div className="panel panel-contact" id="comms">
          <div className="contact-headline mono text-gradient">ESTABLISH_UPLINK()</div>
          <p style={{ color: 'var(--text-dim)', maxWidth: '500px' }}>
            Seeking new engineering challenges or architecture discussions? Open a secure transmission line directly to my inbox.
          </p>
          <a href="mailto:contact@sandeep-dev.com" className="btn-large">TRANSMIT_DATA</a>
        </div>

      </div>
    </main>
  );
};

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <MainView />
    </div>
  );
}

export default App;
