import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import SelectedWork from './components/SelectedWork'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services />
      <SelectedWork />
      <CTA />
      <footer className="bg-black/95 text-white/60 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} MudPixel — Website Design Solution</p>
          <div className="text-sm">Design language inspired by Fons Mans. Built with love.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
