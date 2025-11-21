export default function Services() {
  const items = [
    {
      title: 'Topographic Surveys',
      desc: 'Detailed elevation and terrain mapping for design and planning.',
      img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Construction Staking',
      desc: 'Precise layout for buildings, utilities, and infrastructure.',
      img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Boundary & ALTA/NSPS',
      desc: 'Property lines, easements, and due‑diligence documentation.',
      img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
          <p className="text-blue-100/80 mt-2">Fast, accurate, and reliable field to finish.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s) => (
            <div key={s.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow hover:shadow-xl hover:shadow-blue-500/10 transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                <p className="text-blue-100/80 text-sm mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
