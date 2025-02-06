import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Instagram from './pages/works/instagram.js';
import Artbook from './pages/works/artbook.js';
import Pawlert from './pages/works/pawlert.js';

import { LoadingProvider } from "./components/LoadingContext";
import LoadingScreen from "./components/LoadingScreen";

// new
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Archive from './pages/Archive';

import NavBar from './components/NavBar';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // This will scroll to the top every time the route changes
    window.scrollTo({ top: 0 });
  }, [location]); // Depend on location to trigger when the route changes

  return null;
}

function App() {
  return (
    <>
    <LoadingProvider>
      <LoadingScreen />
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/artbook" element={<Artbook />} />
        <Route path="/pawlert" element={<Pawlert />} />
      </Routes>
      </LoadingProvider>
    </>
  );
}

export default App;
