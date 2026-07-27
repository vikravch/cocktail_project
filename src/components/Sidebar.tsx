import React from 'react';

const Sidebar = () => (
  <nav className="sidebar">
    <div className="brand">
      <div className="brand-icon">
        <span className="material-symbols-outlined fill">local_bar</span>
      </div>
      <div className="brand-text">
        <h1>Sunset Sips</h1>
        <p>Crafting Summer</p>
      </div>
    </div>
    <div className="nav-links">
      <a className="nav-link active">
        <span className="material-symbols-outlined fill">explore</span>
        <span>Discovery</span>
      </a>
      <a className="nav-link">
        <span className="material-symbols-outlined">favorite</span>
        <span>Favorites</span>
      </a>
      <a className="nav-link">
        <span className="material-symbols-outlined">liquor</span>
        <span>My Cabinet</span>
      </a>
      <a className="nav-link">
        <span className="material-symbols-outlined">local_bar</span>
        <span>Mixology</span>
      </a>
    </div>
    <div className="nav-footer">
      <a className="nav-link">
        <span className="material-symbols-outlined">settings</span>
        <span>Settings</span>
      </a>
      <a className="nav-link">
        <span className="material-symbols-outlined">help</span>
        <span>Help</span>
      </a>
    </div>
  </nav>
);

export default Sidebar;
