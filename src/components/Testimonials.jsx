import { motion } from 'framer-motion'

const photoTestimonial = {
  name: 'Ivan Manuel',
  flag: '🇪🇸',
  location: 'España',
  sessionPhoto: '/images/ivan.jpg',
  quote: 'Muy bien explicado. Me orientó perfecto sobre qué aprender primero. Sin la sesión lo veía muy difícil, no creo que lo hubiera podido hacer por mi cuenta.',
  topic: 'Shopify MCP · GitHub · Claude Code',
  plans: ['Sesión $20', 'Sesión $150'],
}

const textTestimonials = [
  {
    name: 'Ale Lovaton',
    handle: '@alelovaton',
    followers: '120k+ seguidores',
    flag: '🇺🇸',
    location: 'Miami',
    quote: 'Increíble la sesión. No imaginé que podía automatizar mis carruseles de IG así de rápido con Claude Code y Canva. Me va a ahorrar horas cada semana. Muchas gracias.',
    topic: 'Claude Code + Canva para contenido',
    plan: '$150 USD',
  },
  {
    name: 'Santiago López',
    flag: '🇲🇽',
    location: 'México',
    quote: 'Llegué siendo cero técnico y salí con mi proyecto deployado en Vercel. Diego explica todo muy claro y al ritmo que necesitas. Aprendí más en esa sesión que en semanas solo.',
    topic: 'Claude Code · GitHub · Vercel',
    plan: '$150 USD',
  },
]

const cardBase = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(12px)',
}

export default function Testimonials() {
  return (
    <div className="w-full flex flex-col gap-4">
      <p className="text-xs font-semibold text-white/30 uppercase tracking-widest text-center">
        Sesiones reales — evidencia real
      </p>

      {/* Grid: photo left, two text cards right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">

        {/* Left — photo testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className="rounded-2xl overflow-hidden flex flex-col"
          style={cardBase}
        >
          {/* Session screenshot */}
          <div className="relative w-full overflow-hidden" style={{ maxHeight: '240px' }}>
            <img
              src={photoTestimonial.sessionPhoto}
              alt={`Sesión con ${photoTestimonial.name}`}
              className="w-full object-cover"
              style={{ maxHeight: '240px', objectPosition: 'center 42%' }}
            />
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

          {/* Quote */}
          <div className="p-5 flex flex-col gap-3 flex-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
            </div>
            <p className="text-sm text-white/75 leading-relaxed flex-1">"{photoTestimonial.quote}"</p>
            <div className="flex items-end justify-between flex-wrap gap-2">
              <div>
                <p className="text-sm font-bold text-white">{photoTestimonial.flag} {photoTestimonial.name}</p>
                <p className="text-[10px] text-white/35">{photoTestimonial.location} · {photoTestimonial.topic}</p>
              </div>
              <div className="flex gap-1 flex-wrap justify-end">
                {photoTestimonial.plans.map(p => (
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

        {/* Right — two text cards stacked */}
        <div className="flex flex-col gap-4">
          {textTestimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 + i * 0.1 }}
              className="rounded-2xl p-5 flex flex-col gap-3 flex-1 relative overflow-hidden"
              style={cardBase}
            >
              {/* Quote mark */}
              <span
                className="absolute top-2 right-4 text-5xl leading-none pointer-events-none select-none"
                style={{ color: 'rgba(255,255,255,0.04)', fontFamily: 'Georgia, serif' }}
              >"</span>

              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => <span key={j} className="text-amber-400 text-sm">★</span>)}
              </div>

              <p className="text-sm text-white/75 leading-relaxed flex-1">"{t.quote}"</p>

              <div className="flex items-end justify-between flex-wrap gap-2">
                <div>
                  <p className="text-sm font-bold text-white">{t.flag} {t.name}</p>
                  {t.handle && (
                    <p className="text-[10px] text-blue-400/70 font-medium">{t.handle} · {t.followers}</p>
                  )}
                  <p className="text-[10px] text-white/35">{t.location} · {t.topic}</p>
                </div>
                <span
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                  style={{ background: 'rgba(37,99,235,0.2)', color: 'rgba(147,197,253,0.9)', border: '1px solid rgba(59,130,246,0.2)' }}
                >
                  {t.plan}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
