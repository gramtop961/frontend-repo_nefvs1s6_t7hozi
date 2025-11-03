import React from 'react';

export default function About({ t }) {
  return (
    <section id="about" className="relative w-full bg-[#001F3F] text-white py-24">
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="h-64 bg-gradient-to-r from-[#00BFFF]/10 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t.aboutTitle}</h2>
            <p className="text-[#C0C0C0] leading-relaxed mb-6">
              {t.aboutText}
            </p>
            <div className="space-y-2 text-[#C0C0C0]">
              <p><span className="text-white font-semibold">{t.addresses}:</span> Мирa 11 · Луговая 29-а</p>
              <p className="text-sm">{t.parallaxNote}</p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-[#00BFFF]/30 p-6 bg-white/5 backdrop-blur">
              <h3 className="text-xl font-bold mb-4">{t.timeline}</h3>
              <ol className="relative border-s-2 border-[#00BFFF]/40 ps-6 space-y-6">
                <li>
                  <div className="absolute -start-3.5 mt-1.5 h-3 w-3 rounded-full bg-[#00BFFF]" />
                  <p className="text-white font-semibold">1923</p>
                  <p className="text-[#C0C0C0]">{t.tl1923}</p>
                </li>
                <li>
                  <div className="absolute -start-3.5 mt-1.5 h-3 w-3 rounded-full bg-[#00BFFF]" />
                  <p className="text-white font-semibold">1970</p>
                  <p className="text-[#C0C0C0]">{t.tl1970}</p>
                </li>
                <li>
                  <div className="absolute -start-3.5 mt-1.5 h-3 w-3 rounded-full bg-[#00BFFF]" />
                  <p className="text-white font-semibold">Наши дни</p>
                  <p className="text-[#C0C0C0]">{t.tlNow}</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
