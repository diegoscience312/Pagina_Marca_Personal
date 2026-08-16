import { useEffect, useMemo, useState, Suspense, lazy } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import { BlueprintBanner } from '../components/BlueprintCTA'
import { guias, categorias } from '../data/guias'

// El visor (react-pdf) se descarga solo cuando se abre una guía
const PdfViewer = lazy(() => import('../components/PdfViewer'))

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

function formatFecha(fecha) {
  try {
    return new Date(fecha + 'T00:00:00').toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return ''
  }
}

export default function Guias() {
  const { guiaId } = useParams()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [categoria, setCategoria] = useState('Todas')
  const [orden, setOrden] = useState('recientes') // 'recientes' | 'az'

  // La guía abierta se deriva de la URL (/guias/<id>), así el link es compartible.
  const guiaAbierta = useMemo(
    () => (guiaId ? guias.find((g) => g.id === guiaId) ?? null : null),
    [guiaId],
  )

  // Si la URL trae un id que no existe, regresa al listado.
  useEffect(() => {
    if (guiaId && !guiaAbierta) navigate('/guias', { replace: true })
  }, [guiaId, guiaAbierta, navigate])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const abrirGuia = (g) => {
    if (g.archivo) navigate(`/guias/${g.id}`)
    else if (g.url) window.open(g.url, '_blank', 'noopener,noreferrer')
  }

  const resultados = useMemo(() => {
    const q = query.trim().toLowerCase()
    let lista = guias.filter((g) => {
      const matchCat = categoria === 'Todas' || g.categoria === categoria
      const matchQuery =
        !q ||
        g.titulo.toLowerCase().includes(q) ||
        g.descripcion.toLowerCase().includes(q) ||
        g.categoria.toLowerCase().includes(q)
      return matchCat && matchQuery
    })

    lista = [...lista].sort((a, b) => {
      // Las destacadas (⭐ más virales) siempre primero
      if (Boolean(a.destacada) !== Boolean(b.destacada)) return a.destacada ? -1 : 1
      if (orden === 'az') return a.titulo.localeCompare(b.titulo, 'es')
      return new Date(b.fecha) - new Date(a.fecha)
    })

    return lista
  }, [query, categoria, orden])

  const filtros = ['Todas', ...categorias]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ overflowY: 'auto' }}>
      <ParticleBackground />

      {/* Ambient glows */}
      <div
        className="fixed top-0 left-0 w-[50vw] h-[50vh] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.07) 0%, transparent 60%)' }}
      />
      <div
        className="fixed bottom-0 right-0 w-[50vw] h-[50vh] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at 80% 80%, rgba(139,92,246,0.07) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-8">
        {/* Back */}
        <motion.button
          {...fadeUp(0)}
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors mb-6 cursor-pointer bg-transparent border-none"
        >
          ← Volver
        </motion.button>

        {/* CTA — Blueprint / captación de leads (arriba de todo) */}
        <div className="mb-6">
          <BlueprintBanner />
        </div>

        {/* Header */}
        <motion.div {...fadeUp(0.1)} className="text-center mb-7">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            <span className="mr-1.5">📚</span>
            <span className="text-gradient">Guías</span>
          </h1>
          <p className="text-white/50 text-sm mt-2">
            Busca, filtra y abre todas mis guías en un solo lugar.
          </p>
        </motion.div>

        {/* Buscador */}
        <motion.div {...fadeUp(0.15)} className="mb-4">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar guía por nombre o tema…"
              className="w-full rounded-xl bg-white/[0.04] border border-white/10 pl-11 pr-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-blue-400/50 focus:bg-white/[0.06] transition-all"
              style={{ backdropFilter: 'blur(8px)' }}
            />
            {/* La lupa va DESPUÉS del input y con z-10 para que el backdrop-blur del input no la difumine */}
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 z-10 w-4 h-4 text-white/40 pointer-events-none"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </motion.div>

        {/* Filtros + orden */}
        <motion.div {...fadeUp(0.2)} className="flex flex-col gap-3 mb-6">
          {/* Categorías */}
          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
            {filtros.map((cat) => {
              const active = categoria === cat
              return (
                <button
                  key={cat}
                  onClick={() => setCategoria(cat)}
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                    active
                      ? 'bg-blue-500/20 border-blue-400/50 text-white'
                      : 'bg-white/[0.03] border-white/10 text-white/50 hover:text-white/80 hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Orden */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-white/35 uppercase tracking-wider font-bold">Ordenar:</span>
            {[
              { key: 'recientes', label: 'Recientes' },
              { key: 'az', label: 'A–Z' },
            ].map((o) => {
              const active = orden === o.key
              return (
                <button
                  key={o.key}
                  onClick={() => setOrden(o.key)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    active ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {o.label}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Resultados */}
        {resultados.length === 0 ? (
          <motion.p {...fadeUp(0.25)} className="text-center text-white/40 text-sm py-12">
            No encontré guías con ese filtro. Prueba otra palabra. 🤔
          </motion.p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resultados.map((g, i) => (
              <motion.button
                key={g.id}
                type="button"
                onClick={() => abrirGuia(g)}
                {...fadeUp(0.25 + Math.min(i, 8) * 0.04)}
                whileHover={{ y: -4 }}
                className="group rounded-2xl p-5 flex flex-col h-full relative overflow-hidden text-left cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* sweep */}
                <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out pointer-events-none" />

                <div className="flex items-center justify-between gap-2 mb-2 relative z-10">
                  <span className="text-[10px] font-bold text-blue-300/80 uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/20">
                    {g.categoria}
                  </span>
                  {g.destacada && <span className="text-xs" title="Destacada">⭐</span>}
                </div>

                <h3 className="text-base font-bold text-white leading-snug mb-1.5 relative z-10">
                  {g.titulo}
                </h3>
                <p className="text-xs text-white/55 leading-relaxed flex-1 relative z-10">
                  {g.descripcion}
                </p>

                <div className="flex items-center justify-between mt-4 relative z-10">
                  <span className="text-[10px] text-white/35">
                    {g.archivo ? 'PDF' : 'Enlace'} · {formatFecha(g.fecha)}
                  </span>
                  <span className="text-xs font-bold text-blue-300 group-hover:text-blue-200 transition-colors">
                    {g.archivo ? 'Leer aquí →' : 'Abrir →'}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        )}

        <p className="text-center text-[11px] text-white/25 mt-8">
          {resultados.length} {resultados.length === 1 ? 'guía' : 'guías'}
        </p>

        <div className="pb-8" />
      </div>

      {/* Visor de PDF dentro de la página (carga diferida) */}
      {guiaAbierta && (
        <Suspense fallback={null}>
          <PdfViewer guia={guiaAbierta} onClose={() => navigate('/guias')} />
        </Suspense>
      )}
    </div>
  )
}
