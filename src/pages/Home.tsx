import {
  Smartphone,
  Battery,
  Wrench,
  Shield,
  ShoppingBag,
  Clock,
  CheckCircle,
  Users,
  Camera,
  Volume2,
  HardDrive,
  RefreshCw,
  Settings,
  Zap,
  Heart,
  Star,
  Award,
  DollarSign,
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: Smartphone,
      title: 'Zamjena razbijenog ekrana',
      description: 'Brza zamjena oštećenog ili neispravnog displeja.',
      size: 'large',
    },
    {
      icon: Battery,
      title: 'Zamjena baterije',
      description: 'Rješenje za brzo pražnjenje, gašenje i slab rad uređaja.',
      size: 'medium',
    },
    {
      icon: Zap,
      title: 'Popravka konektora za punjenje',
      description: 'Rješavanje problema sa punjenjem telefona.',
      size: 'medium',
    },
    {
      icon: Volume2,
      title: 'Otklanjanje problema sa zvukom',
      description: 'Popravka mikrofona, zvučnika i slušalica.',
      size: 'small',
    },
    {
      icon: Camera,
      title: 'Popravka kamere',
      description: 'Zamjena neispravne prednje ili zadnje kamere.',
      size: 'small',
    },
    {
      icon: Settings,
      title: 'Softverske intervencije',
      description: 'Instalacija, ažuriranje i optimizacija sistema.',
      size: 'medium',
    },
    {
      icon: HardDrive,
      title: 'Spašavanje podataka',
      description: 'Pokušaj vraćanja slika, kontakata i dokumenata.',
      size: 'small',
    },
    {
      icon: RefreshCw,
      title: 'Prebacivanje podataka',
      description: 'Prebacivanje sa starog na novi telefon.',
      size: 'small',
    },
    {
      icon: Wrench,
      title: 'Dijagnostika kvarova',
      description: 'Detaljno utvrđivanje problema i rješenja.',
      size: 'medium',
    },
  ];

  const brands = [
    { name: 'Apple', logo: '/companies/apple.svg' },
    { name: 'Samsung', logo: '/companies/samsung.svg' },
    { name: 'Xiaomi', logo: '/companies/xiaomi.svg' },
    { name: 'Huawei', logo: '/companies/huawei.svg' },
    { name: 'Honor', logo: '/companies/honor.svg' },
    { name: 'Oppo', logo: '/companies/oppo.svg' },
    { name: 'Google', logo: '/companies/google.svg' },
    { name: 'Nokia', logo: '/companies/nokia.svg' },
    { name: 'Motorola', logo: '/companies/motorola.svg' },
  ];

  const featuredRepairs = [
    {
      icon: Smartphone,
      title: 'Zamjena ekrana',
      description: 'Ako je ekran napukao ili ne reaguje, nudimo brzu zamjenu.',
    },
    {
      icon: Battery,
      title: 'Zamjena baterije',
      description: 'Rješava probleme brzog pražnjenja i gašenja uređaja.',
    },
    {
      icon: Zap,
      title: 'Punjenje i konektor',
      description: 'Popravka problema sa punjenjem i lošim kontaktom.',
    },
    {
      icon: Settings,
      title: 'Softverski problemi',
      description: 'Rješavanje grešaka, usporenja i zaključavanja uređaja.',
    },
  ];

  const whyChooseUs = [
    {
      icon: ShoppingBag,
      title: 'Sve na jednom mjestu',
      description: 'Servis, prodaja i oprema bez obilaska više lokacija',
    },
    {
      icon: Zap,
      title: 'Brza dijagnostika',
      description: 'Precizno utvrđivanje problema u kratkom roku',
    },
    {
      icon: Shield,
      title: 'Kvalitetni dijelovi',
      description: 'Pouzdana ugradnja i provjereni materijali',
    },
    {
      icon: DollarSign,
      title: 'Transparentne cijene',
      description: 'Bez skrivenih troškova i jasna ponuda',
    },
    {
      icon: RefreshCw,
      title: 'Otkup uređaja',
      description: 'Mogućnost prodaje starog telefona',
    },
    {
      icon: Users,
      title: 'Profesionalan pristup',
      description: 'Ljubazan i stručan tim na usluzi',
    },
    {
      icon: Heart,
      title: 'Savjetovanje',
      description: 'Pomoć prije i nakon popravke',
    },
    {
      icon: CheckCircle,
      title: 'Besplatne konsultacije',
      description: 'Procjena i savjet bez obaveze',
    },
  ];

  const workSteps = [
    {
      number: '1',
      title: 'Pregled uređaja',
      description: 'Vrši se osnovna dijagnostika kako bi se utvrdio problem.',
    },
    {
      number: '2',
      title: 'Ponuda cijene',
      description: 'Dobijate jasnu cijenu i procjenu vremena popravke.',
    },
    {
      number: '3',
      title: 'Popravka',
      description: 'Servis se vrši uz kvalitetne dijelove i provjerene procedure.',
    },
    {
      number: '4',
      title: 'Testiranje',
      description: 'Uređaj se detaljno testira nakon popravke.',
    },
    {
      number: '5',
      title: 'Preuzimanje',
      description: 'Telefon preuzimate spreman za korištenje.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20">
            <div>
              <div className="inline-block bg-red-primary px-4 py-1 rounded-full text-sm font-semibold mb-6">
                Vaš pouzdani partner
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                m:servis – Servis, prodaja i oprema za mobilne telefone
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-4">
                Popravka, kupovina, prodaja i kompletna podrška za sve modele telefona.
              </p>
              <p className="text-lg text-neutral-400 mb-8">
                Sve na jednom mjestu. Brzo i pouzdano. Razbijen ekran, slaba baterija, potreban novi telefon ili dodatna oprema? Nudimo kompletno rješenje bez komplikacija.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button onClick={() => onNavigate('contact')} className="btn-primary">
                  Zatraži dijagnostiku
                </button>
                <button onClick={() => onNavigate('contact')} className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Kontaktiraj nas
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-red-primary flex-shrink-0" />
                  <span className="text-sm text-neutral-300">Besplatne konsultacije</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-red-primary flex-shrink-0" />
                  <span className="text-sm text-neutral-300">Brza dijagnostika</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-red-primary flex-shrink-0" />
                  <span className="text-sm text-neutral-300">Podrška pri kupovini</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-red-primary opacity-20 blur-3xl rounded-full"></div>
                <img
                  src="/hf_20260318_071001_278bd982-cfaf-4ba1-bd2e-60f6242250cb.jpeg"
                  alt="Servis mobilnih telefona"
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">O nama</h2>
            <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
              <p>
                U m:servisu specijalizovani smo za servisiranje mobilnih telefona svih poznatih brendova, ali i mnogo više od toga. Pored servisa, bavimo se prodajom dodatne opreme, novih i polovnih telefona, kao i otkupom uređaja.
              </p>
              <p>
                Naš cilj je da korisnicima omogućimo kompletnu uslugu na jednom mjestu – od popravke i zaštite uređaja, do kupovine, prodaje i prenosa podataka na novi telefon.
              </p>
              <p>
                Radimo sa velikim brojem kvarova – od fizičkih oštećenja do softverskih problema. Svakom uređaju pristupamo pažljivo, uz jasnu dijagnostiku i preporuku najboljeg rješenja.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/IMG_4502.JPG"
              alt="m:servis radnja"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
            <div className="mt-4 text-center text-sm text-neutral-600 italic">
              Pogledajte našu radnju i prostor u kojem radimo
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-light py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-primary rounded-full mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
              Besplatne konsultacije i pomoć pri odabiru rješenja
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Niste sigurni šta je problem sa uređajem, da li se popravka isplati ili koji telefon kupiti? Pomažemo vam da donesete pravu odluku kroz besplatne konsultacije, osnovnu procjenu problema i savjetovanje prije servisa ili kupovine.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-red-primary mt-1 flex-shrink-0" />
                <span className="text-neutral-700">Savjet prije popravke</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-red-primary mt-1 flex-shrink-0" />
                <span className="text-neutral-700">Pomoć pri kupovini telefona</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-red-primary mt-1 flex-shrink-0" />
                <span className="text-neutral-700">Procjena isplativosti popravke</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-red-primary mt-1 flex-shrink-0" />
                <span className="text-neutral-700">Preporuka odgovarajuće opreme</span>
              </div>
              <div className="flex items-start space-x-3 sm:col-span-2">
                <CheckCircle className="w-5 h-5 text-red-primary mt-1 flex-shrink-0" />
                <span className="text-neutral-700">Podrška pri podešavanju novog uređaja</span>
              </div>
            </div>

            <button onClick={() => onNavigate('contact')} className="btn-primary">
              Zatraži besplatne konsultacije
            </button>
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Naše usluge</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Kompletna podrška za vaš mobilni uređaj na jednom mjestu
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`card group hover:border-red-primary border-2 border-transparent ${
                  service.size === 'large' ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-red-light p-3 rounded-lg group-hover:bg-red-primary transition-colors">
                    <Icon className="w-6 h-6 text-red-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-neutral-900">{service.title}</h3>
                    <p className="text-neutral-600">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button onClick={() => onNavigate('services')} className="btn-primary">
            Pogledajte sve usluge
          </button>
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Prodaja i oprema</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <Smartphone className="w-8 h-8 text-red-primary" />
                <h3 className="text-2xl font-bold text-neutral-900">Mobilni telefoni</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Prodaja novih telefona</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Prodaja polovnih telefona (testirani i ispravni)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Otkup mobilnih telefona uz procjenu</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <ShoppingBag className="w-8 h-8 text-red-primary" />
                <h3 className="text-2xl font-bold text-neutral-900">Dodatna oprema</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Zaštitne maske i futrole</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Kaljeno staklo i zaštitne folije</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Punjači i kablovi</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Slušalice (žične i bežične)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Ostala oprema za svakodnevnu upotrebu</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-neutral-600 mt-8 text-lg">
            Kod nas možete pronaći i odgovarajući uređaj i opremu, bez potrebe da obilazite više lokacija.
          </p>

          <div className="text-center mt-8">
            <button onClick={() => onNavigate('sales')} className="btn-primary">
              Saznajte više o prodaji
            </button>
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Zašto odabrati nas</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-light rounded-full mb-4">
                  <Icon className="w-8 h-8 text-red-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-neutral-900">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Kako radimo</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Transparentan proces od početka do kraja
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {workSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6 card">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 text-neutral-900">{step.title}</h3>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Brendovi koje servisiramo</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-red-primary transition-all hover:shadow-lg flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Izdvojene popravke</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRepairs.map((repair, index) => {
              const Icon = repair.icon;
              return (
                <div key={index} className="card text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-light rounded-full mb-4">
                    <Icon className="w-8 h-8 text-red-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-neutral-900">{repair.title}</h3>
                  <p className="text-neutral-600 text-sm">{repair.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/hf_20260318_071002_bc1c7515-d5fd-4b9a-93ab-fc854769a56c.jpeg"
              alt="Servis kojem možete vjerovati"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
              Servis kojem možete vjerovati
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Znamo koliko vam je telefon važan u svakodnevnom životu i poslu. Zato se trudimo da svaku popravku, podešavanje ili prenos podataka uradimo brzo, pažljivo i odgovorno. Naš cilj nije samo da popravimo uređaj, nego da vam pružimo sigurnost, jasnoću i pouzdanu uslugu.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
                Posjetite našu radnju
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                U prijatnom i funkcionalnom prostoru možete dobiti informacije o servisu, kupiti telefon ili dodatnu opremu, te zatražiti pomoć oko podešavanja i prenosa podataka. Prostor treba djelovati uredno, moderno i profesionalno.
              </p>
            </div>

            <div className="relative">
              <img
                src="/IMG_4500.JPG"
                alt="m:servis radnja"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover mb-6"
              />
              <div className="rounded-2xl shadow-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.501816875566!2d17.191105999999998!3d44.77057389999999!2m3!1f0!2f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e0319785ed9e1%3A0x515d40bf4668403c!2sm%3Aservis!5e0!3m2!1sen!2sba!4v1773778979266!5m2!1sen!2sba"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="m:servis Lokacija na mapi"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-red-primary to-red-dark text-white py-20">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trebate servis, novi telefon ili savjet?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Posjetite nas, kontaktirajte nas ili zatražite procjenu problema. Pomažemo vam brzo, jasno i bez nepotrebnih komplikacija.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => onNavigate('contact')} className="bg-white text-red-primary px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors shadow-lg">
              Pošalji upit
            </button>
            <button onClick={() => onNavigate('contact')} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Zatraži konsultacije
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
