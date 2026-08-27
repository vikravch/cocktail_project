import React from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import ListPane from './components/ListPane';
import DetailPane from './components/DetailPane';
import MobileHeader from './components/MobileHeader';
import MobileBottomNav from './components/MobileBottomNav';

const App: React.FC = () => {
  return (
    <div className="layout-container">
      <MobileHeader />
      <Sidebar />
      <div className="main-content-scrollable">
        <ListPane />
        <DetailPane />
      </div>
      <MobileBottomNav />
    </div>
  );
}

export default App;
