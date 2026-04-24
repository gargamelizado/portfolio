/**
 * Roteamento da SPA (BrowserRouter).
 *
 * - `/` — landing completa (Hero … Footer) via <Home />
 * - `/projects` — só a grade de projetos
 * - `*` — redireciona para `/`
 *
 * <Layout> mantém o Header; <Outlet> renderiza Home ou Project.
 *
 * Exemplo futuro: /projects/:slug com useParams().
 */   
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import Home from '../components/Home/Home.jsx';
import Project from '../components/Project/Project.jsx';
// import TypeScriptExample from '../components/TypeScriptExample/TypeScriptExample.tsx';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          {/*
            <Route
              path="/typescript-demo"
              element={
                <TypeScriptExample />
              }
            />
          */}
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
