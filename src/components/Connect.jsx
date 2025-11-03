import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Star, Factory, Phone, Mail, MapPin, Clock, Globe, Send } from 'lucide-react';

const lifeEvents = [
  {
    title: 'Зарница',
    desc: 'Военно-спортивные игры и командный дух.',
    img: 'https://images.unsplash.com/photo-1520975605369-927cdb558c53?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Волонтёрство',
    desc: 'Добрые дела в городе и округе.',
    img: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Фестивали',
    desc: 'Кухни России, концерты и праздники.',
    img: 'https://images.unsplash.com/photo-1512138664757-360e0aad5132?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Квизы',
    desc: 'Интеллектуальные состязания и викторины.',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
  },
];

const partners = [
  { name: 'Прогресс (Ка-52)', logo: 'https://dummyimage.com/200x80/c0c0c0/001F3F&text=Progress' },
  { name: 'Молочный завод', logo: 'https://dummyimage.com/200x80/c0c0c0/001F3F&text=Milk+Plant' },
  { name: 'Профессионалитет', logo: 'https://dummyimage.com/200x80/c0c0c0/001F3F&text=Professionalitet' },
];

export default function Connect({ t }) {
  const [index, setIndex] = useState(0);
  const slide = useMemo(() => lifeEvents[index], [index]);

  const next = () => setIndex((i) => (i + 1) % lifeEvents.length);
  const prev = () => setIndex((i) => (i - 1 + lifeEvents.length) % lifeEvents.length);

  return (
    <section id="community" className="relative w-full bg-[#001F3F] text-white">
      {/* Student Life Carousel */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">{t.studentLife}</h2>
          <div className="flex items-center gap-2 text-[#C0C0C0]">
            <Users className="h-5 w-5" />
            <span>{t.joinUs}</span>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-[#00BFFF]/30 bg-white/5 backdrop-blur">
          <img src={slide.img} alt={slide.title} className="h-[320px] w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold">{slide.title}</h3>
            <p className="text-[#C0C0C0]">{slide.desc}</p>
          </div>
          <button aria-label="prev" onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#001F3F]/70 border border-[#00BFFF]/40 hover:bg-[#001F3F] transition">
            <ChevronLeft />
          </button>
          <button aria-label="next" onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#001F3F]/70 border border-[#00BFFF]/40 hover:bg-[#001F3F] transition">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Partnerships */}
      <div id="partners" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex items-center gap-2 mb-6">
          <Factory className="text-[#00BFFF]" />
          <h2 className="text-2xl md:text-3xl font-extrabold">{t.partnerships}</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {partners.map((p) => (
            <div key={p.name} className="rounded-xl border border-[#C0C0C0]/30 bg-white/5 p-6 flex items-center justify-center">
              <img src={p.logo} alt={p.name} className="max-h-14 opacity-90" />
            </div>
          ))}
        </div>
        <p className="text-[#C0C0C0] mt-4 flex items-center gap-2"><Star className="h-4 w-4 text-[#00BFFF]" />{t.jobPlacement}</p>
      </div>

      {/* Contact */}
      <div id="contact" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold">{t.contact}</h2>
            <p className="text-[#C0C0C0]">{t.hours}: 8:00–17:00, {t.lunch}: 12:00–13:00</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="tel:+74236144325" className="flex items-center gap-2 p-4 rounded-xl border border-[#00BFFF]/30 bg-white/5 hover:bg-white/10 transition">
                <Phone className="text-[#00BFFF]" /> +7 (42361) 4-43-25 — {t.director}
              </a>
              <a href="tel:+74236141522" className="flex items-center gap-2 p-4 rounded-xl border border-[#00BFFF]/30 bg-white/5 hover:bg-white/10 transition">
                <Phone className="text-[#00BFFF]" /> +7 (42361) 4-15-22 — {t.admissions}
              </a>
              <a href="mailto:obraz32@mail.ru" className="flex items-center gap-2 p-4 rounded-xl border border-[#00BFFF]/30 bg-white/5 hover:bg-white/10 transition">
                <Mail className="text-[#00BFFF]" /> obraz32@mail.ru
              </a>
              <a href="https://arspik.ru" target="_blank" rel="noreferrer" className="flex items-center gap-2 p-4 rounded-xl border border-[#00BFFF]/30 bg-white/5 hover:bg-white/10 transition">
                <Globe className="text-[#00BFFF]" /> arspik.ru
              </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#00BFFF]/30">
              <iframe
                title="map"
                className="w-full h-64"
                loading="lazy"
                src="https://www.google.com/maps?q=Арсеньев,+Мира+11&output=embed"
              />
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert(t.formThanks); }} className="rounded-2xl border border-[#00BFFF]/30 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-2xl font-bold mb-4">{t.formTitle}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="bg-[#001F3F] border border-[#C0C0C0]/30 rounded-lg p-3 outline-none focus:border-[#00BFFF]" placeholder={t.name} required />
              <input type="email" className="bg-[#001F3F] border border-[#C0C0C0]/30 rounded-lg p-3 outline-none focus:border-[#00BFFF]" placeholder="Email" required />
              <input className="sm:col-span-2 bg-[#001F3F] border border-[#C0C0C0]/30 rounded-lg p-3 outline-none focus:border-[#00BFFF]" placeholder={t.phone} />
              <textarea rows={5} className="sm:col-span-2 bg-[#001F3F] border border-[#C0C0C0]/30 rounded-lg p-3 outline-none focus:border-[#00BFFF]" placeholder={t.message} required />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF4500] text-white font-semibold hover:brightness-110 transition">
              <Send className="h-4 w-4" /> {t.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
