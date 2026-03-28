import { motion } from 'framer-motion'

const PlayIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-8 h-8 md:w-10 md:h-10 text-white/80"}>
    <path d="M8 5v14l11-7z"/>
  </svg>
)

export default function ContentCard({ label, image, link }) {
  const innerContent = (
    <motion.div
      className="rounded-xl flex flex-col items-center justify-center h-full cursor-pointer overflow-hidden relative"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        minHeight: image ? '240px' : '120px'
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      {image ? (
        <>
          <img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center w-full h-full justify-end pb-5 px-3">
             <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 mb-3 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
               <PlayIcon className="w-6 h-6 text-white ml-1" />
             </div>
             <p className="text-xs md:text-sm text-white text-center font-bold drop-shadow-lg">{label}</p>
          </div>
        </>
      ) : (
        <div className="p-4 flex flex-col items-center justify-center gap-3 w-full h-full group hover:bg-white/5 transition-colors">
          <div
            className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <PlayIcon />
          </div>
          <p className="text-xs md:text-sm text-white/60 text-center leading-snug font-medium px-2">{label}</p>
        </div>
      )}
    </motion.div>
  )

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full no-underline outline-none group">
        {innerContent}
      </a>
    )
  }

  return (
    <div className="w-full h-full group">
      {innerContent}
    </div>
  )
}
