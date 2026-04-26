import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ParticleBackground from '../components/ParticleBackground'
import Avatar from '../components/Avatar'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

const steps = [
  { number: '1', label: 'Escríbeme por WhatsApp', desc: 'Dime qué quieres aprender o en qué te puedo ayudar.' },
  { number: '2', label: 'Agendamos la sesión', desc: 'Coordinamos día y hora que te acomode.' },
  { number: '3', label: 'Hacemos la sesión', desc: 'Nos conectamos por videollamada y trabajamos en tu caso.' },
]

export default function Asesoria() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ overflowY: 'auto' }}>
      <ParticleBackground />

      <div className="fixed top-0 left-0 w-[50vw] h-[50vh] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at 20% 20%, rgba(37,99,235,0.08) 0%, transparent 60%)' }} />
      <div className="fixed bottom-0 right-0 w-[50vw] h-[50vh] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at 80% 80%, rgba(29,78,216,0.07) 0%, transparent 60%)' }} />

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
          <div className="flex justify-center mb-4">
            <Avatar name="Diego Ortega" delay={0} small />
          </div>
          <h1 className="text-2xl font-bold text-white leading-tight">Asesoría & Consultoría 1:1</h1>
          <p className="text-white/50 text-sm mt-2 max-w-xs mx-auto text-balance">
            Te enseño lo que yo mismo uso para construir, crear y automatizar con IA.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-8 items-stretch">

          {/* $50 */}
          <motion.div {...fadeUp(0.2)}>
            <div
              className="rounded-2xl p-5 h-full flex flex-col"
              style={{
                background: 'rgba(37,99,235,0.06)',
                border: '1px solid rgba(59,130,246,0.25)',
                boxShadow: '0 0 25px rgba(37,99,235,0.08)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="mb-3">
                <div className="flex items-baseline gap-1.5 mt-1 mb-2">
                  <span className="text-3xl font-black text-white">$50</span>
                  <span className="text-xs text-white/40">USD</span>
                </div>
                <h2 className="text-lg font-bold text-white">Sesión Enfocada</h2>
                <p className="text-[10px] text-blue-400/80 font-semibold uppercase tracking-widest mt-0.5">30 – 45 minutos</p>
                <p className="text-xs text-white/50 mt-2 leading-relaxed">
                  Ideal si tienes una duda o tema concreto y quieres avanzar rápido con orientación directa.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mb-5 flex-1">
                {[
                  'Un tema específico a profundidad',
                  'Demostración en vivo',
                  'Tips y recursos personalizados',
                  'Q&A al final de la sesión',
                ].map(b => (
                  <li key={b} className="flex items-center gap-2 text-xs text-white/65">
                    <span className="text-blue-400 font-bold">✓</span> {b}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(37,99,235,0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/525571729955?text=Hola%20Diego%2C%20quiero%20agendar%20una%20Sesi%C3%B3n%20Enfocada%20de%20%2450%20(30-45%20min).%20El%20tema%20que%20quiero%20aprender%20es%3A%20', '_blank')}
                className="w-full text-center px-6 py-3 rounded-xl text-sm font-bold text-white cursor-pointer mt-auto"
                style={{
                  background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                  boxShadow: '0 0 15px rgba(37,99,235,0.3)',
                  border: 'none',
                }}
              >
                Agendar por $50 →
              </motion.button>
            </div>
          </motion.div>

          {/* $100 */}
          <motion.div {...fadeUp(0.3)}>
            <div
              className="rounded-2xl p-5 h-full flex flex-col relative overflow-hidden"
              style={{
                background: 'rgba(37,99,235,0.1)',
                border: '1px solid rgba(59,130,246,0.4)',
                boxShadow: '0 0 40px rgba(37,99,235,0.15)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Badge */}
              <div
                className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[9px] font-black tracking-widest"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#000' }}
              >
                POPULAR
              </div>

              <div className="mb-3">
                <div className="flex items-baseline gap-1.5 mt-1 mb-2">
                  <span className="text-3xl font-black text-white">$100</span>
                  <span className="text-xs text-white/40">USD</span>
                </div>
                <h2 className="text-lg font-bold text-white">Sesión Completa</h2>
                <p className="text-[10px] text-blue-400/80 font-semibold uppercase tracking-widest mt-0.5">1 – 1.2 horas</p>
                <p className="text-xs text-white/50 mt-2 leading-relaxed">
                  Para quien quiere ver el panorama completo y construir una estrategia de IA personalizada para su caso.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mb-5 flex-1">
                {[
                  'Todo lo de la sesión enfocada',
                  'Múltiples temas en una sola sesión',
                  'Roadmap personalizado de IA',
                  'Revisión de tu proyecto o negocio',
                  'Seguimiento por DM post-sesión',
                ].map(b => (
                  <li key={b} className="flex items-center gap-2 text-xs text-white/65">
                    <span className="text-blue-300 font-bold">✦</span> {b}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37,99,235,0.6)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/525571729955?text=Hola%20Diego%2C%20quiero%20agendar%20una%20Sesi%C3%B3n%20Completa%20de%20%24100%20(1-1.2%20hrs).%20Los%20temas%20que%20me%20interesan%20son%3A%20', '_blank')}
                className="w-full text-center px-6 py-3 rounded-xl text-sm font-bold text-white cursor-pointer mt-auto"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                  boxShadow: '0 0 20px rgba(37,99,235,0.4)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                Agendar por $100 →
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Cómo funciona */}
        <motion.div {...fadeUp(0.4)} className="w-full mb-8">
          <p className="text-xs text-white/40 uppercase tracking-[0.2em] text-center mb-5 font-bold">CÓMO FUNCIONA</p>
          <div className="flex flex-col gap-3">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="flex items-start gap-4 rounded-2xl px-5 py-4"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 mt-0.5"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', boxShadow: '0 0 12px rgba(37,99,235,0.4)' }}
                >
                  {step.number}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{step.label}</p>
                  <p className="text-xs text-white/45 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="pb-8" />
      </div>
    </div>
  )
}
