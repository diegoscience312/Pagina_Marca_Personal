import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ParticleBackground from '../components/ParticleBackground'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
})

const skoolComments = [
  '/imagenes/skool1.png',
  '/imagenes/skool2.png',
  '/imagenes/skool3.png',
  '/imagenes/skool4.png',
  '/imagenes/skool5.png',
]
const commentsColA = skoolComments
const commentsColB = [skoolComments[2], skoolComments[4], skoolComments[1], skoolComments[3], skoolComments[0]]

const maskY = {
  maskImage: 'linear-gradient(to bottom, transparent, #000 10%, #000 90%, transparent)',
  WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 10%, #000 90%, transparent)',
}

function MarqueeCol({ items, reverse = false, className = '' }) {
  return (
    <motion.div
      className={`flex flex-col gap-4 ${className}`}
      animate={{ y: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
      transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
    >
      {[...items, ...items].map((src, i) => (
        <div key={i} className="rounded-xl overflow-hidden flex-shrink-0" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
          <img src={src} alt="Comentario de un alumno en Skool" loading="lazy" className="w-full block" />
        </div>
      ))}
    </motion.div>
  )
}

const gridFeatures = [
  'Curso: Claude AI desde cero',
  'Curso: Claude Cowork desde cero',
  'Curso: Claude Code desde cero',
  'Templates y recursos listos para usar',
  'Tips y novedades de IA cada semana',
  'Comunidad activa para resolver dudas',
]

const vaultFeatures = [
  'Todo lo de The Grid, incluido',
  'Clases en vivo cada semana',
  'Mentoría directa 1:1 con Diego',
  'Proyectos reales que generan ingresos',
  'Automatizaciones y agentes que venden por ti',
  'Flujos n8n & ManyChat PRO listos',
  'Comunidad privada de fundadores',
  'Precio de fundador (solo pre-lanzamiento)',
]

export default function Comunidad() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const goVault = () => { window.location.href = '/the-vault/' }
  const goGrid = () => window.open('https://www.skool.com/the-grid-5633', '_blank')
  const scrollToPlanes = () => document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ overflowY: 'auto' }}>
      <ParticleBackground />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(900px circle at 78% 4%, rgba(255,106,61,0.12), transparent 55%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-7">
        {/* Back */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors mb-10 cursor-pointer bg-transparent border-none"
        >
          ← Volver
        </motion.button>

        {/* ══ HERO (asimétrico) ══ */}
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-8 items-center pb-20 md:pb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-[11px] font-semibold tracking-wide text-white/60"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#ff6a3d', boxShadow: '0 0 8px rgba(255,106,61,0.9)' }} />
              COMUNIDAD DE IA
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-[3.3rem] font-bold leading-[1.05] tracking-tight mb-5"
            >
              Aprende IA gratis. Y llévala hasta <span className="text-gradient-coral">monetizarla</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/55 text-base md:text-lg leading-relaxed max-w-md mb-8"
            >
              Empieza gratis dominando la IA en <span className="text-white/85 font-medium">The Grid</span>, y sube a <span style={{ color: '#ff8a66' }} className="font-medium">The Vault</span> cuando quieras convertirla en ingresos reales.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.26 }}
              whileHover={{ y: -2, boxShadow: '0 16px 40px -12px rgba(255,106,61,0.6)' }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToPlanes}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-black cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #ff8a66, #f26a4b)', boxShadow: '0 10px 30px -10px rgba(255,106,61,0.55)' }}
            >
              Empieza tu camino ↓
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.36 }}
              className="flex items-center gap-3 mt-8"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                <img src="/the-vault/imagenes/profile.png" alt="Diego Ortega" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-white/50 leading-tight">
                Creada por <span className="text-white/85 font-semibold">Diego Ortega</span><br />
                Founder de NoxAI · Ing. en Ciencia de Datos
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[270px]"
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] aspect-square rounded-full blur-3xl opacity-60 pointer-events-none"
              style={{ background: 'rgba(255,106,61,0.35)' }}
            />
            <img
              src="/the-vault/imagenes/skool.png"
              alt="La comunidad por dentro"
              className="relative w-full rounded-2xl"
              style={{ border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.8)' }}
            />
          </motion.div>
        </div>

        {/* ══ ELIGE TU CAMINO (roadmap estilo videojuego) ══ */}
        <div id="planes" className="scroll-mt-6 mb-24">
          <motion.div {...inView(0)} className="text-center mb-12">
            <p className="text-[11px] text-white/40 uppercase tracking-[0.25em] mb-3 font-bold">Tu camino</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">Elige tu nivel</h2>
            <p className="text-white/50 text-sm max-w-md mx-auto">Empieza gratis, sube de nivel cuando quieras convertir la IA en ingresos.</p>
          </motion.div>

          <div className="relative">
            {/* Ruta vertical */}
            <div
              className="absolute left-6 top-6 bottom-6 w-[3px] -translate-x-1/2 rounded-full"
              style={{ background: 'linear-gradient(to bottom, rgba(20,184,166,0.7), rgba(255,106,61,0.7))' }}
            />

            {/* ── NIVEL 01 · The Grid ── */}
            <motion.div {...inView(0.05)} className="relative flex gap-5 md:gap-7 pb-8">
              <div className="flex-shrink-0">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-display text-base font-bold relative z-10"
                  style={{ background: '#0d0d0d', border: '2px solid #14b8a6', color: '#2dd4bf', boxShadow: '0 0 22px rgba(20,184,166,0.55)' }}
                >
                  01
                </div>
              </div>
              <div
                className="flex-1 rounded-3xl p-6 md:p-7"
                style={{ background: 'rgba(20,184,166,0.05)', border: '1px solid rgba(20,184,166,0.28)' }}
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-teal-400">Nivel 1 · Gratis · Empieza aquí</p>
                  <span className="text-xs text-white/40 font-medium">+1.7K miembros</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">The Grid</h3>
                <p className="text-sm text-white/55 leading-relaxed mb-5">
                  Aprende a usar la IA desde cero. Tu base para dominar las herramientas y empezar a aplicarlas.
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2.5 mb-6">
                  {gridFeatures.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-white/70 leading-snug">
                      <span className="text-teal-400 mt-0.5">✓</span> {b}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={goGrid}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl text-sm font-bold text-white cursor-pointer"
                  style={{ background: 'rgba(20,184,166,0.16)', border: '1px solid rgba(20,184,166,0.45)' }}
                >
                  Únete gratis →
                </motion.button>
              </div>
            </motion.div>

            {/* ── NIVEL 02 · The Vault ── */}
            <motion.div {...inView(0.1)} className="relative flex gap-5 md:gap-7">
              <div className="flex-shrink-0">
                <motion.div
                  animate={{ boxShadow: ['0 0 20px rgba(255,106,61,0.4)', '0 0 34px rgba(255,106,61,0.75)', '0 0 20px rgba(255,106,61,0.4)'] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-12 h-12 rounded-full flex items-center justify-center font-display text-base font-bold relative z-10"
                  style={{ background: '#0d0d0d', border: '2px solid #ff6a3d', color: '#ff8a66' }}
                >
                  02
                </motion.div>
              </div>
              <div
                className="flex-1 rounded-3xl p-6 md:p-7 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(160deg, rgba(255,106,61,0.14), rgba(255,138,102,0.03))',
                  border: '1px solid rgba(255,138,102,0.42)',
                  boxShadow: '0 0 60px -18px rgba(255,106,61,0.4)',
                }}
              >
                <div className="absolute top-6 right-6 px-2.5 py-1 rounded-full text-[9px] font-black tracking-widest text-black" style={{ background: 'linear-gradient(135deg, #ff8a66, #f26a4b)' }}>
                  RECOMENDADO
                </div>
                <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: '#ff8a66' }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#ff6a3d', boxShadow: '0 0 8px rgba(255,106,61,0.9)' }} />
                  Nivel 2 · Pre-lanzamiento · Para monetizar
                </p>
                <h3 className="font-display text-2xl font-bold text-white mb-2">The Vault</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-5">
                  El siguiente nivel: convierte lo que aprendiste en ingresos reales, con acompañamiento directo y proyectos aplicados.
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2.5 mb-6">
                  {vaultFeatures.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-white/80 leading-snug">
                      <span className="mt-0.5" style={{ color: '#ff8a66' }}>✦</span> {b}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 16px 40px -12px rgba(255,106,61,0.6)' }} whileTap={{ scale: 0.98 }}
                  onClick={goVault}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-black cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #ff8a66, #f26a4b)', boxShadow: '0 10px 30px -10px rgba(255,106,61,0.55)' }}
                >
                  Quiero mi lugar →
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ══ LO QUE CONSTRUYEN LOS ALUMNOS ══ */}
        <div className="mb-24">
          <motion.div {...inView(0)} className="mb-8">
            <p className="text-[11px] text-white/40 uppercase tracking-[0.25em] mb-3 font-bold">Comunidad real</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Lo que construyen los alumnos</h2>
            <p className="text-white/50 text-sm mt-2">Comentarios reales de la comunidad en Skool.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[540px] overflow-hidden items-start" style={maskY}>
            <MarqueeCol items={commentsColA} />
            <MarqueeCol items={commentsColB} reverse className="hidden md:flex" />
          </div>
        </div>

        {/* ══ CTA FINAL ══ */}
        <motion.div
          {...inView(0)}
          className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden mb-10"
          style={{
            background: 'linear-gradient(135deg, rgba(255,106,61,0.16), rgba(255,138,102,0.04))',
            border: '1px solid rgba(255,138,102,0.4)',
          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(500px circle at 50% 0%, rgba(255,106,61,0.2), transparent 60%)' }} />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-white leading-tight mb-3">
              ¿Listo para monetizar con IA?
            </h2>
            <p className="text-white/60 text-base max-w-md mx-auto mb-8">
              Entra a la lista de The Vault y sé de los primeros en construir con acompañamiento directo.
            </p>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 18px 44px -12px rgba(255,106,61,0.65)' }} whileTap={{ scale: 0.97 }}
              onClick={goVault}
              className="px-9 py-4 rounded-xl text-sm font-bold text-black cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #ff8a66, #f26a4b)', boxShadow: '0 12px 34px -10px rgba(255,106,61,0.6)' }}
            >
              Quiero mi lugar en The Vault →
            </motion.button>
            <p className="text-xs text-white/45 mt-5">
              ¿Apenas empiezas?{' '}
              <button onClick={goGrid} className="text-teal-400 hover:text-teal-300 font-semibold cursor-pointer bg-transparent border-none">
                Entra gratis a The Grid
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
