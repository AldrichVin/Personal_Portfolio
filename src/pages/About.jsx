import React from 'react'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-6">
        <h2 className="text-3xl font-extrabold">About</h2>
        <p className="mt-2 text-slate-600">I build web products and data features used by real people. I focus on fast experiences and clear design.</p>
      </header>

      <section className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-slate-500 uppercase">Selected highlights</h4>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
            <li>Monash Macathon — Monash Mates: Android app with recommender, real-time chat, auth; Kotlin & Firebase.</li>
            <li>FIT3163 Data Project — NBA Ranking Dashboard: Flask backend, Python/R pipelines, Chart.js visualizations.</li>
            <li>Operations & analytics experience at Veve Clothing — inventory systems and procurement insights.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-500 uppercase">Education</h4>
          <div className="mt-2 text-slate-700">Monash University — BCompSc (expected Dec 2025)</div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-500 uppercase">Skills</h4>
          <p className="mt-2 text-slate-700">Python · Java · JavaScript · SQL · React · Flask · Firebase · Docker · Data & ML · Visualisation</p>
        </div>

        <div>
          <a className="inline-block mt-2 rounded-md px-4 py-2 bg-slate-900 text-white" href="/assets/resume.pdf" download>Download resume</a>
        </div>

        <div className="pt-6 border-t border-slate-100 text-sm text-slate-500">
          Melbourne, VIC • 0480 607 563 • <a className="text-slate-700" href="mailto:aldrichvin040205@gmail.com">aldrichvin040205@gmail.com</a>
        </div>
      </section>
    </div>
  )
}
