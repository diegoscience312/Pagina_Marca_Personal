import { motion } from 'framer-motion'

export default function Avatar({ name, delay = 0, small = false }) {
  const isMateo = name.includes('Mateo')
  const imgSrc = isMateo ? '/images/Mateo.jpg' : '/images/ortegoat.jpg'

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
      className="relative"
      whileHover={{ scale: 1.05 }}
    >
      <div
        className={`${small ? 'w-20 h-20 md:w-24 md:h-24' : 'w-32 h-32 md:w-40 md:h-40'} rounded-full flex items-center justify-center relative overflow-hidden`}
        style={{
          background: isMateo
            ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)'
            : 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          boxShadow: isMateo
            ? '0 0 30px rgba(139,92,246,0.6), 0 0 60px rgba(139,92,246,0.2)'
            : '0 0 30px rgba(59,130,246,0.6), 0 0 60px rgba(59,130,246,0.2)',
        }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-white/20 z-20 pointer-events-none" />
        <img src={imgSrc} alt={name} className="w-full h-full object-cover relative z-10" />
        <div
          className="absolute top-0 left-0 w-full h-1/2 rounded-t-full z-20 pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        />
      </div>
    </motion.div>
  )
}
