import './App.css';
import React from 'react'
import Navbar from './components/sidebar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Stats from './pages/Stats';
import Config from './pages/Config';
import MapView from './components/MapView.js';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </Router>

  );
}

export default App;
/*

*/