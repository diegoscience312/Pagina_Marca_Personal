import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import App from './App.jsx'
import Comunidad from './pages/Comunidad.jsx'
import Asesoria from './pages/Asesoria.jsx'
import './index.css'

// Carga diferida: la página de guías (y la librería del visor PDF) solo se
// descarga cuando alguien visita /guias, manteniendo ligero el home.
const Guias = lazy(() => import('./pages/Guias.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/asesoria" element={<Asesoria />} />
        <Route
          path="/guias"
          element={
            <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
              <Guias />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>,
)
