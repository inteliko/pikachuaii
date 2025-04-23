import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';  // Ensure this points to your Home page
import Templates from './pages/Templates';  // Import the Templates page
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/campaigns" style={{ marginRight: '1rem' }}>Campaigns</Link>
        <Link to="/templates" style={{ marginRight: '1rem' }}>Templates</Link>
        <Link to="/replies">Replies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} /> {/* Add this route */}
        {/* Add other routes for Campaigns, etc. */}
      </Routes>
    </Router>
  );
};

export default App;
