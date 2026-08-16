import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { openBlueprint } from '../data/blueprint'

// Copy compartida del lead magnet (en primera persona, voz de Diego)
const HOOK = '¿Te gustaría empezar a monetizar con IA?'
const DESC = 'Te comparto las 3 formas en las que monetizo mi marca personal y mi negocio con IA, el mismo sistema que uso yo.'
const CTA_LABEL = 'Quiero el video gratis →'

// Botón amber sutil (glow suave, no invasivo)
const amberBtn = {
  background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
  boxShadow: '0 0 12px rgba(245,158,11,0.3)',
  border: '1px solid rgba(255,255,255,0.12)',
}

// Card con tinte amber sutil sobre fondo oscuro (para el banner y la barra)
const softCard = {
  background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(255,255,255,0.02))',
  border: '1px solid rgba(245,158,11,0.22)',
  backdropFilter: 'blur(8px)',
}

/* ─────────────────────────────────────────────
   BANNER — listado de guías (/guias)
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
        className="rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-5 relative overflow-hidden group transition-all duration-300"
        style={{ ...softCard, boxShadow: '0 8px 24px -14px rgba(0,0,0,0.5)' }}
      >
        {/* Subtle sweep */}
        <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out pointer-events-none" />

        <div className="text-left relative z-10 flex-1">
          <p className="text-[15px] md:text-base font-bold text-white leading-snug mb-1">
            💰 {HOOK}
          </p>
          <p className="text-[12px] md:text-[13px] leading-snug text-amber-100/60 font-medium">
            {DESC}
          </p>
        </div>

        <div className="w-full md:w-auto flex-shrink-0 flex flex-col items-stretch md:items-end gap-1 relative z-10">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={openBlueprint}
            className="w-full md:w-auto whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold text-black cursor-pointer transition-shadow duration-300"
            style={amberBtn}
          >
            {CTA_LABEL}
          </motion.button>
          <span className="text-[10px] text-amber-100/40 font-medium text-center md:text-right">
            6 preguntas · menos de 2 min · <span className="font-bold text-amber-300/90">GRATIS</span>
          </span>
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   STRIP — banner delgado (home)
   ───────────────────────────────────────────── */
export function BlueprintStrip() {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={openBlueprint}
      className="w-full flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 relative overflow-hidden group cursor-pointer"
      style={{ ...softCard, boxShadow: '0 8px 24px -16px rgba(0,0,0,0.5)' }}
    >
      {/* sweep */}
      <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out pointer-events-none" />

      <span className="flex items-center gap-2 min-w-0 relative z-10 text-left">
        <span className="text-[12px] md:text-sm font-bold text-white truncate">
          💰 Video <span className="text-amber-300">GRATIS</span> para monetizar con IA
          <span className="hidden sm:inline text-amber-100/60 font-medium"> · 3 formas que uso yo</span>
        </span>
      </span>

      <span
        className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] md:text-xs font-bold text-black relative z-10"
        style={amberBtn}
      >
        Quiero →
      </span>
    </motion.button>
  )
}

/* ─────────────────────────────────────────────
   FLOATING — dentro del visor de PDF (compacto, no invasivo)
   Desktop: tarjeta chica arriba-derecha (fondo oscuro, va sobre el PDF blanco).
   Móvil: barra sutil hasta arriba.
   Persistente, nunca auto-abre. Cerrable → pill.
   ───────────────────────────────────────────── */
export function BlueprintFloating() {
  const [open, setOpen] = useState(true)

  const stop = (e) => e.stopPropagation()

  return (
    <>
      {/* ── MÓVIL: barra sutil arriba ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="bar"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            onClick={stop}
            className="md:hidden flex-shrink-0 overflow-hidden border-b border-amber-400/20"
            style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(255,255,255,0.02))', backdropFilter: 'blur(10px)' }}
          >
            <div className="flex items-center gap-2 px-3 py-2">
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-bold text-white leading-snug">💰 {HOOK}</p>
                <p className="text-[11px] text-amber-100/60 leading-snug mt-0.5">{DESC}</p>
                <p className="text-[10px] text-amber-100/45 leading-snug mt-1 font-medium">6 preguntas · menos de 2 min · <span className="font-bold text-amber-300/90">GRATIS</span></p>
              </div>
              <button
                onClick={openBlueprint}
                className="flex-shrink-0 px-3 py-1.5 rounded-lg text-[11px] font-bold text-black cursor-pointer"
                style={amberBtn}
              >
                Quiero →
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="flex-shrink-0 w-6 h-6 rounded-md text-amber-100/50 hover:text-white hover:bg-white/10 text-sm transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── DESKTOP: tarjeta chica arriba-derecha ── */}
      <AnimatePresence initial={false} mode="wait">
        {open ? (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={stop}
            className="hidden md:block fixed top-20 right-6 z-[60] w-[300px] rounded-2xl p-4 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(28,22,10,0.96), rgba(18,16,10,0.96))',
              border: '1px solid rgba(245,158,11,0.25)',
              boxShadow: '0 20px 50px -12px rgba(0,0,0,0.7)',
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

            <p className="text-sm font-bold text-white leading-snug mb-1.5 pr-6">
              💰 {HOOK}
            </p>
            <p className="text-[13px] text-amber-100/65 leading-relaxed mb-3">
              {DESC}
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={openBlueprint}
              className="w-full px-4 py-2 rounded-lg text-xs font-bold text-black cursor-pointer"
              style={amberBtn}
            >
              {CTA_LABEL}
            </motion.button>
            <p className="text-[10px] text-amber-100/40 text-center mt-2 font-medium">6 preguntas · menos de 2 min · GRATIS</p>
          </motion.div>
        ) : (
          <motion.button
            key="pill"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => { stop(e); setOpen(true) }}
            className="hidden md:flex fixed top-20 right-6 z-[60] items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-black cursor-pointer shadow-2xl"
            style={amberBtn}
          >
            💰 Video gratis
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
            style={amberBtn}
          >
            💰 Video gratis
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
