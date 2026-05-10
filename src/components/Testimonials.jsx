import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Ivan Manuel',
    flag: '🇪🇸',
    location: 'España',
    sessionPhoto: '/images/ivan.jpg',
    quote: 'Muy bien explicado. Me orientó perfecto sobre qué aprender primero para llevar mi tienda Shopify al siguiente nivel con Claude Code, n8n y automatizaciones.',
    topic: 'Shopify + Claude Code + n8n',
    plans: ['Sesión $20', 'Sesión $150'],
  },
]

export default function Testimonials() {
  return (
    <div className="w-full flex flex-col gap-4">
      <p className="text-xs font-semibold text-white/30 uppercase tracking-widest text-center">
        Sesiones reales — evidencia real
      </p>

      {testimonials.map((t) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="w-full rounded-2xl overflow-hidden relative"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Session screenshot — main evidence */}
          <div className="relative w-full overflow-hidden" style={{ maxHeight: '240px' }}>
            <img
              src={t.sessionPhoto}
              alt={`Sesión con ${t.name}`}
              className="w-full object-cover"
              style={{ maxHeight: '240px', objectPosition: 'center 42%' }}
            />
            {/* Overlay badge */}
            <div
              className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5"
              style={{
                background: 'rgba(0,0,0,0.7)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Sesión grabada en vivo
            </div>
          </div>

          {/* Quote + info */}
          <div className="p-5 flex flex-col gap-3">
            {/* Stars */}
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-sm">★</span>
              ))}
            </div>

            <p className="text-sm text-white/75 leading-relaxed">
              "{t.quote}"
            </p>

            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-bold text-white">
                  {t.flag} {t.name}
                </p>
                <p className="text-[10px] text-white/35">{t.location} · {t.topic}</p>
              </div>
              <div className="flex gap-1 flex-wrap">
                {t.plans.map(p => (
                  <span
                    key={p}
                    className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{ background: 'rgba(37,99,235,0.2)', color: 'rgba(147,197,253,0.9)', border: '1px solid rgba(59,130,246,0.2)' }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
