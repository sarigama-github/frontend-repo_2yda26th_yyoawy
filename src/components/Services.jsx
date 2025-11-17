import { motion } from 'framer-motion'
import { Sparkles, Rocket, GaugeCircle } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Brand-first design',
    desc: 'Minimal, elegant and personality-driven visuals that make your product unforgettable.'
  },
  {
    icon: Rocket,
    title: 'Webflow & React builds',
    desc: 'From marketing sites to product experiences — shipped fast, smooth and scalable.'
  },
  {
    icon: GaugeCircle,
    title: 'Performance obsessed',
    desc: 'We obsess over load times, semantics and accessibility so every visit feels effortless.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <s.icon className="h-6 w-6 text-white/80" />
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
