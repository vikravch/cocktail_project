import React from 'react';
import MobileNavItem from "./MobileNavItem.tsx";

const MobileBottomNav: React.FC = () => (
  <nav className="mobile-bottom-nav">
    <MobileNavItem categoryText={"favorite"} categoryTitle={"Favorites"} isActive={true}/>
    {/*<div className={"mobile-nav-item active"}>
      <span className="material-symbols-outlined fill">explore</span>
      <span>Discovery</span>
    </div>*/}
    <MobileNavItem categoryText={"favorite"} categoryTitle={"Favorites"}/>
    {/*<div className="mobile-nav-item">
      <span className="material-symbols-outlined">favorite</span>
      <span>Favorites</span>
    </div>*/}
      <MobileNavItem categoryText={"liquor"} categoryTitle={"Cabinet"}/>
    {/*<div className="mobile-nav-item">
      <span className="material-symbols-outlined">liquor</span>
      <span>Cabinet</span>
    </div>*/}
    <div className="mobile-nav-item">
      <span className="material-symbols-outlined">local_bar</span>
      <span>Mixology</span>
    </div>
  </nav>
);

export default MobileBottomNav;
