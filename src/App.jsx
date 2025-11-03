import React, { useMemo, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Connect from './components/Connect';

const RU = {
  apply: 'Поступить',
  learnMore: 'Узнать больше',
  aboutTitle: 'О колледже',
  aboutText:
    'Основан в 1923 году, колледж в Арсеньеве готовит специалистов для авиа- и машиностроения, ИТ и современных производств. В 1970 учреждение получило статус индустриального колледжа. Сегодня — это площадка практико-ориентированного обучения с современными лабораториями, победами на WorldSkills и тесной связью с предприятиями Приморья.',
  addresses: 'Адреса',
  parallaxNote: 'Два кампуса: ул. Мира, 11 и ул. Луговая, 29-а',
  timeline: 'Интерактивная хронология',
  tl1923: 'Основание учебного заведения и первые цеха.',
  tl1970: 'Присвоение статуса индустриального колледжа.',
  tlNow: 'Современные лаборатории, цифровое производство и ИИ-инструменты.',
  programsTitle: 'Программы подготовки',
  programsBack: 'Практико-ориентированные занятия, наставничество и реальные кейсы от индустрии.',
  worldskills: 'WorldSkills — призовые места каждый год',
  studentLife: 'Студенческая жизнь',
  joinUs: 'Присоединяйся к движению',
  partnerships: 'Партнёрства',
  jobPlacement: 'Фокус на трудоустройстве выпускников',
  contact: 'Контакты',
  hours: 'Часы работы',
  lunch: 'обед',
  director: 'директор',
  admissions: 'приёмная комиссия',
  formTitle: 'Свяжитесь с нами',
  name: 'Имя',
  phone: 'Телефон',
  message: 'Сообщение',
  send: 'Отправить',
  formThanks: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
};

const EN = {
  apply: 'Apply',
  learnMore: 'Learn more',
  aboutTitle: 'About',
  aboutText:
    'Founded in 1923 in Arsenyev, the college trains specialists for aviation, machinery, IT and advanced manufacturing. In 1970 it received industrial college status. Today it offers hands-on education, modern labs, WorldSkills achievements, and strong industry ties.',
  addresses: 'Addresses',
  parallaxNote: 'Two campuses: Mira 11 and Lugovaya 29-a',
  timeline: 'Interactive timeline',
  tl1923: 'Foundation and first workshops.',
  tl1970: 'Granted industrial college status.',
  tlNow: 'Modern labs, digital manufacturing and AI tools.',
  programsTitle: 'Programs',
  programsBack: 'Practice-first learning with mentorship and real industry cases.',
  worldskills: 'WorldSkills — award-winners every year',
  studentLife: 'Student Life',
  joinUs: 'Join the movement',
  partnerships: 'Partnerships',
  jobPlacement: 'Strong focus on job placement',
  contact: 'Contact',
  hours: 'Hours',
  lunch: 'lunch',
  director: 'director',
  admissions: 'admissions',
  formTitle: 'Get in touch',
  name: 'Name',
  phone: 'Phone',
  message: 'Message',
  send: 'Send',
  formThanks: 'Thanks! We will get back to you shortly.',
};

function App() {
  const [lang, setLang] = useState('RU');
  const t = useMemo(() => (lang === 'RU' ? RU : EN), [lang]);

  return (
    <div className="min-h-screen bg-[#001F3F] text-white selection:bg-[#00BFFF]/30 selection:text-white">
      {/* Top Nav */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#001F3F]/80 backdrop-blur border-b border-[#00BFFF]/20">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-extrabold">
            <span className="h-8 w-8 grid place-items-center rounded-md bg-gradient-to-br from-[#00BFFF] to-[#C0C0C0] text-[#001F3F]">ПИК</span>
            <span className="hidden sm:block text-sm text-[#C0C0C0]">Primorsky Industrial College</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#C0C0C0]">
            <a href="#about" className="hover:text-white">{t.aboutTitle}</a>
            <a href="#programs" className="hover:text-white">{t.programsTitle}</a>
            <a href="#community" className="hover:text-white">{t.studentLife}</a>
            <a href="#contact" className="hover:text-white">{t.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang(lang === 'RU' ? 'EN' : 'RU')} className="px-3 py-1.5 rounded-md border border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-[#001F3F] transition">
              {lang}
            </button>
            <a href="#contact" className="hidden sm:inline-block px-4 py-2 rounded-md bg-[#FF4500] hover:brightness-110 font-semibold">{t.apply}</a>
          </div>
        </div>
      </header>

      <main>
        <Hero t={t} />
        <About t={t} />
        <Programs t={t} />
        <Connect t={t} />
      </main>

      <footer className="border-t border-[#00BFFF]/20 bg-[#001A36] text-[#C0C0C0]">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ПИК, Арсеньев</p>
          <p className="opacity-80">Design inspired by cutting-edge tech brands · Fast, responsive, immersive</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
