import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ns1MlpZQDFS29uiL/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.8)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            MudPixel — Website Design Solution
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.08]">
            We craft immersive, high-converting websites with cosmic precision
          </h1>

          <p className="mt-6 text-white/70 text-base sm:text-lg leading-relaxed">
            Sleek interactions, 3D depth, and brand-first storytelling. Inspired by Fons Mans, engineered for performance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors">
              Start your project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-6 py-3 text-sm font-semibold hover:bg-white/20 transition-colors">
              See our work
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.15),transparent_60%)]" />
    </section>
  )
}
