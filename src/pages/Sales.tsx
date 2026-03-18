import {
  Smartphone,
  ShoppingBag,
  Shield,
  Headphones,
  Cable,
  Battery,
  CheckCircle,
  DollarSign,
  Award,
  RefreshCw,
} from 'lucide-react';

interface SalesProps {
  onNavigate: (page: string) => void;
}

export default function Sales({ onNavigate }: SalesProps) {
  const phoneServices = [
    {
      icon: Smartphone,
      title: 'Prodaja novih telefona',
      description: 'Širok izbor novih modela sa punom garancijom proizvođača',
    },
    {
      icon: Award,
      title: 'Prodaja polovnih telefona',
      description: 'Testirani i ispravni uređaji po povoljnim cijenama',
    },
    {
      icon: DollarSign,
      title: 'Otkup telefona',
      description: 'Otkupljujemo vaše stare uređaje uz fer procjenu vrijednosti',
    },
  ];

  const accessories = [
    {
      icon: Shield,
      title: 'Zaštitne maske i futrole',
      description: 'Raznovrsni modeli futrola za različite telefone – silikonske, kožne, tvrde maske',
      items: ['Silikonske maske', 'Kožne futrole', 'Tvrde zaštitne maske', 'Futrole sa postoljem'],
    },
    {
      icon: Shield,
      title: 'Kaljeno staklo i folije',
      description: 'Zaštitna stakla i folije za ekran sa savršenom prilagodbom',
      items: ['Kaljeno staklo 9H', 'Privacy staklo', 'Zaštitne folije', 'Staklo za kameru'],
    },
    {
      icon: Cable,
      title: 'Punjači i kablovi',
      description: 'Originalni i kompatibilni punjači za brzo punjenje',
      items: ['USB-C kablovi', 'Lightning kablovi', 'Micro USB kablovi', 'Brzi punjači', 'Bežični punjači'],
    },
    {
      icon: Headphones,
      title: 'Slušalice',
      description: 'Žične i bežične slušalice za svakodnevnu upotrebu',
      items: ['Bežične slušalice (TWS)', 'Bluetooth slušalice', 'Žične slušalice', 'Gaming slušalice'],
    },
    {
      icon: ShoppingBag,
      title: 'Ostala oprema',
      description: 'Dodatna oprema za potpunu funkcionalnost telefona',
      items: [
        'Držači za telefon (auto, bicikl)',
        'Power banke',
        'Memorijske kartice',
        'Adapteri i konvertori',
        'Pop socket i držači',
      ],
    },
  ];

  const buybackProcess = [
    {
      step: '1',
      title: 'Donesite uređaj',
      description: 'Posjetite nas sa telefonom koji želite prodati',
    },
    {
      step: '2',
      title: 'Procjena stanja',
      description: 'Vršimo detaljan pregled uređaja i procjenu vrednosti',
    },
    {
      step: '3',
      title: 'Ponuda cijene',
      description: 'Dobijate fer ponudu na osnovu stanja i modela',
    },
    {
      step: '4',
      title: 'Isplata',
      description: 'Ukoliko prihvatite ponudu, vršimo isplatu odmah',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Prodaja i oprema</h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Novi i polovni telefoni, otkup uređaja, te kompletna oprema za zaštitu i korištenje vašeg telefona
          </p>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Prodaja uređaja</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Kod nas možete pronaći novi ili polovni telefon, kao i prodati svoj stari uređaj
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {phoneServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="card text-center group hover:border-red-primary border-2 border-transparent">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-light rounded-full mb-4 group-hover:bg-red-primary transition-colors">
                  <Icon className="w-8 h-8 text-red-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-neutral-900">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-red-light rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-neutral-900 text-center">
              Nudimo:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-neutral-900">Novi telefoni</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Puna garancija proizvođača</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Originalno pakovanje</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Pomoć pri izboru modela</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Besplatno podešavanje</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-3 text-neutral-900">Polovni telefoni</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Detaljno testirani uređaji</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Potvrda o ispravnosti</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Povoljan odnos cijene i kvaliteta</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Garancija na prodatu opremu</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Otkup mobilnih telefona</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Želite da prodate stari telefon? Nudimo fer cijenu i brzu procjenu
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {buybackProcess.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-red-primary text-white rounded-full text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-neutral-900">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card max-w-3xl mx-auto bg-white">
            <h3 className="text-xl font-bold mb-4 text-neutral-900">Šta utiče na cijenu otkupa?</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">Model i starost telefona</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">Fizičko stanje uređaja (ogrebotine, oštećenja)</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">Ispravnost svih funkcija (ekran, baterija, kamera)</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-red-primary mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">Prisustvo originalnog pakovanja i pribora</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Dodatna oprema</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Sve što vam je potrebno za zaštitu, punjenje i korištenje telefona
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {accessories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="card">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-red-light p-3 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-red-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-neutral-900">{category.title}</h3>
                    <p className="text-neutral-600 text-sm mb-3">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-14">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <span className="text-red-primary mt-1 flex-shrink-0">•</span>
                      <span className="text-neutral-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-red-light to-white rounded-2xl p-8 border-2 border-red-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2 text-neutral-900">
                Kupovina uz popravku telefona
              </h3>
              <p className="text-neutral-700">
                Prilikom popravke možete odmah nabaviti i potrebnu opremu za zaštitu uređaja
              </p>
            </div>
            <button onClick={() => onNavigate('services')} className="btn-primary flex-shrink-0">
              Pogledajte usluge
            </button>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <RefreshCw className="w-16 h-16 text-red-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
              Kompletna usluga na jednom mjestu
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Kod nas možete pronaći i odgovarajući uređaj i opremu, bez potrebe da obilazite više lokacija. Nudimo savjetovanje pri kupovini, podešavanje novog telefona i prenos podataka sa starog uređaja.
            </p>
            <button onClick={() => onNavigate('contact')} className="btn-primary">
              Posjetite nas
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-red-primary to-red-dark text-white py-20">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Zainteresovani za kupovinu ili prodaju?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Posjetite nas u radnji ili nas kontaktirajte za više informacija o dostupnim uređajima i opremi
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-red-primary px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors shadow-lg"
            >
              Kontaktirajte nas
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Pogledajte servis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
