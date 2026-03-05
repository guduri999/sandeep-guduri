import React, { useState, useEffect } from 'react';
import './index.css';
import profilePic from './assets/profile.png';

const SysHeader = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setTime(d.toISOString().split('T')[1].split('.')[0]);
    };
    updateTime();
    const int = setInterval(updateTime, 1000);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="sys-header">
      <div>
        [ <span className="green">root@server</span> /home/sandeep ]
      </div>
      <div className="sys-nav">
        <a href="#sys-info">SYS_INFO</a>
        <a href="#sys-htop">SYS_RESOURCES</a>
        <a href="#sys-dir">SYS_DIR</a>
        <a href="#sys-mail">SYS_MAIL</a>
      </div>
      <div>
        UPTIME: 99.9% | CLOCK: {time} | LOAD: 0.14 0.12 0.08
      </div>
    </div>
  );
};

const SysHero = () => (
  <div className="panel" id="sys-info">
    <div className="panel-title">
      <span>/var/log/sysinfo.log</span>
      <span>chmod 644</span>
    </div>
    <div className="panel-content hero-grid">
      <div className="hero-info">
        <div className="sys-logs">
          <div className="log-line"><span className="time">[14:00:23]</span> INIT: Starting Fullstack_Engineer_Daemon... [OK]</div>
          <div className="log-line"><span className="time">[14:00:24]</span> LOAD: Fetching profile module... [OK]</div>
          <div className="log-line"><span className="time">[14:00:25]</span> NET: Establishing connection to frontend... [OK]</div>
        </div>
        <h1>
          export USER="<span>Sandeep</span>"<br />
          export ROLE="<span>Fullstack Engineer</span>"
        </h1>
        <p style={{ color: 'var(--sys-muted)', marginTop: '1rem' }}>
          /* Primary directive: Architect scalable Node.js clusters & React dashboards. <br />
          Location: Cloud Sector (Remote). <br />
          Status: Available for HTTP traffic. */
        </p>
      </div>
      <div className="profile-img-container">
        <img src={profilePic} alt="sys_admin_avatar" />
      </div>
    </div>
  </div>
);

const SysHtop = () => {
  const bars = [
    { label: 'CPU 1 (React)', cls: 'cpu-1', pct: '95.0%' },
    { label: 'CPU 2 (Node)', cls: 'cpu-2', pct: '88.3%' },
    { label: 'CPU 3 (AWS)', cls: 'cpu-3', pct: '92.1%' },
    { label: 'CPU 4 (SQL)', cls: 'cpu-4', pct: '85.4%' },
    { label: 'CPU 5 (Vite)', cls: 'cpu-5', pct: '90.0%' },
    { label: 'CPU 6 (Docker)', cls: 'cpu-6', pct: '80.2%' },
  ];

  return (
    <div className="panel" id="sys-htop">
      <div className="panel-title">
        <span>htop - resource monitor</span>
        <span>Tasks: 42, 1 thr, 110 kthr</span>
      </div>
      <div className="panel-content htop-grid">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {bars.slice(0, 3).map((b, i) => (
            <div className="htop-bar" key={i}>
              <div className="bar-label">{b.label}</div>
              <div className="bar-track"><div className={`bar-fill ${b.cls}`}></div></div>
              <div className="bar-pct">{b.pct}</div>
            </div>
          ))}
          <div style={{ marginTop: '1rem', color: 'var(--sys-muted)' }}>
            Mem[|||||||||||||||||||      16.2G/32.0G]<br />
            Swp[|                        0K/2.00G]
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {bars.slice(3, 6).map((b, i) => (
            <div className="htop-bar" key={i}>
              <div className="bar-label">{b.label}</div>
              <div className="bar-track"><div className={`bar-fill ${b.cls}`}></div></div>
              <div className="bar-pct">{b.pct}</div>
            </div>
          ))}
          <div style={{ marginTop: '1rem', color: 'var(--sys-muted)' }}>
            Uptime: 14 days, 03:22:12<br />
            Load average: 0.14 0.12 0.08
          </div>
        </div>
      </div>
    </div>
  );
};

const SysDir = () => {
  const projects = [
    { perm: 'drwxr-xr-x', name: 'DevScale_Dashboard', size: '4.2K', desc: 'Real-time analytics dashboard rendering millions of rows natively. Tech: React, D3, Postgres', link: '#' },
    { perm: 'drwxrwxr-x', name: 'EventFlow_API', size: '12K', desc: 'AWS Serverless API gateway handling robust transactional webhooks.', link: '#' },
    { perm: 'drw-r--r--', name: 'Neural_Chat_UI', size: '8.1K', desc: 'Websocket-enabled frontend wrapper for raw LLMs with strict Redis caching layers.', link: '#' }
  ];

  return (
    <div className="panel" id="sys-dir">
      <div className="panel-title">
        <span>ls -la /home/sandeep/projects</span>
        <span>total 32</span>
      </div>
      <div className="panel-content dir-list">
        <div className="dir-item">
          <div className="dir-perms">drwxr-xr-x</div>
          <div className="dir-name" style={{ color: "var(--sys-text)" }}>..</div>
          <div className="dir-meta">root root <span style={{ marginLeft: '2rem' }}>4096</span></div>
        </div>

        {projects.map((p, i) => (
          <div className="dir-item" key={i}>
            <div className="dir-perms">{p.perm}</div>
            <div className="dir-name">{p.name}</div>
            <div className="dir-meta">sandeep users <span style={{ marginLeft: '1.5rem' }}>{p.size}</span></div>
            <div className="dir-desc">{p.desc}</div>
            <a href={p.link} className="btn-sys">./execute</a>
          </div>
        ))}
      </div>
    </div>
  );
};

const SysMail = () => {
  return (
    <div className="panel" id="sys-mail">
      <div className="panel-title">
        <span>mailx - send messages</span>
        <span>SMTP: ssl/tls</span>
      </div>
      <div className="panel-content" style={{ display: 'flex', justifyContent: 'center', padding: '3rem 1rem' }}>
        <div className="contact-form">
          <div style={{ marginBottom: '1rem', color: 'var(--sys-muted)' }}>
            -- Execute mail daemon to contact sandeep --
          </div>
          <div className="input-line">
            <span>To:</span>
            <input type="text" className="sys-input" value="contact@sandeep.com" disabled />
          </div>
          <div className="input-line">
            <span>From_Email:</span>
            <input type="text" className="sys-input" placeholder="enter_your_email@domain.com" />
          </div>
          <div className="input-line">
            <span>Subject:</span>
            <input type="text" className="sys-input" placeholder="enter_subject_string" />
          </div>
          <button className="btn-action">SEND_PACKET &gt;&gt;</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="layout">
      <SysHeader />
      <SysHero />
      <SysHtop />
      <SysDir />
      <SysMail />
      <div style={{ textAlign: 'center', color: 'var(--sys-muted)', fontSize: '0.8rem', marginTop: '1rem' }}>
        System daemon built with React + Vite. All systems nominal.
      </div>
    </div>
  );
};

export default App;
