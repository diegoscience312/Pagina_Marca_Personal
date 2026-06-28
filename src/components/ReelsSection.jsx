import { motion } from 'framer-motion'

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white/90">
    <path d="M8 5v14l11-7z" />
  </svg>
)

// `reels` = guías que tienen un reel asociado (campo `reel`).
// onOpen(g) abre la GUÍA (el visor de PDF dentro de la página).
export default function ReelsSection({ reels, onOpen }) {
  if (!reels || reels.length === 0) return null

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
      className="mb-8"
    >
      {/* Encabezado de la sección */}
      <h2 className="text-sm font-bold text-white/90 flex items-center gap-1.5 mb-1">
        <span>🎬</span> Últimos Reels
      </h2>
      <p className="text-white/45 text-xs mb-3">¿Viste un reel? Dale clic y abre su guía. 👇</p>

      {/* Carrusel horizontal: cada tarjeta es un reel → abre su guía */}
      <div
        className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 hide-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {reels.map((g) => (
          <motion.div
            key={g.id}
            onClick={() => onOpen(g)}
            whileHover={{ y: -4 }}
            className="group relative flex-shrink-0 w-[150px] aspect-[9/16] rounded-2xl overflow-hidden snap-start cursor-pointer"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {/* Portada: imagen del reel si existe, si no degradado */}
            {g.reel.thumb ? (
              <img
                src={g.reel.thumb}
                alt={g.reel.titulo}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(59,130,246,0.35) 0%, rgba(139,92,246,0.35) 100%), #0f0f0f',
                }}
              />
            )}

            {/* Capa oscura para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/10" />

            {/* Play central */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-11 h-11 rounded-full flex items-center justify-center bg-black/35 border border-white/30 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <PlayIcon />
              </div>
            </div>

            {/* Pie: nombre del reel + CTA */}
            <div className="absolute bottom-0 left-0 right-0 p-2.5">
              <p className="text-[11px] font-semibold text-white leading-snug line-clamp-2 mb-1">
                {g.reel.titulo}
              </p>
              <span className="text-[10px] font-bold text-blue-300 group-hover:text-blue-200 transition-colors">
                Ver guía →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
