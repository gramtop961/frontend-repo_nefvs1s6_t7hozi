import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ t }) {
  return (
    <section id="home" className="relative min-h-screen w-full bg-[#001F3F] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#001F3F]/60 via-[#001F3F]/70 to-[#001F3F]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 flex flex-col items-start">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#00BFFF] to-[#C0C0C0] flex items-center justify-center font-extrabold text-[#001F3F]">
            ПИК
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Приморский индустриальный колледж
          </h1>
        </div>
        <p className="max-w-2xl text-lg sm:text-xl text-[#C0C0C0]">
          Формируя будущее: от станков к звездам
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="px-6 py-3 rounded-lg bg-[#FF4500] text-white font-semibold hover:brightness-110 transition">{t.apply}</a>
          <a href="#about" className="px-6 py-3 rounded-lg border border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-[#001F3F] transition">{t.learnMore}</a>
        </div>

        <div className="mt-10 w-full overflow-hidden">
          <div className="whitespace-nowrap animate-[ticker_18s_linear_infinite]">
            <span className="mr-10 text-[#C0C0C0]">Основан в 1923</span>
            <span className="mr-10 text-[#C0C0C0]">1000+ выпускников в год</span>
            <span className="mr-10 text-[#C0C0C0]">90% трудоустройство</span>
            <span className="mr-10 text-[#C0C0C0]">Arsenyev · Приморский край</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,191,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,191,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}
