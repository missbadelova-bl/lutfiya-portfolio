import { useEffect, useState } from 'react'
import {
  contacts,
  values,
  skills,
  knowledge,
  learningNow,
  projects,
  timeline,
  interests,
  navItems,
} from './data.js'

const Icon = ({ name, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
    {name}
  </span>
)

const uzumUrl = contacts.uzumShop || null
const telegramUrl = contacts.telegram ? `https://t.me/${contacts.telegram.replace(/^@/, '')}` : null

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mb-space-lg max-w-2xl">
      <span className="font-sans text-label-sm text-secondary uppercase tracking-widest">{eyebrow}</span>
      <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mt-space-xs mb-space-sm">
        {title}
      </h2>
      {text && <p className="text-body-md text-on-surface-variant leading-relaxed">{text}</p>}
    </div>
  )
}

function Section({ id, tinted, children }) {
  return (
    <section id={id} className={`py-space-xl md:py-20 ${tinted ? 'bg-surface-container-low/60' : ''}`}>
      <div className="mx-auto max-w-5xl px-margin-mobile md:px-8">{children}</div>
    </section>
  )
}

function Header({ active }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="mx-auto max-w-5xl h-16 px-margin-mobile md:px-8 flex items-center justify-between">
        <a href="#bosh-sahifa" className="flex items-center gap-space-sm">
          <span className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-serif text-[15px]">
            LB
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-headline-sm text-primary tracking-tight">Lutfiya Badelova</span>
            <span className="text-label-sm text-on-surface-variant uppercase tracking-wider">Shaxsiy portfolio</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6" aria-label="Asosiy menyu">
          {navItems.slice(1).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-label-md uppercase tracking-wider transition-colors ${
                active === item.id ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function BottomNav({ active }) {
  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(32,33,31,0.04)]"
      aria-label="Pastki menyu"
    >
      <div className="flex h-16 px-space-xs">
        {navItems.map((item) => {
          const isActive = active === item.id
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? 'page' : undefined}
              className={`flex-1 flex flex-col items-center justify-center min-h-[44px] border-t-2 transition-colors ${
                isActive ? 'text-primary border-secondary font-medium' : 'text-on-surface-variant border-transparent'
              }`}
            >
              <Icon name={item.icon} className="text-[20px]" />
              <span className="text-label-sm mt-0.5 tracking-tight truncate max-w-full px-1">{item.label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="bosh-sahifa" className="pt-24 md:pt-32 pb-space-xl md:pb-20">
      <div className="mx-auto max-w-5xl px-margin-mobile md:px-8 grid md:grid-cols-2 gap-space-lg md:gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 mb-space-sm px-2.5 py-1 rounded bg-secondary-container/50">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-label-sm text-primary tracking-widest uppercase">Shaxsiy portfolio · Lutfiya Badelova</span>
          </div>
          <h1 className="font-serif text-headline-xl-mobile md:text-headline-xl text-primary tracking-tight mt-space-xs mb-space-sm">
            Bilimlarim, tajribam va g‘oyalarim — mening hikoyam.
          </h1>
          <p className="text-body-md md:text-body-lg text-on-surface-variant mb-space-lg leading-relaxed">
            Men o‘rganayotgan, yaratayotgan va rivojlantirayotgan yo‘nalishlarimni bir joyda jamlayman. Bu makon —
            bilimlarim, qiziqishlarim va shaxsiy o‘sish yo‘limning aksidir.
          </p>
          <div className="flex flex-col sm:flex-row gap-space-sm mb-space-lg">
            <a
              href="#loyihalar"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded bg-primary text-on-primary text-label-md uppercase tracking-wider shadow-sm hover:opacity-90 active:scale-[0.99] transition"
            >
              Portfolio bilan tanishish
              <Icon name="arrow_downward" className="text-[18px] ml-1.5" />
            </a>
            <a
              href="#men-haqimda"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded bg-surface-container-lowest text-primary text-label-md uppercase tracking-wider shadow-soft hover:bg-surface-container-low transition-colors"
            >
              Men haqimda
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="spa" className="text-[16px] text-secondary" />
            <span className="text-body-sm text-on-surface-variant italic">Doimiy o‘sish. Yangi g‘oyalar. Mazmunli natijalar.</span>
          </div>
        </div>

        <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-lift">
          <div className="aspect-[4/3] rounded-lg bg-surface-container-low relative flex flex-col justify-between p-space-md overflow-hidden">
            <svg className="absolute inset-0 w-full h-full text-secondary-container pointer-events-none" fill="none" viewBox="0 0 340 255" aria-hidden="true">
              <circle cx="270" cy="50" r="110" stroke="currentColor" strokeDasharray="3 4" strokeWidth="1.2" />
              <path d="M-20 280 C60 210 130 140 260 270" stroke="currentColor" strokeWidth="1.5" />
              <rect height="150" rx="4" stroke="currentColor" strokeWidth="1" width="120" x="30" y="40" />
              <circle cx="90" cy="115" fill="currentColor" fillOpacity="0.35" r="32" />
            </svg>
            <div className="relative flex items-center justify-between">
              <span className="text-label-sm uppercase tracking-widest text-secondary">Tafakkur &amp; Dizayn</span>
              <span className="text-label-sm text-on-surface-variant font-mono">2026</span>
            </div>
            <div className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-surface-container-high/70 backdrop-blur-sm flex items-center justify-center text-primary mb-2 shadow-sm">
                <Icon name="flare" className="text-[28px]" />
              </div>
              <span className="font-serif text-headline-md text-primary tracking-tight">Estetik makon</span>
              <span className="text-body-sm text-on-surface-variant mt-1">G‘oyalarni tartibli shaklga solish san’ati</span>
            </div>
            <div className="relative inline-flex items-center gap-1.5 self-center px-3 py-1 rounded bg-secondary-container/70 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="text-label-sm text-primary tracking-wide">Lutfiya Badelova · Shaxsiy makon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="men-haqimda" tinted>
      <SectionHeader
        eyebrow="01 / Haqimda"
        title="Har bir bilim — yangi imkoniyat."
        text="Men uchun rivojlanish — yangi narsalarni o‘rganish, bilimlarni amalda qo‘llash va o‘z qarashlarimni kengaytirib borish jarayoni. Hozir o‘qiyapman va o‘z biznesimni yuritaman. Ushbu portfolio qiziqishlarim, o‘rganganlarim va amalga oshirayotgan ishlarimni bir joyda namoyish etadi."
      />
      <div className="grid gap-space-sm md:grid-cols-3 md:gap-space-md">
        {values.map((v, i) => (
          <div key={v.title} className="bg-surface-container-lowest p-space-md rounded-xl shadow-soft">
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-serif text-headline-md text-secondary italic">0{i + 1}</span>
              <Icon name={v.icon} className="text-secondary text-[22px]" />
            </div>
            <h3 className="font-serif text-headline-sm text-primary mb-1">{v.title}</h3>
            <p className="text-body-sm text-on-surface-variant">{v.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="konikmalar">
      <SectionHeader
        eyebrow="02 / Imkoniyatlar"
        title="Bilimni amaliy ko‘nikmaga aylantirish."
        text="Murakkab vaziyatlarda samarali ish tutishga ko‘maklashuvchi shaxsiy va intellektual ustunliklar."
      />
      <div className="grid gap-space-sm md:grid-cols-2 md:gap-space-md">
        {skills.map((s) => (
          <div key={s.title} className="bg-surface-container-lowest p-space-md rounded-xl shadow-soft flex items-start gap-space-md">
            <div className="w-10 h-10 rounded-lg bg-secondary-container/50 flex items-center justify-center shrink-0 text-secondary">
              <Icon name={s.icon} className="text-[20px]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <h3 className="text-title-md text-primary">{s.title}</h3>
                <span className="text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant shrink-0">{s.tag}</span>
              </div>
              <p className="text-body-sm text-on-surface-variant">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Knowledge() {
  return (
    <Section id="bilimlar" tinted>
      <SectionHeader
        eyebrow="03 / Qomus"
        title="Qiziqishdan bilimga."
        text="Mening doimiy diqqat markazimda bo‘lgan, ilmiy va amaliy o‘rganish yo‘nalishlarim."
      />
      <div className="grid gap-space-sm sm:grid-cols-2 md:grid-cols-3 md:gap-space-md mb-space-xl">
        {knowledge.map((k) => (
          <div key={k.title} className="bg-surface-container-lowest p-space-md rounded-xl shadow-soft">
            <span className="block text-label-sm uppercase tracking-wider text-secondary mb-1">{k.label}</span>
            <h3 className="text-title-md text-primary mb-1">{k.title}</h3>
            <p className="text-body-sm text-on-surface-variant">{k.text}</p>
          </div>
        ))}
      </div>
      <div className="bg-surface-container-lowest p-space-md md:p-6 rounded-xl shadow-lift">
        <div className="flex items-center gap-2 mb-space-md">
          <Icon name="auto_stories" className="text-secondary text-[20px]" />
          <span className="font-serif text-headline-sm text-primary">Hozir o‘rganayotganlarim</span>
        </div>
        <ul className="flex flex-col gap-space-sm">
          {learningNow.map((item) => (
            <li key={item} className="p-space-sm px-3 rounded bg-surface-container-low/70 flex items-center justify-between gap-2">
              <span className="flex items-center gap-2.5 min-w-0">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                <span className="text-body-sm text-primary">{item}</span>
              </span>
              <span className="text-label-sm text-secondary font-mono shrink-0">2026</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

function ProjectCard({ p }) {
  const href = p.link === 'uzum' ? uzumUrl : null
  return (
    <article
      className={`bg-surface-container-lowest rounded-xl p-space-md shadow-soft flex flex-col ${
        p.featured ? 'md:col-span-2 md:grid md:grid-cols-2 md:gap-8 md:items-center shadow-lift' : ''
      }`}
    >
      <div
        className={`w-full rounded-lg overflow-hidden relative mb-space-md bg-surface-container ${
          p.featured ? 'aspect-[4/5] md:mb-0' : 'aspect-[16/9]'
        }`}
      >
        {p.image ? (
          <img src={p.image} alt={p.imageAlt} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-container-low to-secondary-container/60">
            <Icon name={p.icon} className="text-[44px] text-secondary" />
          </div>
        )}
        {p.featured && (
          <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur-md text-label-sm text-primary uppercase tracking-wider">
            Asosiy loyiha
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <span className="text-label-sm text-secondary uppercase tracking-wider">{p.kind}</span>
          <span className="text-label-sm text-on-surface-variant font-mono">{p.year}</span>
        </div>
        <h3 className={`font-serif text-primary mb-2 ${p.featured ? 'text-headline-sm md:text-headline-md' : 'text-headline-sm'}`}>
          {p.title}
        </h3>
        <p className="text-body-sm text-on-surface-variant mb-space-md">{p.text}</p>
        <div className="flex flex-wrap gap-1.5 mb-space-md">
          {p.tags.map((t) => (
            <span
              key={t}
              className={`text-label-sm px-2.5 py-1 rounded ${
                p.featured ? 'bg-secondary-container/50 text-primary' : 'bg-surface-container text-on-surface-variant'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center self-start px-5 py-3 rounded bg-primary text-on-primary text-label-md uppercase tracking-wider hover:opacity-90 transition"
          >
            Do‘konga o‘tish
            <Icon name="arrow_outward" className="text-[16px] ml-1.5" />
          </a>
        ) : (
          <a
            href="#boglanish"
            className="inline-flex items-center self-start text-primary text-label-md uppercase tracking-wider hover:text-secondary transition-colors"
          >
            Batafsil so‘rash
            <Icon name="arrow_forward" className="text-[16px] ml-1" />
          </a>
        )}
      </div>
    </article>
  )
}

function Projects() {
  return (
    <Section id="loyihalar">
      <SectionHeader
        eyebrow="04 / Amaliyot"
        title="G‘oyalar amaliyotga aylanganda."
        text="Har bir loyiha — muayyan savolga berilgan mantiqiy va estetik javobdir."
      />
      <div className="grid gap-space-md md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  )
}

function Timeline() {
  return (
    <Section id="tajriba" tinted>
      <SectionHeader
        eyebrow="05 / Bosqichlar"
        title="Har bir bosqich — yangi tajriba."
        text="Vaqt o‘tishi bilan sayqallanib borayotgan bilim, tajriba va izlanishlar yo‘li."
      />
      <ol className="relative pl-6 flex flex-col gap-space-md max-w-3xl">
        <span className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-surface-container-highest" aria-hidden="true" />
        {timeline.map((t) => (
          <li key={t.title} className="relative bg-surface-container-lowest p-space-md rounded-xl shadow-soft">
            <span
              className={`absolute -left-[27px] top-4 w-3.5 h-3.5 rounded-full ring-4 ring-surface ${
                t.current ? 'bg-secondary' : 'bg-outline-variant'
              }`}
              aria-hidden="true"
            />
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className={`text-label-sm uppercase tracking-wider font-mono ${t.current ? 'text-secondary' : 'text-on-surface-variant'}`}>
                {t.period}
              </span>
              <span
                className={`text-label-sm px-2 py-0.5 rounded ${
                  t.current ? 'bg-secondary-container/50 text-primary' : 'bg-surface-container text-on-surface-variant'
                }`}
              >
                {t.badge}
              </span>
            </div>
            <h3 className="text-title-md text-primary mb-1">{t.title}</h3>
            <p className="text-body-sm text-on-surface-variant">{t.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-space-lg p-space-md rounded-xl bg-surface-container-high/50 flex items-start gap-2.5 max-w-3xl">
        <Icon name="format_quote" className="text-secondary text-[20px] shrink-0 mt-0.5" />
        <p className="text-body-sm text-on-surface italic leading-relaxed">
          Har bir o‘rganilgan mavzu va amalga oshirilgan kichik qadam ham katta rivojlanish yo‘lining ajralmas qismidir.
        </p>
      </div>
    </Section>
  )
}

function Interests() {
  return (
    <Section id="qiziqishlar">
      <SectionHeader
        eyebrow="06 / Ilhom"
        title="Meni ilhomlantiradigan narsalar."
        text="Hayot ritmini boyituvchi, tafakkurga yangi tus beruvchi mashg‘ulotlar va qiziqishlar."
      />
      <div className="grid gap-space-sm sm:grid-cols-2 md:grid-cols-3 md:gap-space-md">
        {interests.map((it) => (
          <div key={it.title} className="bg-surface-container-lowest p-space-md rounded-xl shadow-soft flex items-start gap-space-sm">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high/70 flex items-center justify-center shrink-0 text-primary">
              <Icon name={it.icon} className="text-[20px]" />
            </div>
            <div>
              <h3 className="text-title-md text-primary mb-1">{it.title}</h3>
              <p className="text-body-sm text-on-surface-variant">{it.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function ContactForm() {
  const [sent, setSent] = useState(false)

  // Server kerak emas: forma tashrif buyuruvchining pochta ilovasini tayyor xat bilan ochadi.
  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = `Portfolio sayt orqali xabar — ${data.get('name')}`
    const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`
    window.location.href = `mailto:${contacts.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    e.currentTarget.reset()
  }

  const field =
    'w-full px-4 py-3 rounded bg-surface-container-low text-primary placeholder:text-on-surface-variant/60 text-body-md outline-none border border-transparent focus:border-outline-variant focus:bg-surface-container-lowest transition-colors'

  return (
    <form onSubmit={onSubmit} className="bg-surface-container-lowest p-space-md md:p-6 rounded-xl shadow-lift flex flex-col gap-space-md">
      <label className="flex flex-col">
        <span className="text-label-sm text-primary uppercase tracking-wider mb-1.5">Ismingiz</span>
        <input name="name" type="text" required placeholder="Ismingizni yozing" className={field} />
      </label>
      <label className="flex flex-col">
        <span className="text-label-sm text-primary uppercase tracking-wider mb-1.5">Elektron pochtangiz</span>
        <input name="email" type="email" required placeholder="example@domain.uz" className={field} />
      </label>
      <label className="flex flex-col">
        <span className="text-label-sm text-primary uppercase tracking-wider mb-1.5">Xabaringiz</span>
        <textarea name="message" required rows="4" placeholder="Fikrlaringiz yoki taklifingizni yozing..." className={`${field} resize-none`} />
      </label>
      <button
        type="submit"
        className="w-full py-3.5 px-6 rounded bg-primary text-on-primary text-label-md uppercase tracking-wider shadow-sm hover:opacity-90 active:scale-[0.99] transition flex items-center justify-center gap-2"
      >
        Xabar yuborish
        <Icon name="send" className="text-[18px]" />
      </button>
      {sent && (
        <p className="p-3 rounded bg-secondary-container text-on-secondary-container text-body-sm text-center" role="status">
          Rahmat! Pochta ilovangizda xat tayyor — “Yuborish”ni bosing.
        </p>
      )}
    </form>
  )
}

function Contact() {
  const links = [
    { label: 'Email', icon: 'mail', href: `mailto:${contacts.email}`, text: contacts.email },
    telegramUrl && { label: 'Telegram', icon: 'send', href: telegramUrl, text: `@${contacts.telegram.replace(/^@/, '')}` },
    uzumUrl && { label: 'Uzum do‘kon', icon: 'storefront', href: uzumUrl, text: 'FEIYA Store' },
  ].filter(Boolean)

  return (
    <Section id="boglanish" tinted>
      <div className="grid md:grid-cols-2 gap-space-lg md:gap-12">
        <div>
          <SectionHeader
            eyebrow="07 / Muloqot"
            title="Fikr almashishga doim ochiqman."
            text="Savol, taklif yoki hamkorlik g‘oyangiz bormi? Shakl orqali yozing yoki quyidagi manzillar orqali bog‘laning."
          />
          <div className="flex flex-col gap-space-sm">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-soft hover:bg-surface-container transition-colors"
              >
                <span className="w-10 h-10 rounded-lg bg-secondary-container/50 flex items-center justify-center text-secondary shrink-0">
                  <Icon name={l.icon} className="text-[20px]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-label-sm uppercase tracking-wider text-on-surface-variant">{l.label}</span>
                  <span className="block text-body-md text-primary truncate">{l.text}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="px-margin-mobile pt-space-xl pb-28 md:pb-space-xl flex flex-col items-center text-center">
      <span className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-space-sm shadow-sm">
        <Icon name="spa" className="text-[20px]" />
      </span>
      <span className="font-serif text-headline-sm text-primary tracking-tight mb-1">Lutfiya Badelova</span>
      <span className="text-body-sm text-secondary italic mb-space-md">Bilim, izlanish va rivojlanish.</span>
      <div className="flex flex-wrap justify-center gap-4 mb-space-lg text-on-surface-variant text-label-sm">
        <a className="hover:text-primary transition-colors" href="#men-haqimda">Haqimda</a>
        <span aria-hidden="true">·</span>
        <a className="hover:text-primary transition-colors" href="#loyihalar">Loyihalar</a>
        <span aria-hidden="true">·</span>
        <a className="hover:text-primary transition-colors" href="#boglanish">Bog‘lanish</a>
      </div>
      <div className="w-12 h-0.5 bg-surface-container-highest mb-space-md" />
      <p className="text-label-sm text-on-surface-variant/80">© 2026 Lutfiya Badelova. Barcha huquqlar himoyalangan.</p>
    </footer>
  )
}

const sectionIds = navItems.map((n) => n.id)

export default function App() {
  const active = useActiveSection(sectionIds)
  return (
    <>
      <Header active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Knowledge />
        <Projects />
        <Timeline />
        <Interests />
        <Contact />
      </main>
      <Footer />
      <BottomNav active={active} />
    </>
  )
}
