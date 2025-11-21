import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
          <h2 className="text-3xl font-bold text-white">Get in touch</h2>
          <p className="mt-2 text-blue-100/80">Tell me about your site, scope, and timeline. I’ll respond within one business day.</p>
          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Name" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-white/30" />
              <input required placeholder="Email" type="email" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <input placeholder="Phone (optional)" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <textarea required placeholder="Project details" rows="5" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <button className="justify-self-start px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:scale-[1.02] active:scale-[0.99] transition-transform shadow">
              Send
            </button>
            {sent && <p className="text-green-200">Thanks! This form is static for now — wire it to your email later.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
