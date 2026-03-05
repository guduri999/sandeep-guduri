import React, { useState, useEffect } from 'react';
import './index.css';
import profilePic from './assets/profile.png';

const nodesData = [
  { id: 'core', label: '10.0.0.1 (CORE-ROUTER)', icon: '⚡', x: 50, y: 50, title: 'Profile' },
  { id: 'skills', label: '10.0.0.2 (SKILLS-SWITCH)', icon: '⚙️', x: 20, y: 30, title: 'Compute' },
  { id: 'projects', label: '10.0.0.3 (PROJECT-CLUSTER)', icon: '🖥️', x: 80, y: 30, title: 'Deployments' },
  { id: 'contact', label: '10.0.0.254 (DMZ-GATEWAY)', icon: '🔒', x: 50, y: 80, title: 'External Comm' }
];

const paths = [
  { source: 'core', target: 'skills' },
  { source: 'core', target: 'projects' },
  { source: 'core', target: 'contact' },
];

const App = () => {
  const [activeNode, setActiveNode] = useState('core');
  const [logs, setLogs] = useState([
    { time: '00:00:00', text: 'INIT: Topology map initialized.', type: 'info' }
  ]);

  useEffect(() => {
    const d = new Date();
    const time = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
    setLogs(prev => [
      { time, text: `PING: Node ${activeNode.toUpperCase()} selected. 0ms packet loss.`, type: 'success' },
      ...prev
    ].slice(0, 20)); // Keep last 20 logs
  }, [activeNode]);

  // Calculate coordinates for SVG lines based on percentage
  const getLineCoords = (sourceId, targetId) => {
    const s = nodesData.find(n => n.id === sourceId);
    const t = nodesData.find(n => n.id === targetId);
    return { x1: `${s.x}%`, y1: `${s.y}%`, x2: `${t.x}%`, y2: `${t.y}%` };
  };

  const renderContent = () => {
    switch (activeNode) {
      case 'core':
        return (
          <>
            <img src={profilePic} alt="Sandeep" className="profile-img" />
            <br />
            <h3>Node Alias: Sandeep</h3>
            <p><strong>Uptime:</strong> ~4 Years Exp<br /><strong>Role:</strong> Fullstack Architect<br /><strong>Bandwidth:</strong> High availability.</p>
            <p style={{ color: "var(--net-text)" }}>
              Transmitting scalable infrastructure code and React applications globally. Specialized in resolving high-latency cloud architectures and optimizing front-end render trees.
            </p>
          </>
        );
      case 'skills':
        return (
          <>
            <h3>Compute Modules Loaded</h3>
            <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--net-text)', fontSize: '0.85rem' }}>Running diagnostic on installed packages...</p>

            <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--net-orange)' }}>Frontend Sub-systems</h4>
            <div>
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Redux</span>
            </div>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--net-orange)' }}>Backend Sub-systems</h4>
            <div>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">GraphQL</span>
            </div>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--net-orange)' }}>Cloud Infrastructure</h4>
            <div>
              <span className="tech-tag">AWS Lambda</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">VPC</span>
              <span className="tech-tag">CI/CD</span>
            </div>
          </>
        );
      case 'projects':
        return (
          <>
            <h3>Active Project Clusters</h3>

            <div className="project-box">
              <h4 style={{ color: 'var(--net-cyan)' }}>DevScale Telemetry UI</h4>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Processed millions of telemetry packets using a scalable React dashboard and Node.js ingestion pipeline.
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <span className="tech-tag">React</span><span className="tech-tag">Node.js</span>
              </div>
            </div>

            <div className="project-box">
              <h4 style={{ color: 'var(--net-cyan)' }}>Serverless API Mesh</h4>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                AWS driven web-hooks routing massive data payloads without packet delays. Highly scalable auto-scaling architecture.
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <span className="tech-tag">AWS Lambda</span><span className="tech-tag">DynamoDB</span>
              </div>
            </div>

            <div className="project-box">
              <h4 style={{ color: 'var(--net-cyan)' }}>LLM Chat Socket</h4>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Realtime bi-directional connection maintaining conversation history natively across the web layer limitlessly.
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <span className="tech-tag">WebSockets</span><span className="tech-tag">Next.js</span>
              </div>
            </div>
          </>
        );
      case 'contact':
        return (
          <>
            <h3>Establish External Connection</h3>
            <p>
              Secure communication line is open. Awaiting handshake protocol from external peers for new opportunities or architecture discussions.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ color: 'var(--net-blue)', marginBottom: '0.5rem' }}>Protocol: SMTP</h4>
              <p style={{ fontFamily: 'var(--font-mono)', background: 'rgba(0,0,0,0.5)', padding: '0.5rem', border: '1px solid var(--net-border)' }}>
                contact@sandeep.network
              </p>
            </div>

            <a href="mailto:contact@sandeep.network" className="btn-net">INITIATE HANDSHAKE</a>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="noc-dashboard">

      {/* Header */}
      <header className="noc-header">
        <div className="noc-title">
          <div className="pulsing-dot"></div>
          GLOBAL NET.MAP // SANDEEP_DEV
        </div>
        <div className="noc-stats">
          <div>LATENCY: <span className="stat-val">12ms</span></div>
          <div>PACKET LOSS: <span className="stat-val">0.00%</span></div>
          <div>STATUS: <span className="stat-val" style={{ color: 'var(--net-cyan)' }}>LINK UP</span></div>
        </div>
      </header>

      {/* Sidebar - Terminal/Logs */}
      <aside className="noc-sidebar">
        <div className="sidebar-title">System Event Viewer</div>
        <div className="log-container">
          {logs.map((log, i) => (
            <div key={i} className="log-entry">
              <span className="log-time">[{log.time}]</span>
              <span className={`log-msg ${log.type === 'success' ? 'success' : ''} ${log.type === 'info' ? 'highlight' : ''}`}>
                {log.text}
              </span>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Map Viewer */}
      <main className="network-map">

        {/* SVG Path Connections */}
        <svg className="network-svg">
          {paths.map((p, i) => {
            const coords = getLineCoords(p.source, p.target);
            const isActive = activeNode === p.source || activeNode === p.target;
            return (
              <line
                key={i}
                x1={coords.x1} y1={coords.y1}
                x2={coords.x2} y2={coords.y2}
                className={`net-line ${isActive ? 'active' : ''}`}
                style={{
                  animation: isActive ? 'dash-active 2s linear infinite' : 'dash 10s linear infinite'
                }}
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {nodesData.map((node) => (
          <div
            key={node.id}
            className={`net-node ${activeNode === node.id ? 'active' : ''}`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            onClick={() => setActiveNode(node.id)}
          >
            <div className="node-icon-wrapper">
              <div className="node-icon">{node.icon}</div>
            </div>
            <div className="node-label">{node.label}</div>
          </div>
        ))}

        {/* Info Panel corresponding to active node */}
        <div className="node-details">
          <div className="details-header">
            <div className="pulsing-dot" style={{ background: 'var(--net-cyan)', boxShadow: 'none' }}></div>
            <h2>NODE_DATA: {activeNode.toUpperCase()}</h2>
            <div style={{ flexGrow: 1 }}></div>
            <div className="details-badge">SECURE</div>
          </div>
          <div className="details-content">
            {renderContent()}
          </div>
        </div>

      </main>

    </div>
  );
};

export default App;
