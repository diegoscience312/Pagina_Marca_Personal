import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Worker de pdf.js servido por Vite desde el paquete pdfjs-dist
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

export default function PdfViewer({ guia, onClose }) {
  const [numPages, setNumPages] = useState(null)
  const [error, setError] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [containerWidth, setContainerWidth] = useState(700)
  const scrollRef = useRef(null)

  const abierto = Boolean(guia)

  // Medir ancho disponible para renderizar las páginas a la medida
  useEffect(() => {
    if (!abierto) return
    const update = () => {
      const w = scrollRef.current?.clientWidth ?? window.innerWidth
      setContainerWidth(Math.min(w - 24, 820))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [abierto])

  // Bloquear scroll del fondo + cerrar con Escape + resetear estado al abrir
  useEffect(() => {
    if (!abierto) return
    setNumPages(null)
    setError(false)
    setZoom(1)
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [abierto, onClose])

  return (
    <AnimatePresence>
      {abierto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col bg-black/80"
          style={{ backdropFilter: 'blur(6px)' }}
          onClick={onClose}
        >
          {/* Barra superior */}
          <div
            className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10 bg-[#0a0a0a]/80 flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm font-bold text-white truncate flex-1">{guia.titulo}</p>

            <div className="flex items-center gap-1.5 flex-shrink-0">
              {/* Zoom */}
              <button
                onClick={() => setZoom((z) => Math.max(0.6, +(z - 0.2).toFixed(1)))}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 text-base font-bold transition-colors cursor-pointer"
                aria-label="Alejar"
              >
                −
              </button>
              <button
                onClick={() => setZoom((z) => Math.min(2.4, +(z + 0.2).toFixed(1)))}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 text-base font-bold transition-colors cursor-pointer"
                aria-label="Acercar"
              >
                +
              </button>

              {/* Descargar */}
              <a
                href={guia.archivo}
                download
                className="hidden sm:flex items-center gap-1.5 px-3 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 text-xs font-semibold transition-colors no-underline"
              >
                ⬇ Descargar
              </a>

              {/* Cerrar */}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 text-lg transition-colors cursor-pointer"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Área del documento */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col items-center py-4 px-3"
            onClick={(e) => e.stopPropagation()}
          >
            <Document
              file={guia.archivo}
              externalLinkTarget="_blank"
              externalLinkRel="noopener noreferrer"
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              onLoadError={() => setError(true)}
              loading={
                <div className="text-white/50 text-sm py-20">Cargando guía…</div>
              }
              error={null}
            >
              {Array.from({ length: numPages || 0 }, (_, i) => (
                <div
                  key={i}
                  className="mb-4 rounded-lg overflow-hidden shadow-2xl"
                  style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.6)' }}
                >
                  <Page
                    pageNumber={i + 1}
                    width={containerWidth * zoom}
                    renderAnnotationLayer
                    renderTextLayer
                  />
                </div>
              ))}
            </Document>

            {error && (
              <div className="text-center py-20 px-6">
                <p className="text-white/60 text-sm mb-4">
                  No se pudo cargar la guía en el visor.
                </p>
                <a
                  href={guia.archivo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold no-underline"
                >
                  Abrir / descargar PDF →
                </a>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
