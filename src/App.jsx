import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ParticleBackground from './components/ParticleBackground'
import Avatar from './components/Avatar'
import SocialLinks from './components/SocialLinks'
import ToolIcon from './components/ToolIcon'
import ContentCard from './components/ContentCard'

const tools = ['Claude AI', 'n8n', 'ManyChat', 'CapCut', 'Wavvy', 'Higgsfield']

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

      {/* Optimized Ambient glow blobs - Removed mix-blend-screen to fix fps stutter */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 60%)' }} />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 60%)' }} />
      <div className="fixed top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[70vw] h-[70vw] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.02) 0%, transparent 50%)' }} />

      <div className="relative z-10 flex flex-col justify-center min-h-[100dvh] px-4 py-8 md:py-6 gap-6 max-w-3xl mx-auto w-full">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 w-full"
        >

          {/* ── HERO ── */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 w-full pt-4 md:pt-0">
            {/* Diego */}
            <div className="flex flex-col items-center gap-1.5 flex-1">
              <Avatar name="Diego Ortega" delay={0} />
              <p className="text-base md:text-lg font-bold text-white text-center leading-tight mt-1 tracking-wide">Diego Ortega</p>
              <p className="text-xs text-white/50 text-center leading-relaxed max-w-[160px]">Automatizaciones IA & Claude Code</p>
              <SocialLinks
                instagram="@ortegoat"
                tiktok="@ortegoat8"
                instagramUrl="https://instagram.com/ortegoat"
                tiktokUrl="https://tiktok.com/@ortegoat8"
              />
            </div>

            {/* Responsive Divider */}
            <div className="flex flex-row md:flex-col items-center justify-center shrink-0 w-full md:w-auto py-2 md:py-0">
              <div className="w-[30%] md:w-[1px] h-[1px] md:h-20 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-full" />
              <motion.span 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="text-white/30 text-sm md:text-base mx-4 md:mx-0 md:my-2 font-medium"
                style={{ willChange: 'transform' }}
              >
                &
              </motion.span>
              <div className="w-[30%] md:w-[1px] h-[1px] md:h-20 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-full" />
            </div>

            {/* Mateo */}
            <div className="flex flex-col items-center gap-1.5 flex-1">
              <Avatar name="Mateo Cerrillo" delay={0.8} />
              <p className="text-base md:text-lg font-bold text-white text-center leading-tight mt-1 tracking-wide">Mateo Cerrillo</p>
              <p className="text-xs text-white/50 text-center leading-relaxed max-w-[160px]">Contenido UGC, Videos & Claude Code</p>
              <SocialLinks
                instagram="@cerrillolife"
                tiktok="@cerrillolife"
                instagramUrl="https://instagram.com/cerrillolife"
                tiktokUrl="#"
              />
            </div>
          </motion.div>

          {/* ── TOOLS ── */}
          <motion.div variants={itemVariants} className="w-full">
            <div
              className="rounded-[1.25rem] px-5 py-5 md:py-6 relative overflow-hidden group shadow-xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <p className="text-xs text-white/40 uppercase tracking-[0.2em] text-center mb-0 font-bold">Herramientas que enseñamos</p>
              <div className="flex justify-between md:justify-around items-end gap-3 md:gap-2 overflow-x-auto pt-6 pb-2 md:pb-0 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
                {tools.map((tool, i) => (
                  <ToolIcon key={tool} name={tool} delay={i * 0.1} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── LATEST CONTENT ── */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 w-full">
            {/* Diego content */}
            <div
              className="flex-1 rounded-[1.25rem] p-4 md:p-5 flex flex-col shadow-lg border border-blue-500/10 hover:border-blue-500/20 transition-colors duration-300 min-h-[140px] md:min-h-[160px]"
              style={{ background: 'rgba(59,130,246,0.04)', backdropFilter: 'blur(8px)' }}
            >
              <p className="text-[11px] md:text-xs text-blue-400/80 uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Diego · Últimos Reels
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                <div><ContentCard label="Automatiza con n8n + Claude" /></div>
                <div><ContentCard label="Claude Code en acción" /></div>
              </div>
            </div>

            {/* Mateo content */}
            <div
              className="flex-1 rounded-[1.25rem] p-4 md:p-5 flex flex-col shadow-lg border border-violet-500/10 hover:border-violet-500/20 transition-colors duration-300 min-h-[140px] md:min-h-[160px]"
              style={{ background: 'rgba(139,92,246,0.04)', backdropFilter: 'blur(8px)' }}
            >
              <p className="text-[11px] md:text-xs text-violet-400/80 uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                Mateo · Últimos Reels
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                <div><ContentCard label="UGC con IA step by step" /></div>
                <div><ContentCard label="CapCut + Higgsfield tips" /></div>
              </div>
            </div>
          </motion.div>

          {/* ── COMMUNITY CTA ── */}
          <motion.div variants={itemVariants} className="w-full mt-2">
            <div
              className="rounded-[1.25rem] p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] transition-shadow duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))',
                border: '1px solid rgba(139,92,246,0.3)',
                boxShadow: '0 4px 20px rgba(139,92,246,0.1)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Highlight sweep effect */}
              <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />

              <div className="text-center md:text-left relative z-10 w-full md:w-auto">
                <p className="text-lg md:text-xl font-semibold text-white leading-tight mb-1 tracking-tight">Únete a nuestra comunidad</p>
                <p className="text-xs md:text-sm text-white/70 font-medium">Aprende IA & automatización con nosotros</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/comunidad')}
                className="w-full md:w-auto flex-shrink-0 px-6 py-3 rounded-xl text-sm md:text-base font-bold text-white cursor-pointer relative z-10 transition-shadow duration-300"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  boxShadow: '0 0 15px rgba(139,92,246,0.3)',
                  border: 'none',
                }}
              >
                Acceder →
              </motion.button>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </div>
  )
}

