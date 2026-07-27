import React from 'react';

const MobileHeader = () => (
  <header className="mobile-header">
    <span className="mobile-title">Sunset Sips</span>
    <div className="mobile-header-actions">
      <button className="icon-btn">
        <span className="material-symbols-outlined">search</span>
      </button>
      <div className="avatar">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsYD8VYW01ATm_2m1a2uMJtKSCpZE6QEY7m3Ryn9n0mLFGK_ZZJVnr2eq-mkE7_Tf9Eo9x-cVYB8vMC-2AUroOXmMJ4j-Mt-BIEItV7KYb9bykK7qYU2JoKKS6tOk8nTRhBk31NKWFwLkpx9ePpVljV-MK5NG9Y79rYtiNWP9LgfMV3Ak31jcXRZQyUgs2YSly94OIzFNPA1IhTs4cXdB9vkgmEgBkK_A5G68x1YI5ocnEFHMs0_9FT7HQZUTfZSjzT1Ilmw80MtJD" alt="User" />
      </div>
    </div>
  </header>
);

export default MobileHeader;
