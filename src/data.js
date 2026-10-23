// Saytdagi barcha matn va havolalar shu faylda.
// Biror narsani o'zgartirmoqchi bo'lsangiz - faqat shu faylni tahrirlang.

export const contacts = {
  email: 'missbadelova@gmail.com',
  // Telegram username - @ belgisisiz yozing, masalan: 'lutfiya_badelova'
  telegram: '',
  // Uzum do'kon havolasi, masalan: 'https://uzum.uz/uz/shop/...'
  uzumShop: '',
}

export const values = [
  {
    icon: 'explore',
    title: 'Qiziquvchanlik',
    text: 'Yangi bilim, konsepsiya va g‘oyalarni kashf etish, doimiy o‘rganishga ochiq bo‘lish.',
  },
  {
    icon: 'trending_up',
    title: 'Rivojlanish',
    text: 'Amaliy ko‘nikmalarni muntazam tahlil qilish, mustahkamlash va bosqichma-bosqich takomillashtirish.',
  },
  {
    icon: 'palette',
    title: 'Ijodkorlik',
    text: 'Har qanday vazifa yoki fikrni o‘ziga xos estetik va mantiqiy yondashuv bilan ifodalash.',
  },
]

export const skills = [
  { icon: 'chat_bubble_outline', title: 'Muloqot', tag: 'Universal', text: 'Fikrlarni aniq, samimiy va tushunarli ifodalash hamda hamkorlikda empatiya ko‘rsatish.' },
  { icon: 'psychology_alt', title: 'Tanqidiy fikrlash', tag: 'Tahliliy', text: 'Axborotni sinchkovlik bilan tahlil qilish, asossiz dalillarni filtrlash va xolis xulosalar chiqarish.' },
  { icon: 'troubleshoot', title: 'Muammolarni hal qilish', tag: 'Amaliy', text: 'Murakkab vaziyatlarga samarali, bosqichli va tizimli yechim ishlab chiqish.' },
  { icon: 'lightbulb', title: 'Ijodiy fikrlash', tag: 'Kreativlik', text: 'Yangicha qarashlar, nostandart g‘oyalar va noan’anaviy kompozitsiyalarni ilgari surish.' },
  { icon: 'manage_search', title: 'Tadqiqot va tahlil', tag: 'Tadqiqot', text: 'Chuqur izlanish, ishonchli manbalardan ma’lumot to‘plash va asosiy mohiyatni ajratib olish.' },
  { icon: 'smart_toy', title: 'Sun’iy intellekt vositalari', tag: 'Texnologiya', text: 'ChatGPT, Claude, Google Stitch va boshqa AI vositalari bilan kontent, dizayn va tahlil qilish.' },
]

export const knowledge = [
  { label: '01. Texnologiya', title: 'Texnologiya va SI', text: 'Zamonaviy raqamli tendensiyalar va sun’iy intellekt vositalarining hayotdagi o‘rni.' },
  { label: '02. Fikr', title: 'Psixologiya', text: 'Inson xatti-harakati, empatiya va kognitiv rivojlanish asoslari.' },
  { label: '03. Shakl', title: 'Dizayn va estetika', text: 'Vizual mutanosiblik, tipografika intizomi va toza minimalist kompozitsiya san’ati.' },
  { label: '04. Boshqaruv', title: 'Biznes va strategiya', text: 'Onlayn savdo, unit-ekonomika, maqsadlar tizimini qurish va vaqtdan unumli foydalanish.' },
  { label: '05. Muloqot', title: 'Til o‘rganish', text: 'Xorijiy tillarni tizimli o‘zlashtirish va madaniyatlararo fikr almashinuvi.' },
  { label: '06. Idrok', title: 'Shaxsiy rivojlanish', text: 'Vaqtni idora qilish, mulohaza yuritish odatlari va ichki muvozanat barqarorligi.' },
]

export const learningNow = [
  'Sun’iy intellekt: promptlar va super promptlar',
  'Dizayndan saytgacha: Stitch, React, GitHub va Vercel',
  'Marketplace tahlili va unit-ekonomika',
]

export const projects = [
  {
    featured: true,
    kind: 'Biznes loyiha',
    year: '2026',
    title: 'FEIYA Store — Uzum’dagi do‘konim',
    text: 'Ayollar sumkalari, bijuteriya va aksessuarlar do‘koni. Mahsulot tanlash, rasm va infografika tayyorlash, narx va sotuvlar tahlili — hammasini o‘zim qilaman.',
    tags: ['Onlayn savdo', 'Uzum Market', 'Marketing'],
    image: '/feiya-sumka.jpg',
    imageAlt: 'FEIYA Store: bordo rangli klassik shopper sumka',
    link: 'uzum',
  },
  {
    kind: 'Raqamli loyiha',
    year: '2026',
    title: '“Ikkinchi miya” — bilimlar bazasi',
    text: 'Obsidian’da yuritiladigan shaxsiy bilimlar bazasi: dars konspektlari, kundalik qaydlar, g‘oyalar va do‘kon bo‘yicha xulosalar bir joyda.',
    tags: ['Obsidian', 'Notetaking'],
    icon: 'neurology',
  },
  {
    kind: 'O‘quv loyiha',
    year: '2026',
    title: 'AI darslari konspektlari',
    text: 'Sun’iy intellekt kursidagi har bir dars uchun qisqa konspekt, prompt namunalari va uy vazifalari to‘plami.',
    tags: ['Sun’iy intellekt', 'Promptlar'],
    icon: 'auto_awesome',
  },
]

export const timeline = [
  {
    period: '2026 — Hozirgacha',
    badge: 'Hozirgi davr',
    current: true,
    title: 'Sun’iy intellekt kursi',
    text: 'AI vositalari bilan kontent, dizayn, tahlil va saytlar yaratishni amalda o‘rganish.',
  },
  {
    period: 'Aprel 2026',
    badge: 'Biznes',
    title: 'FEIYA Store’da birinchi sotuvlar',
    text: 'Mahsulotlar Uzum Market’ga chiqarildi, mijozlar bilan ishlash va sotuvlarni tahlil qilish boshlandi.',
  },
  {
    period: 'Mart 2026',
    badge: 'Boshlanish',
    title: 'O‘z do‘konimni ochdim',
    text: 'Yo‘nalishni belgilash, birinchi mahsulotlarni tanlash va brendni shakllantirish.',
  },
]

export const interests = [
  { icon: 'menu_book', title: 'Kitoblar va mutolaa', text: 'Tafakkurni kengaytiruvchi adabiyotlar va chuqur mulohazali non-fiction asarlar.' },
  { icon: 'psychology', title: 'Yangi g‘oyalar', text: 'Har kuni yangi qarashlar va nostandart konsepsiyalarni kashf etish zavqi.' },
  { icon: 'public', title: 'Sayohat va madaniyat', text: 'Turli dunyoqarashlar, an’analar va sokin shaharlardan ilhom olish.' },
  { icon: 'interests', title: 'San’at va estetika', text: 'Tasviriy san’at, arxitektura chiziqlari va soddalik ruhi.' },
  { icon: 'memory', title: 'Texnologiyalar', text: 'Kelajakni yaxshilik sari shakllantirayotgan raqamli innovatsiyalar.' },
  { icon: 'edit_note', title: 'Kundalik va qaydlar', text: 'Kundalik mushohadalarni yozib borish va xolis xulosa yasash.' },
]

export const navItems = [
  { id: 'bosh-sahifa', label: 'Bosh sahifa', icon: 'cottage' },
  { id: 'men-haqimda', label: 'Haqimda', icon: 'auto_stories' },
  { id: 'konikmalar', label: 'Ko‘nikmalar', icon: 'tune' },
  { id: 'loyihalar', label: 'Loyihalar', icon: 'grid_view' },
  { id: 'boglanish', label: 'Bog‘lanish', icon: 'mail' },
]
