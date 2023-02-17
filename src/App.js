import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import PokeInfo from './pages/pokeInfo';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/pokemon/:id" element={<PokeInfo />} />;
        </Routes>
      </Router>
    </>
  );
}
