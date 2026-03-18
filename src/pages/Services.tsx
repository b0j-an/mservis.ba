import {
  Smartphone,
  Battery,
  Zap,
  Camera,
  Volume2,
  Settings,
  HardDrive,
  RefreshCw,
  Search,
  Download,
  Shield,
  Wrench,
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const mainServices = [
    {
      icon: Smartphone,
      title: 'Zamjena ekrana',
      description:
        'Vršimo zamjenu oštećenih i neispravnih ekrana za veliki broj modela telefona. Ako je ekran pukao, treperi, ne reaguje ili prikazuje mrlje i linije, možemo pomoći.',
    },
    {
      icon: Battery,
      title: 'Zamjena baterije',
      description:
        'Ako baterija kratko traje, telefon se pregrijava ili neočekivano gasi, vjerovatno je vrijeme za zamjenu.',
    },
    {
      icon: Zap,
      title: 'Konektor punjenja',
      description:
        'Problemi sa punjenjem su među najčešćim kvarovima. Popravljamo i mijenjamo konektore punjenja uz detaljno testiranje.',
    },
    {
      icon: Camera,
      title: 'Kamera i zvuk',
      description:
        'Problemi sa prednjom ili zadnjom kamerom, mikrofonom, zvučnikom ili slušalicom rješavaju se nakon precizne dijagnostike.',
    },
    {
      icon: Volume2,
      title: 'Zvučnik i mikrofon',
      description:
        'Otklanjanje problema sa zvukom poziva, reprodukcijom medija i snimanjem zvuka.',
    },
    {
      icon: Settings,
      title: 'Softver',
      description:
        'Instalacija sistema, resetovanje uređaja, uklanjanje grešaka, optimizacija rada i osnovne softverske intervencije.',
    },
    {
      icon: Search,
      title: 'Dijagnostika',
      description:
        'Ako niste sigurni u čemu je problem, nudimo pregled uređaja i procjenu potrebne popravke.',
    },
    {
      icon: Shield,
      title: 'Zaštita uređaja',
      description:
        'Ugradnja zaštitnih stakala, folija i savjetovanje o najboljim načinima zaštite vašeg telefona.',
    },
    {
      icon: Wrench,
      title: 'Ostali kvarovi',
      description:
        'Popravka tipki, senzora, WiFi i Bluetooth problema, kao i drugih tehničkih kvarova.',
    },
  ];

  const additionalServices = [
    {
      icon: Download,
      title: 'Instalacija i podešavanje',
      description:
        'Pomažemo pri instalaciji aplikacija, podešavanju sistema, email naloga i ostalih funkcija kako bi telefon bio spreman za korištenje.',
    },
    {
      icon: HardDrive,
      title: 'Spašavanje podataka',
      description:
        'U slučaju kvara ili oštećenja uređaja, pokušavamo izvući i sačuvati vaše važne podatke (slike, kontakti, dokumenti).',
    },
    {
      icon: RefreshCw,
      title: 'Prebacivanje podataka',
      description:
        'Kupili ste novi telefon? Brzo i sigurno prebacujemo sve podatke sa starog uređaja.',
    },
    {
      icon: Settings,
      title: 'Optimizacija sistema',
      description:
        'Čišćenje nepotrebnih fajlova, podešavanje postavki i optimizacija performansi za brži rad telefona.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Naše usluge</h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Kompletna podrška za vaš mobilni uređaj – od dijagnostike i popravke do instalacije i prenosa podataka
          </p>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 text-center">
            Servisne usluge
          </h2>
          <p className="text-lg text-neutral-600 text-center max-w-2xl mx-auto mb-12">
            Profesionalna popravka i održavanje mobilnih telefona svih brendova
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card group hover:border-red-primary border-2 border-transparent">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-red-light p-4 rounded-full mb-4 group-hover:bg-red-primary transition-colors">
                      <Icon className="w-8 h-8 text-red-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-neutral-900">{service.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-red-light rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-neutral-900">
            Niste sigurni u čemu je problem?
          </h3>
          <p className="text-lg text-neutral-700 mb-6 max-w-2xl mx-auto">
            Donesite uređaj na besplatnu dijagnostiku. Utvrdićemo problem i dati vam jasnu procjenu cijene i vremena popravke.
          </p>
          <button onClick={() => onNavigate('contact')} className="btn-primary">
            Zakažite besplatnu dijagnostiku
          </button>
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 text-center">
              Dodatne usluge
            </h2>
            <p className="text-lg text-neutral-600 text-center max-w-2xl mx-auto">
              Pomoć pri korištenju i održavanju vašeg uređaja
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-light rounded-full mb-4">
                    <Icon className="w-8 h-8 text-red-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-neutral-900">{service.title}</h3>
                  <p className="text-neutral-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="card max-w-3xl mx-auto bg-white">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-shrink-0 bg-red-primary p-4 rounded-full">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold mb-3 text-neutral-900">Besplatne konsultacije</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Ako niste sigurni koju uslugu trebate, nudimo osnovno savjetovanje i pomoć pri odabiru najboljeg rješenja. Bez obaveze i potpuno besplatno.
                </p>
                <button onClick={() => onNavigate('contact')} className="btn-primary">
                  Kontaktirajte nas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900 text-center">
            Kako funkcioniše proces servisa?
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 card">
              <div className="flex-shrink-0 w-10 h-10 bg-red-primary text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-neutral-900">Donesete uređaj</h3>
                <p className="text-neutral-600">
                  Posjetite nas u radnji sa vašim telefonom. Radimo svakim radnim danom.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 card">
              <div className="flex-shrink-0 w-10 h-10 bg-red-primary text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-neutral-900">Dijagnostika</h3>
                <p className="text-neutral-600">
                  Vršimo pregled i utvrđujemo tačan uzrok problema.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 card">
              <div className="flex-shrink-0 w-10 h-10 bg-red-primary text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-neutral-900">Ponuda cijene</h3>
                <p className="text-neutral-600">
                  Dobijate jasnu cijenu i procjenu vremena potrebnog za popravku.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 card">
              <div className="flex-shrink-0 w-10 h-10 bg-red-primary text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-neutral-900">Popravka</h3>
                <p className="text-neutral-600">
                  Nakon vaše saglasnosti, pristupamo profesionalnoj popravci sa kvalitetnim dijelovima.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 card">
              <div className="flex-shrink-0 w-10 h-10 bg-red-primary text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-neutral-900">Testiranje i preuzimanje</h3>
                <p className="text-neutral-600">
                  Uređaj detaljno testiramo i preuzimate ga potpuno funkcionalnog.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-red-primary to-red-dark text-white py-20">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Spremni za popravku vašeg telefona?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Kontaktirajte nas ili posjetite našu radnju za brzu i profesionalnu uslugu
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-red-primary px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors shadow-lg"
            >
              Kontaktirajte nas
            </button>
            <button
              onClick={() => onNavigate('sales')}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Pogledajte prodaju
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
