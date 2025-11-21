export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
          <h2 className="text-3xl font-bold text-white">About</h2>
          <p className="mt-4 text-blue-100/90">
            I’m a licensed land surveyor delivering precise measurements and clear documentation for design and construction. From boundary and ALTA/NSPS surveys to complex topographic and as‑built mapping, I combine field expertise with modern GNSS, robotic total stations, and drone photogrammetry.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[['10+','Years'],['500+','Projects'],['<2cm','Accuracy']].map(([k,v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-2xl font-bold text-white">{k}</div>
                <div className="text-blue-100/70 text-sm">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
