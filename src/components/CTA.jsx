import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur">
          <div className="max-w-2xl">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-semibold"
            >
              Ready to build something stellar?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 text-white/70"
            >
              Tell us about your idea. We’ll reply within 24 hours with a tailored plan and timeline.
            </motion.p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-3 sm:grid-cols-2">
              <input className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
              <input className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Email" type="email" />
              <input className="sm:col-span-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Company / Brand" />
              <textarea className="sm:col-span-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Project details" rows={4} />
              <button className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors">
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
