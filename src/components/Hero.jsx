import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />

      {/* Subtle aurora and grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
          <div className="absolute -inset-[10%] bg-[radial-gradient(1200px_600px_at_-10%_-20%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_400px_at_120%_120%,rgba(147,197,253,0.12),transparent)]" />
        </div>
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,transparent_0,transparent_calc(100%-1px),rgba(255,255,255,0.2)_calc(100%-1px)),linear-gradient(to_bottom,transparent_0,transparent_calc(100%-1px),rgba(255,255,255,0.2)_calc(100%-1px))] bg-[size:60px_60px]" />
      </div>

      {/* 3D scene */}
      <div className="absolute inset-0 -z-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
        <Spline scene="https://prod.spline.design/YVJd0Zr7f8Uhqg1d/scene.splinecode" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Precision Mapping & Land Surveying
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100/90">
            High‑accuracy topographic surveys, construction staking, and GIS data capture for developers, architects, and civil projects.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:scale-[1.02] active:scale-[0.99] transition-transform shadow">
              Get a Quote
            </a>
            <a href="#projects" className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/15 transition-colors">
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
