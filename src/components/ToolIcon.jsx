import { motion } from 'framer-motion'

const toolImages = {
  'Claude AI':   '/images/claude.png',
  'n8n':         '/images/n8n.png',
  'ManyChat':    '/images/manychat.png',
  'OpenCLAW':    '/images/openclaw.png',
  'Antigravity': '/images/antigravity.png',
  'Higgsfield':  '/images/Higgsfield.png',
}

export default function ToolIcon({ name, delay = 0 }) {
  const imgSrc = toolImages[name]

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4 + delay * 0.4, repeat: Infinity, ease: 'easeInOut', delay }}
      className="flex flex-col items-center gap-2 cursor-pointer pt-2 shrink-0 min-w-[50px] md:min-w-[60px]"
      whileHover={{ scale: 1.15 }}
    >
      <img 
        src={imgSrc} 
        alt={name} 
        className="w-10 h-10 md:w-12 md:h-12 object-contain" 
      />
      <span className="text-[10px] md:text-xs text-white/60 font-semibold tracking-wide text-center">{name}</span>
    </motion.div>
  )
}

