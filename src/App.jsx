import { useState, useEffect } from 'react';
import './styles/index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';
import Academic from './pages/Academic';
import Organizer from './pages/Organizer';
import Lectures from './pages/Lectures';
import DoubtZone from './pages/DoubtZone';
import Suggestions from './pages/Suggestions';
import Gate from './pages/Gate';
import WhatsApp from './pages/WhatsApp';
import Telegram from './pages/Telegram';
import PYQ from './pages/PYQ';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || '0';
    setTheme(Number(savedTheme));
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', String(newTheme));
    document.body.setAttribute('data-theme', newTheme);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'team':
        return <Team />;
      case 'academic':
        return <Academic />;
      case 'pyq':
        return <PYQ />;
      case 'organizer':
        return <Organizer />;
      case 'lectures':
        return <Lectures />;
      case 'doubt':
        return <DoubtZone />;
      case 'suggestions':
        return <Suggestions />;
      case 'whatsapp':
        return <WhatsApp />;
      case 'telegram':
        return <Telegram />;
      case 'gate':
        return <Gate />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} onThemeChange={handleThemeChange} />
      {renderPage()}
    </div>
  );
}
