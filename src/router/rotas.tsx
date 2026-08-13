/**
 * Roteamento da SPA (BrowserRouter).
 *
 * - `/` — landing completa (Hero … Footer) via <Home />
 * - `/projects` — só a grade de projetos
 * - `*` — página 404 controlada
 *
 * <Layout> mantém o Header; <Outlet> renderiza Home ou Project.
 *
 */   
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import Project from '../components/Project/Project';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import NotFound from '../components/NotFound/NotFound';
// import TypeScriptExample from '../components/TypeScriptExample/TypeScriptExample.tsx';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          {/*
            <Route
              path="/typescript-demo"
              element={
                <TypeScriptExample />
              }
            />
          */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
