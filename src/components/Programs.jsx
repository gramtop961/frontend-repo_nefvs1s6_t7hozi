import React from 'react';

const programs = [
  'Производство летательных аппаратов',
  'Технология машиностроения',
  'Аддитивные технологии',
  'Оператор станков',
  'Беспилотные системы',
  'Электромонтаж',
  'ИТ-системы',
  'Сетевое администрирование',
  'Автосервис',
  'Сварочные технологии',
];

export default function Programs({ t }) {
  return (
    <section id="programs" className="relative w-full bg-[#001F3F] text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">{t.programsTitle}</h2>
          <span className="text-[#C0C0C0]">{t.worldskills}</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, idx) => (
            <div key={idx} className="[perspective:1000px]">
              <div className="group relative h-40 w-full [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 rounded-xl border border-[#00BFFF]/40 bg-white/5 backdrop-blur p-6 flex items-center justify-center text-center font-semibold [backface-visibility:hidden]">
                  {p}
                </div>
                <div className="absolute inset-0 rounded-xl border border-[#C0C0C0]/30 bg-gradient-to-br from-[#00BFFF]/10 to-[#C0C0C0]/10 p-6 flex items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-sm text-[#C0C0C0]">{t.programsBack}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
