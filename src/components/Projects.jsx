export default function Projects() {
  const items = [
    {
      title: 'Transit-Oriented Development Site',
      img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Highway Realignment Survey',
      img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Coastal Floodplain Mapping',
      img: 'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Mixed-Use Urban Block',
      img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <section id="projects" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Projects</h2>
          <p className="text-blue-100/80 mt-2">A snapshot of recent work across land development and infrastructure.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p) => (
            <figure key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <img src={p.img} alt="" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
              <figcaption className="p-4 text-white/90 text-sm">{p.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
