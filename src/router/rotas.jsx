import React from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';
import Project from '../components/Project/Project.jsx';
export default function rotas() {
  return (
    <BrowserRouter>
      
        <Route Component={Home} path="/" />
        <Route Component={Project} path="/projects" />
      
    </BrowserRouter>
  )
}
