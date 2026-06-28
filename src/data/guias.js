// ───────────────────────────────────────────────────────────────────────────
// CATÁLOGO DE GUÍAS
// ───────────────────────────────────────────────────────────────────────────
// Cada guía es un objeto. Para agregar una nueva, copia un bloque y edítalo.
//
//   titulo      → nombre que se muestra en la card
//   descripcion → 1-2 líneas de qué trata  (¡ajusta las que quieras!)
//   categoria   → debe ser una de las de "categorias" abajo
//   fecha       → 'YYYY-MM-DD'. Se usa para ordenar por "Recientes"
//   archivo     → ruta del PDF dentro de /public. Se abre en el visor DENTRO
//                 de la página (no redirige a Drive).
//   url         → (opcional) link externo en vez de "archivo" (abre en pestaña nueva)
//   destacada   → true para badge ⭐ (opcional)
//
// Para alojar un PDF nuevo: ponlo en  public/guias/  y referencia
// '/guias/nombre.pdf' aquí (sin espacios ni acentos en el nombre).
// ───────────────────────────────────────────────────────────────────────────

// Orden en que aparecen los filtros de categoría:
export const categorias = ['Claude Code', 'Contenido', 'Negocio', 'Diseño & Web', 'Recursos']

export const guias = [
  // ── Claude Code ──────────────────────────────────────────────────────────
  {
    id: 'mejores-practicas-claude',
    titulo: 'Mejores prácticas de Claude',
    descripcion: 'Consejos y buenas prácticas para sacarle el máximo provecho a Claude.',
    categoria: 'Claude Code',
    fecha: '2026-06-25',
    archivo: '/guias/mejores-practicas-claude.pdf',
    destacada: true,
  },
  {
    id: 'claude-code-desde-cero',
    titulo: 'Claude Code desde cero',
    descripcion: 'Guía completa para empezar con Claude Code partiendo de cero.',
    categoria: 'Claude Code',
    fecha: '2026-05-03',
    archivo: '/guias/claude-code-desde-cero-the-grid.pdf',
  },
  {
    id: '21-cosas-que-instalar-claude',
    titulo: '21 cosas que instalar para Claude',
    descripcion: 'Setup esencial: extensiones, herramientas y configs para sacarle el máximo a Claude.',
    categoria: 'Claude Code',
    fecha: '2026-06-11',
    archivo: '/guias/21-cosas-que-instalar-claude.pdf',
    destacada: true,
  },
  {
    id: '5-skills-claude',
    titulo: '5 Skills de Claude que debes conocer',
    descripcion: 'Las skills clave de Claude para automatizar tu trabajo.',
    categoria: 'Claude Code',
    fecha: '2026-05-09',
    archivo: '/guias/5-skills-claude-the-grid.pdf',
  },
  {
    id: 'guia-claudecode-skills',
    titulo: 'Cómo crear Skills en Claude Code',
    descripcion: 'Crea y usa tus propias skills personalizadas en Claude Code.',
    categoria: 'Claude Code',
    fecha: '2026-04-01',
    archivo: '/guias/guia-claudecode-skills.pdf',
  },
  {
    id: '7-hacks-tokens',
    titulo: '7 hacks para ahorrar tokens',
    descripcion: 'Trucos para gastar menos tokens y aprovechar mejor cada sesión.',
    categoria: 'Claude Code',
    fecha: '2026-04-20',
    archivo: '/guias/7-hacks-tokens-the-grid-v2.pdf',
  },
  {
    id: 'claude-code-routines',
    titulo: 'Rutinas en Claude Code',
    descripcion: 'Automatiza tareas recurrentes con rutinas programadas en Claude Code.',
    categoria: 'Claude Code',
    fecha: '2026-05-17',
    archivo: '/guias/claude-code-routines.pdf',
  },
  {
    id: 'claudecode-ollama',
    titulo: 'Claude Code con Ollama',
    descripcion: 'Corre modelos locales con Ollama junto a Claude Code.',
    categoria: 'Claude Code',
    fecha: '2026-04-24',
    archivo: '/guias/claudecode-ollama.pdf',
  },
  {
    id: 'alternativas-claude-code',
    titulo: 'Alternativas a Claude Code',
    descripcion: 'Otras herramientas y opciones además de Claude Code.',
    categoria: 'Claude Code',
    fecha: '2026-05-19',
    archivo: '/guias/alternativas-claude-code-the-grid.pdf',
  },
  {
    id: 'github-repos',
    titulo: '6 repos de GitHub',
    descripcion: '6 repos de GitHub más valiosos que cualquier curso de paga.',
    categoria: 'Claude Code',
    fecha: '2026-06-04',
    archivo: '/guias/github-repos-the-grid.pdf',
    destacada: true,
  },
  {
    id: 'stitch-claudecode',
    titulo: 'Stitch con Claude Code',
    descripcion: 'Cómo usar Stitch junto a Claude Code para tus proyectos.',
    categoria: 'Claude Code',
    fecha: '2026-04-28',
    archivo: '/guias/stitch-claudecode-guia.pdf',
  },
  {
    id: 'computer-use-dispatch',
    titulo: 'Configurar Computer Use y Dispatch',
    descripcion: 'Cómo configurar Computer Use y Dispatch en Claude paso a paso.',
    categoria: 'Claude Code',
    fecha: '2026-06-11',
    archivo: '/guias/como-configurar-computer-use-y-dispatch-claude.pdf',
  },
  {
    id: 'claude-cowork',
    titulo: 'Configurar Claude Cowork',
    descripcion: 'Guía para configurar y usar Claude Cowork.',
    categoria: 'Claude Code',
    fecha: '2026-06-11',
    archivo: '/guias/como-configurar-claude-cowork.pdf',
  },
  {
    id: 'claude-council',
    titulo: 'Claude Council',
    descripcion: 'Cómo usar Claude Council para que varios Claude debatan y mejoren tus respuestas.',
    categoria: 'Claude Code',
    fecha: '2026-06-18',
    archivo: '/guias/claude-council.pdf',
    destacada: true,
  },

  // ── Contenido ────────────────────────────────────────────────────────────
  {
    id: 'claude-canva',
    titulo: 'Claude + Canva',
    descripcion: 'Genera diseños y contenido combinando Claude con Canva.',
    categoria: 'Contenido',
    fecha: '2026-06-11',
    archivo: '/guias/claude-canva.pdf',
    destacada: true,
  },
  {
    id: 'carrusel-canva',
    titulo: 'Carrusel de IG con Canva',
    descripcion: 'Diseña carruseles para Instagram en Canva con ayuda de IA.',
    categoria: 'Contenido',
    fecha: '2026-06-11',
    archivo: '/guias/carrusel-de-ig-con-canva.pdf',
  },
  {
    id: 'carruselig-claude',
    titulo: 'Carruseles de IG con Claude',
    descripcion: 'Crea carruseles para Instagram usando Claude paso a paso.',
    categoria: 'Contenido',
    fecha: '2026-05-02',
    archivo: '/guias/carruselig-claude.pdf',
  },
  {
    id: 'guia-ensenar-100k',
    titulo: 'Cómo enseñar a 100k personas en tu IG',
    descripcion: 'Estrategia de contenido educativo para crecer en Instagram.',
    categoria: 'Contenido',
    fecha: '2026-06-11',
    archivo: '/guias/guia-ensenar-100k-personas-tuig.pdf',
    destacada: true,
  },
  {
    id: 'instagram-viralidad',
    titulo: 'Viralidad en Instagram con Claude',
    descripcion: 'Estrategias y prompts para viralizar tu contenido en IG.',
    categoria: 'Contenido',
    fecha: '2026-05-05',
    archivo: '/guias/instagram-viralidad-claude.pdf',
  },
  {
    id: 'contenido-viral',
    titulo: 'Contenido viral con Claude',
    descripcion: 'Ideas y prompts para crear contenido que se vuelve viral.',
    categoria: 'Contenido',
    fecha: '2026-04-22',
    archivo: '/guias/contenido-viral-claude.pdf',
  },
  {
    id: 'claude-higgsfield',
    titulo: 'Claude + Higgsfield',
    descripcion: 'Crea videos con IA combinando Claude y Higgsfield.',
    categoria: 'Contenido',
    fecha: '2026-05-08',
    archivo: '/guias/claude-higgsfield-the-grid.pdf',
  },

  // ── Negocio ──────────────────────────────────────────────────────────────
  {
    id: 'claude-small-business',
    titulo: 'Claude para pequeños negocios',
    descripcion: 'Aplica IA para hacer crecer y operar un negocio pequeño.',
    categoria: 'Negocio',
    fecha: '2026-05-18',
    archivo: '/guias/claude-small-business.pdf',
  },
  {
    id: 'marketing-ai-tools',
    titulo: 'Herramientas de marketing con IA',
    descripcion: 'Stack de herramientas de IA para potenciar tu marketing.',
    categoria: 'Negocio',
    fecha: '2026-04-21',
    archivo: '/guias/marketing-ai-tools.pdf',
  },
  {
    id: 'claude-excel-guide',
    titulo: 'Claude para Excel',
    descripcion: 'Automatiza y analiza hojas de cálculo con Claude.',
    categoria: 'Negocio',
    fecha: '2026-04-26',
    archivo: '/guias/claude-excel-guide.pdf',
  },
  {
    id: 'claude-legal-plugin',
    titulo: 'Plugin legal con Claude',
    descripcion: 'Automatiza tareas legales con un plugin de Claude.',
    categoria: 'Negocio',
    fecha: '2026-05-14',
    archivo: '/guias/claude-legal-plugin-the-grid.pdf',
  },
  {
    id: 'escala-negocio-ia',
    titulo: 'Escala tu negocio con IA',
    descripcion: 'Estrategias para hacer crecer tu negocio aprovechando la IA.',
    categoria: 'Negocio',
    fecha: '2026-06-11',
    archivo: '/guias/guia-escala-tu-negocio-con-ia.pdf',
  },
  {
    id: '10-prompts-linkedin',
    titulo: '10 Prompts para optimizar tu LinkedIn',
    descripcion: '10 prompts de Claude para mejorar tu perfil y presencia en LinkedIn.',
    categoria: 'Negocio',
    fecha: '2026-06-11',
    archivo: '/guias/guia-10-prompts-de-claude-para-optimizar-tu-linkedin-ortegoat.pdf',
  },
  {
    id: '5-prompts-cv',
    titulo: '5 Prompts para optimizar tu CV',
    descripcion: '5 prompts de Claude para mejorar tu CV y destacar en cualquier vacante.',
    categoria: 'Negocio',
    fecha: '2026-06-13',
    archivo: '/guias/guia-5-prompts-de-claude-para-optimizar-tu-cv-ortegoat.pdf',
  },
  {
    id: 'cv-imposible-de-rechazar',
    titulo: 'Haz tu CV imposible de rechazar',
    descripcion: 'Cómo usar Claude para crear un CV que destaque y sea imposible de rechazar.',
    categoria: 'Negocio',
    fecha: '2026-06-19',
    archivo: '/guias/hacer-tu-cv-imposible-de-rechazar.pdf',
    destacada: true,
  },

  // ── Diseño & Web ─────────────────────────────────────────────────────────
  {
    id: 'claude-blender',
    titulo: 'Claude + Blender',
    descripcion: 'Usa Claude para crear y automatizar en Blender (3D).',
    categoria: 'Diseño & Web',
    fecha: '2026-06-11',
    archivo: '/guias/claude-blender.pdf',
  },
  {
    id: 'paginas-scroll-animado',
    titulo: 'Páginas con scroll animado',
    descripcion: 'Crea páginas web con animaciones de scroll que impactan.',
    categoria: 'Diseño & Web',
    fecha: '2026-04-23',
    archivo: '/guias/paginas-scroll-animado-the-grid.pdf',
  },
  {
    id: 'open-design',
    titulo: 'Open Design',
    descripcion: 'Diseña interfaces y recursos visuales con herramientas open source.',
    categoria: 'Diseño & Web',
    fecha: '2026-05-04',
    archivo: '/guias/open-design-the-grid.pdf',
  },
  {
    id: 'vibiz-guia',
    titulo: 'Guía de Vibiz',
    descripcion: 'Cómo usar Vibiz para construir tu proyecto.',
    categoria: 'Diseño & Web',
    fecha: '2026-05-17',
    archivo: '/guias/vibiz-guia.pdf',
  },

  // ── Recursos ─────────────────────────────────────────────────────────────
  {
    id: 'obsidian-claude',
    titulo: 'Claude + Obsidian',
    descripcion: 'Conecta Claude con Obsidian para construir tu segundo cerebro y organizar tus notas con IA.',
    categoria: 'Recursos',
    fecha: '2026-06-28',
    archivo: '/guias/obsidian-claude-the-grid.pdf',
  },
  {
    id: '4-canales-aprender-ia',
    titulo: '4 canales para aprender IA',
    descripcion: 'Los 4 canales que sigo para mantenerme al día y aprender IA gratis.',
    categoria: 'Recursos',
    fecha: '2026-06-17',
    archivo: '/guias/4-canales-aprender-ia.pdf',
    destacada: true,
  },
  {
    id: 'the-grid-13-pasos',
    titulo: '13 pasos para configurar Claude',
    descripcion: 'El orden que hubiera querido tener el día que empecé a usar Claude de verdad.',
    categoria: 'Claude Code',
    fecha: '2026-04-19',
    archivo: '/guias/the-grid-13-pasos-2.pdf',
  },
  {
    id: 'certificaciones-thegrid',
    titulo: '5 certificaciones que cambian tu CV',
    descripcion: 'Las 5 certificaciones con más peso en un CV en 2026: gratis, reconocidas y para cualquier carrera.',
    categoria: 'Recursos',
    fecha: '2026-05-01',
    archivo: '/guias/certificaciones-thegrid.pdf',
  },
  {
    id: 'certificaciones-gratis',
    titulo: 'Certificaciones gratis',
    descripcion: 'Lista de certificaciones gratuitas que puedes obtener.',
    categoria: 'Recursos',
    fecha: '2026-04-18',
    archivo: '/guias/certificaciones-gratis.pdf',
  },
  {
    id: 'prompt-razon',
    titulo: 'Prompt: cuando Claude te da la razón',
    descripcion: 'Claude siempre te dice que tienes razón, hasta cuando te equivocas. El prompt de una línea que lo cambia.',
    categoria: 'Recursos',
    fecha: '2026-06-11',
    archivo: '/guias/prompt-razon.pdf',
    destacada: true,
  },
  {
    id: 'prompt-honestidad',
    titulo: 'Prompt: Honestidad y precisión',
    descripcion: 'Prompt para que Claude sea más honesto y preciso en sus respuestas.',
    categoria: 'Recursos',
    fecha: '2026-06-11',
    archivo: '/guias/prompt-honestidad-y-precision-para-claude.pdf',
    destacada: true,
  },
]
