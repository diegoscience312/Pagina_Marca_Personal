import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { openBlueprint } from '../data/blueprint'

const features = ['Marca personal', 'Negocio', 'Monetización']

/* ─────────────────────────────────────────────
   BANNER — listado de guías (/guias)
   Card horizontal ancha, muy visible.
   ───────────────────────────────────────────── */
export function BlueprintBanner({ className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className={`w-full ${className}`}
    >
      <div
        className="rounded-[1.25rem] p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden group transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(245,158,11,0.16), rgba(249,115,22,0.06))',
          border: '1px solid rgba(245,158,11,0.4)',
          boxShadow: '0 15px 40px -10px rgba(245,158,11,0.22)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Highlight sweep */}
        <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out pointer-events-none" />

        <div className="text-center md:text-left relative z-10 flex-1">
          <p className="text-base md:text-lg font-bold text-white leading-tight mb-1.5 flex items-center justify-center md:justify-start gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.9)]" />
            💰 3 formas de monetizar con IA
          </p>
          <p className="text-xs md:text-sm leading-snug text-amber-100/75 font-medium text-balance mb-2">
            El blueprint + video (17 min) con el que aplico IA a mi marca personal, mi negocio y para monetizar. Te muestro lo que uso yo.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5">
            {features.map((f) => (
              <span
                key={f}
                className="text-[10px] md:text-[11px] font-semibold text-amber-200/90 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/25"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-1.5 relative z-10 w-full md:w-auto flex-shrink-0">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 28px rgba(245,158,11,0.55)' }}
            whileTap={{ scale: 0.95 }}
            onClick={openBlueprint}
            className="w-full md:w-auto whitespace-nowrap px-6 py-2.5 rounded-xl text-[13px] font-bold text-black cursor-pointer transition-shadow duration-300"
            style={{
              background: 'linear-gradient(135deg, #fbbf24, #f97316)',
              boxShadow: '0 0 22px rgba(245,158,11,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            Quiero el blueprint GRATIS →
          </motion.button>
          <span className="text-[10px] text-amber-100/50 font-medium">
            6 preguntas · menos de 2 min · <span className="text-sm font-bold text-amber-300">GRATIS</span>
          </span>
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   STRIP — banner delgado (home)
   Una sola línea, ligero, no compite con las cards.
   ───────────────────────────────────────────── */
export function BlueprintStrip() {
  return (
    <motion.button
      whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(245,158,11,0.4)' }}
      whileTap={{ scale: 0.98 }}
      onClick={openBlueprint}
      className="w-full flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 relative overflow-hidden group cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, rgba(245,158,11,0.16), rgba(249,115,22,0.06))',
        border: '1px solid rgba(245,158,11,0.4)',
        boxShadow: '0 0 18px rgba(245,158,11,0.15)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* sweep */}
      <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out pointer-events-none" />

      <span className="flex items-center gap-2 min-w-0 relative z-10">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.9)] flex-shrink-0" />
        <span className="text-[12px] md:text-sm font-bold text-white truncate">
          💰 3 formas de monetizar con IA
          <span className="hidden sm:inline text-amber-100/70 font-medium"> · blueprint + video GRATIS</span>
        </span>
      </span>

      <span
        className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] md:text-xs font-bold text-black relative z-10"
        style={{ background: 'linear-gradient(135deg, #fbbf24, #f97316)', boxShadow: '0 0 12px rgba(245,158,11,0.5)' }}
      >
        Quiero →
      </span>
    </motion.button>
  )
}

/* ─────────────────────────────────────────────
   FLOATING — dentro del visor de PDF
   Desktop: tarjeta fija abajo-derecha.
   Móvil: barra sticky hasta arriba (va como hijo del flex).
   Persistente, nunca auto-abre. Cerrable → se colapsa a un pill.
   ───────────────────────────────────────────── */
export function BlueprintFloating() {
  const [open, setOpen] = useState(true)

  const stop = (e) => e.stopPropagation()

  return (
    <>
      {/* ── MÓVIL: barra arriba (hijo del flex del visor) ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="bar"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            onClick={stop}
            className="md:hidden flex-shrink-0 overflow-hidden border-b border-amber-400/25"
            style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.18), rgba(249,115,22,0.08))', backdropFilter: 'blur(10px)' }}
          >
            <div className="flex items-center gap-2 px-3 py-2">
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-bold text-white leading-tight truncate">💰 3 formas de monetizar con IA</p>
                <p className="text-[10px] text-amber-100/70 leading-tight">Blueprint + video GRATIS · 6 preguntas</p>
              </div>
              <button
                onClick={openBlueprint}
                className="flex-shrink-0 px-3 py-1.5 rounded-lg text-[11px] font-bold text-black cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #fbbf24, #f97316)', boxShadow: '0 0 14px rgba(245,158,11,0.5)' }}
              >
                Quiero →
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="flex-shrink-0 w-6 h-6 rounded-md text-amber-100/60 hover:text-white hover:bg-white/10 text-sm transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── DESKTOP: tarjeta fija abajo-derecha ── */}
      <AnimatePresence initial={false} mode="wait">
        {open ? (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={stop}
            className="hidden md:block fixed top-20 right-6 z-[60] w-[300px] rounded-2xl p-4 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(30,20,5,0.92), rgba(20,15,5,0.92))',
              border: '1px solid rgba(245,158,11,0.4)',
              boxShadow: '0 20px 50px -10px rgba(0,0,0,0.7), 0 0 30px rgba(245,158,11,0.15)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="absolute top-2.5 right-2.5 w-6 h-6 rounded-md text-amber-100/50 hover:text-white hover:bg-white/10 text-sm transition-colors cursor-pointer"
            >
              ✕
            </button>

            <p className="text-sm font-bold text-white leading-tight mb-1.5 flex items-center gap-2 pr-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.9)]" />
              💰 3 formas de monetizar con IA
            </p>
            <p className="text-xs text-amber-100/70 leading-relaxed mb-3">
              El blueprint + video (17 min) que uso para aplicar IA a marca personal, negocio y monetización.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {features.map((f) => (
                <span key={f} className="text-[10px] font-semibold text-amber-200/90 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/25">
                  {f}
                </span>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={openBlueprint}
              className="w-full px-4 py-2.5 rounded-xl text-[13px] font-bold text-black cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #fbbf24, #f97316)', boxShadow: '0 0 20px rgba(245,158,11,0.5)' }}
            >
              Quiero el blueprint GRATIS →
            </motion.button>
            <p className="text-[10px] text-amber-100/45 text-center mt-2 font-medium">6 preguntas · menos de 2 min</p>
          </motion.div>
        ) : (
          <motion.button
            key="pill"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => { stop(e); setOpen(true) }}
            className="hidden md:flex fixed top-20 right-6 z-[60] items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-bold text-black cursor-pointer shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #fbbf24, #f97316)', boxShadow: '0 0 22px rgba(245,158,11,0.5)' }}
          >
            💰 Blueprint GRATIS
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── MÓVIL: pill para reabrir si cerró la barra ── */}
      <AnimatePresence initial={false}>
        {!open && (
          <motion.button
            key="pill-mobile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => { stop(e); setOpen(true) }}
            className="md:hidden fixed bottom-4 right-4 z-[60] flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12px] font-bold text-black cursor-pointer shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #fbbf24, #f97316)', boxShadow: '0 0 20px rgba(245,158,11,0.5)' }}
          >
            💰 Blueprint GRATIS
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
