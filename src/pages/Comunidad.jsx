import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ParticleBackground from '../components/ParticleBackground'
import ToolIcon from '../components/ToolIcon'

const tools = ['Claude AI', 'n8n', 'ManyChat', 'OpenCLAW', 'Antigravity', 'Higgsfield']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

const testimonials = [
  { name: 'Carlos M.', role: 'Emprendedor', quote: 'Aprendí a automatizar todo mi negocio en semanas. El nivel de las clases es increíble.' },
  { name: 'Sofía R.', role: 'Content Creator', quote: 'Los videos de Mateo me cambiaron la vida. Ahora produzco contenido 3x más rápido con IA.' },
  { name: 'Andrés P.', role: 'Developer', quote: 'La comunidad PRO vale cada peso. El acceso directo a Diego y Mateo es invaluable.' },
]

export default function Comunidad() {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white"
      style={{ overflowY: 'auto' }}
    >
      <ParticleBackground />

      {/* Ambient glows */}
      <div className="fixed top-0 left-0 w-[50vw] h-[50vh] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.07) 0%, transparent 60%)' }} />
      <div className="fixed bottom-0 right-0 w-[50vw] h-[50vh] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at 80% 80%, rgba(139,92,246,0.07) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">

        {/* Back */}
        <motion.button
          {...fadeUp(0)}
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors mb-6 cursor-pointer bg-transparent border-none"
        >
          ← Volver
        </motion.button>

        {/* Header */}
        <motion.div {...fadeUp(0.1)} className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gradient leading-tight">Nuestra Comunidad</h1>
          <p className="text-white/50 text-sm mt-2">Elige el plan que se adapta a ti</p>
        </motion.div>

        {/* ── TOOLS ── */}
        <motion.div {...fadeUp(0.15)} className="w-full mb-8">
          <div
            className="rounded-[1.25rem] px-5 py-5 md:py-6 relative overflow-hidden group shadow-xl"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <p className="text-xs text-white/40 uppercase tracking-[0.2em] text-center mb-0 font-bold">HERRAMIENTAS QUE ENSEÑAMOS</p>
            <div className="flex justify-between md:justify-around items-end gap-3 md:gap-2 overflow-x-auto pt-6 pb-2 md:pb-0 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
              {tools.map((tool, i) => (
                <ToolIcon key={tool} name={tool} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Plans & Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8 items-stretch">

          {/* Free */}
          <motion.div {...fadeUp(0.2)}>
            <div
              className="rounded-2xl p-5 h-full flex flex-col"
              style={{
                background: 'rgba(20,184,166,0.06)',
                border: '1px solid rgba(20,184,166,0.25)',
                boxShadow: '0 0 25px rgba(20,184,166,0.08)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="mb-3">
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">Gratis</span>
                <h2 className="text-lg font-bold text-white mt-1">Comunidad Libre</h2>
                <p className="text-xs text-white/50 mt-1 leading-relaxed">
                  Accede a contenido gratuito, tips semanales y una comunidad activa de creadores y automatizadores.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mb-5 flex-1">
                {[
                  'Acceso al Discord comunitario',
                  'Recursos y templates gratuitos',
                  'Tips semanales de IA',
                  'Preguntas en canales públicos',
                ].map(b => (
                  <li key={b} className="flex items-center gap-2 text-xs text-white/65">
                    <span className="text-teal-400 font-bold">✓</span> {b}
                  </li>
                ))}
              </ul>
              <motion.div
                className="w-full text-center px-6 py-3 rounded-xl text-sm font-bold text-white/60 cursor-not-allowed mt-auto"
                style={{
                  background: 'rgba(20,184,166,0.1)',
                  border: '1px solid rgba(20,184,166,0.2)',
                }}
              >
                Próximamente
              </motion.div>
            </div>
          </motion.div>

          {/* Paid */}
          <motion.div {...fadeUp(0.3)}>
            <div
              className="rounded-2xl p-5 h-full flex flex-col relative overflow-hidden"
              style={{
                background: 'rgba(139,92,246,0.08)',
                border: '1px solid rgba(139,92,246,0.35)',
                boxShadow: '0 0 35px rgba(139,92,246,0.12)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Badge */}
              <div
                className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[9px] font-black tracking-widest"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#000' }}
              >
                PRO
              </div>

              <div className="mb-3">
                <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest">Premium</span>
                <h2 className="text-lg font-bold text-white mt-1">Comunidad PRO</h2>
                <p className="text-xs text-white/50 mt-1 leading-relaxed">
                  Acceso completo a clases en vivo, mentorías directas, flujos de automatización listos para usar y mucho más.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mb-5 flex-1">
                {[
                  'Todo lo del plan gratuito',
                  'Clases en vivo semanales',
                  'Flujos n8n & ManyChat PRO',
                  'Mentoría directa 1:1',
                  'Acceso a Skool exclusivo',
                  'Proyectos reales paso a paso',
                ].map(b => (
                  <li key={b} className="flex items-center gap-2 text-xs text-white/65">
                    <span className="text-violet-400 font-bold">✦</span> {b}
                  </li>
                ))}
              </ul>
              <motion.div
                className="w-full text-center px-6 py-3 rounded-xl text-sm font-bold text-white/60 cursor-not-allowed mt-auto"
                style={{
                  background: 'rgba(139,92,246,0.1)',
                  border: '1px solid rgba(139,92,246,0.2)',
                }}
              >
                Próximamente
              </motion.div>
            </div>
          </motion.div>

          {/* Guides (New Card) */}
          <motion.div {...fadeUp(0.4)} className="h-full">
            <div
              className="rounded-2xl p-5 h-full flex flex-col relative overflow-hidden group"
              style={{
                background: 'rgba(59,130,246,0.06)',
                border: '1px solid rgba(59,130,246,0.25)',
                boxShadow: '0 0 25px rgba(59,130,246,0.08)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="mb-3 relative z-10">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-[pulse_1.5s_ease-in-out_Infinity] shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  Guías
                </span>
                <h2 className="text-lg font-bold text-white mt-1 leading-tight">Guías gratuitas de IA y automatización</h2>
                <p className="text-xs text-white/60 mt-1.5 leading-relaxed text-balance">
                  Claude Code, ManyChat, n8n y más.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mb-5 flex-1 relative z-10">
                {[
                  'Acceso a todos los prompts',
                  'Workflows de n8n descargables',
                  'Documentación explicada',
                  'Nuevas guías mensualmente',
                ].map((b, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-white/65">
                    <span className="text-blue-400 font-bold">✓</span> {b}
                  </li>
                ))}
              </ul>
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(59,130,246,0.6)' }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/drive/folders/12igbqQZNA4TUabgyqmsawifVwiw-VehV?usp=share_link"
                target="_blank"
                rel="noreferrer"
                className="w-full block text-center px-6 py-3 rounded-xl text-sm font-bold text-white no-underline mt-auto relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  boxShadow: '0 0 15px rgba(59,130,246,0.3)',
                }}
              >
                Ver guías →
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div {...fadeUp(0.4)}>
          <p className="text-[10px] text-white/30 uppercase tracking-widest text-center mb-4 font-semibold">Lo que dice la comunidad</p>
          <div className="flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <div
                  className="rounded-xl p-4 flex items-start gap-3"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                    style={{ background: `hsl(${i * 80 + 200}, 60%, 40%)` }}
                  >
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-xs text-white font-semibold">{t.name} <span className="text-white/35 font-normal">· {t.role}</span></p>
                    <p className="text-xs text-white/55 mt-0.5 leading-relaxed">"{t.quote}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="pb-8" />
      </div>
    </div>
  )
}
