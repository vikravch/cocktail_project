import React from 'react';

const MobileBottomNav = () => (
  <nav className="mobile-bottom-nav">
    <div className="mobile-nav-item active">
      <span className="material-symbols-outlined fill">explore</span>
      <span>Discovery</span>
    </div>
    <div className="mobile-nav-item">
      <span className="material-symbols-outlined">favorite</span>
      <span>Favorites</span>
    </div>
    <div className="mobile-nav-item">
      <span className="material-symbols-outlined">liquor</span>
      <span>Cabinet</span>
    </div>
    <div className="mobile-nav-item">
      <span className="material-symbols-outlined">local_bar</span>
      <span>Mixology</span>
    </div>
  </nav>
);

export default MobileBottomNav;
