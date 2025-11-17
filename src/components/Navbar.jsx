import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500" />
              <span className="text-white text-base sm:text-lg font-semibold tracking-tight">MudPixel</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition-colors">
                Start a Project
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="block text-center rounded-lg px-3 py-2 font-medium bg-white/10 text-white hover:bg-white/20">
                Start a Project
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
