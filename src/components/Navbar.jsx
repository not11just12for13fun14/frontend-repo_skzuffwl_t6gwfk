import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-white font-semibold tracking-tight text-lg">
              Land Surveyor
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-blue-100 hover:text-white transition-colors text-sm">
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              className="md:hidden text-white/90 hover:text-white"
              aria-label="Menu"
              onClick={() => setOpen(!open)}
            >
              <Menu />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-blue-100 hover:text-white transition-colors text-sm px-3 py-2 rounded-lg hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
