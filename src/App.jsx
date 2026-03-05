import React, { useState } from 'react';
import './index.css';
import profilePic from './assets/profile.png';

const App = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
  };

  const navTabs = ['Overview', 'Instances (Projects)', 'Compute (Skills)', 'Contact Details'];

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>

      {/* Global Navigation Bar */}
      <nav className="global-nav">
        <div className="global-nav-left">
          <div className="aws-logo">
            aws <span className="aws-logo-smile">⌣</span>
          </div>
          <div className="nav-item">Services</div>
          <div className="search-bar">🔍 Search for services, features, blogs, docs, and more...</div>
        </div>

        <div className="global-nav-right">
          <div className="nav-item shell-icon">&gt;_</div>
          <div className="nav-item bell-icon">🔔</div>
          <div className="nav-item">sandeep-cloud-admin</div>
          <div className="nav-item">Global</div>
          <div className="nav-item">Support</div>
          <span onClick={toggleTheme} className="nav-item" style={{ cursor: 'pointer' }}>
            {darkMode ? '☀️' : '🌙'}
          </span>
        </div>
      </nav>

      {/* Service Header */}
      <div className="service-nav">
        Amazon Portfolio Service (APS)
      </div>

      <div className="main-wrapper">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-heading">APS Management</div>
          <ul className="sidebar-menu">
            {navTabs.map(tab => (
              <li key={tab} className={`sidebar-item ${activeTab === tab ? 'active' : ''}`}>
                <a href={`#${tab.split(' ')[0]}`} onClick={(e) => { e.preventDefault(); setActiveTab(tab); }}>{tab}</a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Area */}
        <main className="content-area">
          <div className="page-header">
            <div>
              <h1 className="page-title">{activeTab.split(' ')[0]} dashboard</h1>
              <p className="page-subtitle">Manage your Fullstack engineering resources and deployments.</p>
            </div>
            <div>
              <button className="aws-btn" style={{ marginRight: '0.5rem' }}>Actions ▼</button>
              <button className="aws-btn aws-btn-primary">Launch instance</button>
            </div>
          </div>

          {activeTab === 'Overview' && (
            <div className="aws-panel" id="Overview">
              <div className="aws-panel-header">Engineer Resource details</div>
              <div className="aws-panel-body">
                <div className="profile-grid">
                  <div>
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                  </div>
                  <div className="profile-details">
                    <p>
                      <strong>Sandeep — Fullstack Engineering Architect</strong><br />
                      Providing scalable web application development, cloud deployment orchestration, and seamless frontend integrations.
                    </p>
                    <div className="prop-grid">
                      <div>
                        <div className="prop-label">Instance state</div>
                        <div className="prop-value status-badge">Running</div>
                      </div>
                      <div>
                        <div className="prop-label">Instance type</div>
                        <div className="prop-value aws-link">t3.large-developer</div>
                      </div>
                      <div>
                        <div className="prop-label">Location (Region)</div>
                        <div className="prop-value">ap-south-1 (Remote)</div>
                      </div>
                      <div>
                        <div className="prop-label">IAM Role</div>
                        <div className="prop-value aws-link">AdminFullAccess</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Compute (Skills)' && (
            <div className="aws-panel" id="Compute">
              <div className="aws-panel-header">Deployed Tech Stack details</div>
              <div className="aws-panel-body">
                <p style={{ marginBottom: '1.5rem', color: 'var(--aws-text)' }}>
                  The following technology services are actively configured across development environments.
                </p>
                <div className="prop-grid">
                  <div>
                    <div className="prop-label">Frontend Capabilities</div>
                    <div className="prop-value">
                      <span className="resource-tag">React.js</span>
                      <span className="resource-tag">Next.js</span>
                      <span className="resource-tag">TypeScript</span>
                      <span className="resource-tag">Redux</span>
                      <span className="resource-tag">TailwindCSS</span>
                    </div>
                  </div>
                  <div>
                    <div className="prop-label">Backend Architecture</div>
                    <div className="prop-value">
                      <span className="resource-tag">Node.js</span>
                      <span className="resource-tag">Express.js</span>
                      <span className="resource-tag">PostgreSQL</span>
                      <span className="resource-tag">MongoDB</span>
                      <span className="resource-tag">GraphQL</span>
                    </div>
                  </div>
                  <div>
                    <div className="prop-label">Cloud Infrastructure</div>
                    <div className="prop-value">
                      <span className="resource-tag">AWS Lambda</span>
                      <span className="resource-tag">API Gateway</span>
                      <span className="resource-tag">S3</span>
                      <span className="resource-tag">DynamoDB</span>
                      <span className="resource-tag">EC2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Instances (Projects)' && (
            <div className="aws-panel" id="Instances">
              <div className="aws-panel-header">Running Projects (3)</div>

              <table className="aws-table">
                <thead>
                  <tr>
                    <th style={{ width: '30px' }}><input type="checkbox" /></th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Type / Stack</th>
                    <th>Public IPv4 / Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td><a href="#" className="aws-link">DevScale-Monitoring-Dashboard</a></td>
                    <td><span className="status-badge">Running</span></td>
                    <td>React, Node, Postgres</td>
                    <td><a href="#" className="aws-link">View Source</a></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td><a href="#" className="aws-link">Serverless-Event-API-Gateway</a></td>
                    <td><span className="status-badge">Running</span></td>
                    <td>AWS Step Functions</td>
                    <td><a href="#" className="aws-link">View Source</a></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td><a href="#" className="aws-link">Neural-Chat-LLM-Interface</a></td>
                    <td><span className="status-badge">Running</span></td>
                    <td>Next.js, Redis CACHE</td>
                    <td><a href="#" className="aws-link">View Source</a></td>
                  </tr>
                </tbody>
              </table>
              <div style={{ padding: '1rem', borderTop: '1px solid var(--aws-border)' }}>
                <button className="aws-btn aws-btn-primary">View all resource groups</button>
              </div>
            </div>
          )}

          {activeTab === 'Contact Details' && (
            <div className="aws-panel" id="Contact">
              <div className="aws-panel-header">Contact Information & Support</div>
              <div className="aws-panel-body">
                <p style={{ marginBottom: '1rem' }}>
                  Open a new technical support ticket or initiate a direct connection protocol to discuss opportunities.
                </p>
                <div className="prop-grid" style={{ marginBottom: '2rem' }}>
                  <div>
                    <div className="prop-label">Primary Email / Initial Contact</div>
                    <div className="prop-value"><a href="mailto:hello@sandeepcloud.com" className="aws-link">hello@sandeepcloud.com</a></div>
                  </div>
                  <div>
                    <div className="prop-label">GitHub Repository Link</div>
                    <div className="prop-value"><a href="#" className="aws-link">github.com/sandeep</a></div>
                  </div>
                </div>
                <button className="aws-btn aws-btn-primary">Create Support Case</button>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default App;
