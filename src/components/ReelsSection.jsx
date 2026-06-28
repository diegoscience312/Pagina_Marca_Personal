import { motion } from 'framer-motion'
import { reels } from '../data/reels'

// Ícono de Instagram (mismo trazo que el resto del sitio)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white/90">
    <path d="M8 5v14l11-7z" />
  </svg>
)

export default function ReelsSection() {
  if (!reels || reels.length === 0) return null

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
      className="mb-8"
    >
      {/* Encabezado de la sección */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <h2 className="text-sm font-bold text-white/90 flex items-center gap-1.5">
          <span>🎬</span> Últimos Reels
        </h2>
        <a
          href="https://instagram.com/ortegoat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-semibold text-blue-300/80 hover:text-blue-200 transition-colors"
        >
          Ver todos →
        </a>
      </div>

      {/* Carrusel horizontal de reels */}
      <div
        className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 hide-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {reels.map((reel, i) => (
          <motion.a
            key={i}
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="group relative flex-shrink-0 w-[140px] aspect-[9/16] rounded-2xl overflow-hidden snap-start cursor-pointer"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {/* Portada: imagen si existe, si no degradado */}
            {reel.thumbnail ? (
              <img
                src={reel.thumbnail}
                alt={reel.titulo}
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* Botón de play centrado */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-11 h-11 rounded-full flex items-center justify-center bg-black/40 border border-white/30 backdrop-blur-sm group-hover:scale-110 group-hover:bg-black/55 transition-all">
                <PlayIcon />
              </div>
            </div>

            {/* Badge de Instagram */}
            <div className="absolute top-2 right-2 text-white/80">
              <InstagramIcon />
            </div>

            {/* Título */}
            <div className="absolute bottom-0 left-0 right-0 p-2.5">
              <p className="text-[11px] font-semibold text-white leading-snug line-clamp-2">
                {reel.titulo}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}
