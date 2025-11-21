import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-50 relative">
      {/* Glow backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-24 opacity-40 blur-3xl bg-[conic-gradient(at_30%_10%,rgba(59,130,246,0.15),transparent_30%),conic-gradient(at_70%_90%,rgba(147,197,253,0.12),transparent_40%)]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
        <footer className="py-12 text-center text-blue-200/70">
          © {new Date().getFullYear()} Land Surveyor • All rights reserved
        </footer>
      </main>
    </div>
  )
}

export default App
