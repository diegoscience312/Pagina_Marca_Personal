import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ParticleBackground from './components/ParticleBackground'
import Avatar from './components/Avatar'
import SocialLinks from './components/SocialLinks'
import ContentCard from './components/ContentCard'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function App() {
  const navigate = useNavigate()

  return (
    <div className="relative w-full min-h-[100dvh] overflow-x-hidden bg-[#0a0a0a] flex flex-col font-sans text-white">
      <ParticleBackground />

      {/* Optimized Ambient glow blobs updated for rich visuals */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="fixed top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 60%)' }} />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 60%)' }} />
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="fixed top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80vw] h-[80vw] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 50%)' }} />

      <div className="relative z-10 flex flex-col justify-center min-h-[100dvh] px-4 py-8 md:py-6 gap-6 max-w-3xl mx-auto w-full">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 w-full"
        >

          {/* ── HERO ── */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center items-center gap-6 w-full pt-4 md:pt-6">
            <div className="flex flex-col items-center gap-4 w-full">
              <Avatar name="Diego Ortega" delay={0} />
              <div className="text-center flex flex-col gap-2">
                <p className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-wide">Diego Ortega</p>
                <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-[320px] mx-auto text-balance">
                  Te enseño a usar IA y automatización para trabajar menos y ganar más.
                </p>
              </div>
              <SocialLinks
                instagram="@ortegoat"
                tiktok="@ortegoat8"
                instagramUrl="https://instagram.com/ortegoat"
                tiktokUrl="https://tiktok.com/@ortegoat8"
              />
            </div>
          </motion.div>

          {/* ── AGENCY CARD ── */}
          <motion.div variants={itemVariants} className="w-full" whileHover={{ y: -5 }}>
            <div
              className="rounded-[1.25rem] p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden group shadow-2xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(30,58,138,0.4), rgba(88,28,135,0.2))',
                border: '1px solid rgba(59,130,246,0.4)',
                boxShadow: '0 10px 40px -10px rgba(59,130,246,0.3)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Highlight sweep effect */}
              <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

              <div className="text-center md:text-left relative z-10 w-full md:w-auto flex-1">
                <p className="text-lg md:text-xl font-bold text-white leading-tight mb-1.5 flex items-center justify-center md:justify-start gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                  Agencia de IA & Automatización
                </p>
                <p className="text-xs md:text-sm text-blue-100/70 font-medium text-balance">Escalamos y optimizamos tu negocio implementando herramientas de Inteligencia Artificial.</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(59,130,246,0.6)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://nexus-ai-lac-nu.vercel.app', '_blank')}
                className="w-full md:w-[240px] flex-shrink-0 px-6 py-3 rounded-xl text-sm font-bold text-white cursor-pointer relative z-10 transition-shadow duration-300"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  boxShadow: '0 0 15px rgba(59,130,246,0.4)',
                  border: 'none',
                }}
              >
                Implementa IA ahora →
              </motion.button>
            </div>
          </motion.div>

          {/* ── FREE RESOURCE ── */}
          <motion.div variants={itemVariants} className="w-full" whileHover={{ y: -5 }}>
            <div
              className="rounded-[1.25rem] p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden group shadow-2xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(20,184,166,0.15), rgba(13,148,136,0.05))',
                border: '1px solid rgba(20,184,166,0.3)',
                boxShadow: '0 10px 40px -10px rgba(20,184,166,0.15)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

              <div className="text-center md:text-left relative z-10 w-full md:w-auto flex-1">
                <p className="text-lg md:text-xl font-bold text-white leading-tight mb-1.5 flex items-center justify-center md:justify-start gap-2">
                  <span className="text-teal-400 text-xl font-bold block scale-110">🎁</span>
                  Guía: Escala tu negocio con IA
                </p>
                <p className="text-xs md:text-sm text-teal-100/70 font-medium">Guía gratis para empezar a implementar IA en tu negocio</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(20,184,166,0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://docs.google.com/document/d/13bwl3tANgX8myZJlXcxRxjyqetKhLEjA/edit?usp=sharing&ouid=104041412302112659107&rtpof=true&sd=true', '_blank')}
                className="w-full md:w-[240px] flex-shrink-0 px-6 py-3 rounded-xl text-sm font-bold text-white cursor-pointer relative z-10 transition-shadow duration-300"
                style={{
                  background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                  boxShadow: '0 0 15px rgba(20,184,166,0.3)',
                  border: 'none',
                }}
              >
                Descargar gratis →
              </motion.button>
            </div>
          </motion.div>

          {/* ── LATEST CONTENT ── */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 w-full">
            {/* Reels */}
            <motion.div
              whileHover={{ y: -5 }}
              className="flex-1 rounded-[1.25rem] p-4 md:p-5 flex flex-col shadow-2xl transition-all duration-300 min-h-[120px] md:min-h-[140px] relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(0,0,0,0))',
                border: '1px solid rgba(59,130,246,0.2)',
                boxShadow: '0 10px 40px -10px rgba(59,130,246,0.1)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <p className="text-[11px] md:text-xs text-blue-400 uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-[pulse_1.5s_ease-in-out_Infinity] shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                ÚLTIMOS REELS
              </p>
              <div className="grid grid-cols-1 gap-3 flex-1 relative z-10">
                <div>
                  <ContentCard
                    label="Automatiza tu agencia con IA"
                    image="/images/ig.jpg"
                    link="https://www.instagram.com/reel/DWaloxDTf_d/?igsh=ZG92YzE4MXRuaXNz"
                  />
                </div>
              </div>
            </motion.div>

            {/* TikToks */}
            <motion.div
              whileHover={{ y: -5 }}
              className="flex-1 rounded-[1.25rem] p-4 md:p-5 flex flex-col shadow-2xl transition-all duration-300 min-h-[120px] md:min-h-[140px] relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(0,0,0,0))',
                border: '1px solid rgba(139,92,246,0.2)',
                boxShadow: '0 10px 40px -10px rgba(139,92,246,0.1)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <p className="text-[11px] md:text-xs text-violet-400 uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-[pulse_1.5s_ease-in-out_Infinity] shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                ÚLTIMOS TIKTOKS
              </p>
              <div className="grid grid-cols-1 gap-3 flex-1 relative z-10">
                <div>
                  <ContentCard
                    label="Cómo crear tu propio SaaS con IA"
                    image="/images/tt.jpg"
                    link="https://vt.tiktok.com/ZSHJkhpXP/"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── COMMUNITY CTA ── */}
          <motion.div variants={itemVariants} className="w-full mt-2" whileHover={{ y: -5 }}>
            <div
              className="rounded-[1.25rem] p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden group shadow-[0_15px_40px_rgba(139,92,246,0.25)] transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.25))',
                border: '1px solid rgba(139,92,246,0.4)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Highlight sweep effect */}
              <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

              <div className="text-center md:text-left relative z-10 w-full md:w-auto flex-1">
                <p className="text-lg md:text-xl font-bold text-white leading-tight mb-1.5 flex items-center justify-center md:justify-start gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_rgba(167,139,250,0.8)]" />
                  Aprende IA — únete gratis
                </p>
                <p className="text-xs md:text-sm text-purple-100/70 font-medium text-balance">Comunidad de creadores y emprendedores que usan IA</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139,92,246,0.6)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/comunidad')}
                className="w-full md:w-[240px] flex-shrink-0 px-6 py-3 rounded-xl text-sm font-bold text-white cursor-pointer relative z-10 transition-shadow duration-300"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  boxShadow: '0 0 20px rgba(139,92,246,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                Acceder gratis →
              </motion.button>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </div>
  )
}

