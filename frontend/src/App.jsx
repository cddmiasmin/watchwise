import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Franchises from "./pages/Franchises";
import Search from "./pages/Search";
import Log from "./pages/Log";
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie" element={<Movie />} />
      <Route path="search" element={<Search />} />
      <Route path="log" element={<Log />} />
      <Route path="franchise" element={<Franchises />} />
    </Routes>
  );
}

export default App
