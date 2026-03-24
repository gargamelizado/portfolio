import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';
import Project from '../components/Project/Project.jsx';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}
