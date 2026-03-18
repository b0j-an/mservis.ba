export default function Glossary() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-red-primary to-red-dark text-white py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Rječnik termina – Servis i mobilni telefoni
          </h1>
          <p className="text-xl text-red-light max-w-3xl">
            Objašnjenja najčešćih pojmova vezanih za servis mobilnih telefona
          </p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-8 mb-12">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Ova stranica sadrži objašnjenja najčešćih pojmova vezanih za servis mobilnih telefona, dodatnu opremu, kupovinu i prodaju uređaja. Cilj je da korisnicima približimo usluge koje nudimo, ali i olakšamo pronalazak informacija putem pretrage.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 pb-3 border-b-2 border-red-primary">
                Osnovni servisni pojmovi
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Servis telefona</h3>
                  <p className="text-neutral-700">
                    Popravka svih vrsta kvarova na mobilnim uređajima, uključujući hardverske i softverske probleme.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Dijagnostika telefona</h3>
                  <p className="text-neutral-700">
                    Proces utvrđivanja kvara i problema na uređaju prije same popravke.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Popravka telefona</h3>
                  <p className="text-neutral-700">
                    Otklanjanje kvarova kao što su razbijen ekran, neispravna baterija ili problemi sa punjenjem.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 pb-3 border-b-2 border-red-primary">
                Hardverski kvarovi
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Zamjena ekrana</h3>
                  <p className="text-neutral-700">
                    Ugradnja novog displeja kod razbijenog ili neispravnog ekrana (touch ne radi, linije, mrlje).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Zamjena baterije</h3>
                  <p className="text-neutral-700">
                    Rješavanje problema brzog pražnjenja, gašenja ili pregrijavanja uređaja.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Konektor punjenja</h3>
                  <p className="text-neutral-700">
                    Popravka ili zamjena ulaza za punjenje kada telefon ne puni ili puni loše.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Zvučnik i mikrofon</h3>
                  <p className="text-neutral-700">
                    Popravka problema sa zvukom tokom poziva ili reprodukcije.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Kamera telefona</h3>
                  <p className="text-neutral-700">
                    Popravka ili zamjena prednje ili zadnje kamere.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Zadnje staklo</h3>
                  <p className="text-neutral-700">
                    Zamjena oštećenog zadnjeg poklopca telefona.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 pb-3 border-b-2 border-red-primary">
                Softverske usluge
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Softverska popravka</h3>
                  <p className="text-neutral-700">
                    Rješavanje problema sa sistemom, bagovima i greškama.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Instalacija aplikacija</h3>
                  <p className="text-neutral-700">
                    Postavljanje potrebnih aplikacija i alata na uređaj.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Podešavanje telefona</h3>
                  <p className="text-neutral-700">
                    Konfiguracija uređaja za optimalan rad (internet, email, aplikacije).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Otključavanje telefona</h3>
                  <p className="text-neutral-700">
                    Uklanjanje zaključavanja mreže ili uređaja.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 pb-3 border-b-2 border-red-primary">
                Podaci i transfer
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Spašavanje podataka</h3>
                  <p className="text-neutral-700">
                    Vraćanje izgubljenih slika, videa, kontakata i dokumenata.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Prebacivanje podataka</h3>
                  <p className="text-neutral-700">
                    Transfer podataka sa starog na novi telefon (Android na Android, iPhone na iPhone, Android na iPhone).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Backup podataka</h3>
                  <p className="text-neutral-700">
                    Kreiranje sigurnosne kopije podataka.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 pb-3 border-b-2 border-red-primary">
                Prodaja telefona
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Novi telefoni</h3>
                  <p className="text-neutral-700">
                    Novi, nekorišteni uređaji sa garancijom.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Polovni telefoni</h3>
                  <p className="text-neutral-700">
                    Korišteni telefoni koji su testirani i potpuno ispravni.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Otkup telefona</h3>
                  <p className="text-neutral-700">
                    Procjena i kupovina vašeg starog uređaja.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Prodaja telefona Banja Luka</h3>
                  <p className="text-neutral-700">
                    Kupovina novih i polovnih mobilnih telefona na lokalnom tržištu.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 pb-3 border-b-2 border-red-primary">
                Dodatna oprema
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Maske za telefone</h3>
                  <p className="text-neutral-700">
                    Zaštitne futrole za različite modele telefona.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Zaštitna stakla (kaljeno staklo)</h3>
                  <p className="text-neutral-700">
                    Staklena zaštita ekrana od ogrebotina i pucanja.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Zaštitne folije</h3>
                  <p className="text-neutral-700">
                    Tanka zaštita za ekran od ogrebotina.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Punjači i kablovi</h3>
                  <p className="text-neutral-700">
                    Oprema za punjenje uređaja (USB, Type-C, Lightning).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Slušalice</h3>
                  <p className="text-neutral-700">
                    Žične i bežične slušalice za telefon.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 pb-3 border-b-2 border-red-primary">
                Najčešće pretrage
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>servis telefona Banja Luka</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>popravka telefona</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>zamjena ekrana</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>zamjena baterije</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>telefon ne puni</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>ekran ne radi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>servis iPhone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>servis Samsung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>servis Xiaomi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>polovni telefoni Banja Luka</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>kupovina telefona</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>prodaja telefona</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>otkup telefona</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>mobilni telefoni cijene</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>oprema za telefone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>maske i stakla za telefone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>prebacivanje podataka telefon</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>spašavanje podataka telefon</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>instalacija aplikacija telefon</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>podešavanje telefona</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 pb-3 border-b-2 border-red-primary">
                Dodatni pojmovi
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>gdje popraviti telefon u Banjoj Luci</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>koliko košta zamjena ekrana</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>servis mobilnih telefona blizu mene</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>najbolji servis telefona Banja Luka</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>najjeftinija zamjena baterije</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>kupiti polovan telefon Banja Luka</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>gdje prodati telefon</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>koliko vrijedi moj telefon</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>kako prebaciti podatke na novi telefon</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-primary mr-2">•</span>
                    <span>kako spasiti podatke sa pokvarenog telefona</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
