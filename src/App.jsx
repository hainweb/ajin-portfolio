import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/HomePage';

import './App.css';
import Loader from './components/loader/Loader';
import ResumePage from './pages/ResumePage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);

      fetch('https://hain-analytics-backend.onrender.com/api/analytics/log', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ platform: 'portfolio' }),
  }).catch(err => console.error('Logging API error:', err));

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-gray-00'>
      {loading ? (
        <Loader /> // Show the loader while loading
      ) : (
        <Router>
          <Header onScroll={handleScroll} />
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
            <Footer />
            <ChatBot />
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
