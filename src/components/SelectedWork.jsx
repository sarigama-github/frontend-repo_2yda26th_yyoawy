import { motion } from 'framer-motion'

const projects = [
  {
    name: 'ArtXtreme — Digital Art Collective',
    desc: 'A cinematic landing page blending motion, depth and expressive typography.',
    tag: 'Brand & Web',
  },
  {
    name: 'NovaDash — Analytics for Growth',
    desc: 'High-contrast dashboard marketing site with scroll-triggered storytelling.',
    tag: 'Marketing Site',
  },
  {
    name: 'OrbitPay — Fintech Experience',
    desc: 'Trust-first UI with micro-interactions and an elegant dark aesthetic.',
    tag: 'Product Site',
  },
]

export default function SelectedWork() {
  return (
    <section id="work" className="bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">Selected work</h2>
          <a href="#contact" className="text-white/70 hover:text-white text-sm">Work with us →</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs text-white/60">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {p.tag}
              </div>
              <h3 className="mt-4 text-xl font-semibold group-hover:text-white">{p.name}</h3>
              <p className="mt-2 text-white/70 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
