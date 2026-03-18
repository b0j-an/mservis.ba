import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Posjetite nas, nazovite ili pošaljite upit – tu smo da vam pomognemo
          </p>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-neutral-900">Informacije</h2>

            <div className="space-y-6">
              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-light p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-neutral-900">Adresa</h3>
                    <p className="text-neutral-700">Ivana Franje Jukića 11</p>
                    <p className="text-neutral-700">78000 Banja Luka</p>
                    <p className="text-neutral-600 text-sm mt-2">Bosna i Hercegovina</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-light p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-neutral-900">Telefon</h3>
                    <a
                      href="tel:+38765077071"
                      className="text-red-primary hover:text-red-dark font-semibold text-lg transition-colors"
                    >
                      +387 65 077 071
                    </a>
                    <p className="text-neutral-600 text-sm mt-1">Pozovite nas radnim danom</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-light p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-neutral-900">Email</h3>
                    <a
                      href="mailto:info@mservis.ba"
                      className="text-red-primary hover:text-red-dark font-semibold transition-colors"
                    >
                      info@mservis.ba
                    </a>
                    <p className="text-neutral-600 text-sm mt-1">Odgovaramo u najkraćem roku</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-light p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-red-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-3 text-neutral-900">Radno vrijeme</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                        <span className="text-neutral-700 font-medium">Ponedjeljak - Petak</span>
                        <span className="text-neutral-900 font-semibold">08:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                        <span className="text-neutral-700 font-medium">Subota</span>
                        <span className="text-neutral-900 font-semibold">09:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-neutral-700 font-medium">Nedjelja</span>
                        <span className="text-red-primary font-semibold">Zatvoreno</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-red-light rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <MessageSquare className="w-6 h-6 text-red-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-neutral-900">Besplatne konsultacije</h3>
                  <p className="text-neutral-700">
                    Niste sigurni u čemu je problem ili koju uslugu trebate? Kontaktirajte nas za besplatnu procjenu i savjet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-neutral-900">Lokacija</h2>

            <div className="card p-0 overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.501816875566!2d17.191105999999998!3d44.77057389999999!2m3!1f0!2f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e0319785ed9e1%3A0x515d40bf4668403c!2sm%3Aservis!5e0!3m2!1sen!2sba!4v1773778979266!5m2!1sen!2sba"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="m:servis Lokacija"
              ></iframe>
            </div>

            <div className="card bg-neutral-50">
              <div className="flex items-start space-x-3 mb-4">
                <Navigation className="w-6 h-6 text-red-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-neutral-900">Kako do nas?</h3>
                  <p className="text-neutral-700 mb-3">
                    Nalazimo se u centru Banje Luke, lako dostupni javnim prevozom i automobilom.
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=m:servis+Banja+Luka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-red-primary hover:text-red-dark font-semibold transition-colors"
                  >
                    <span>Otvori u Google Maps</span>
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
              Imate pitanje ili trebate savjet?
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Kontaktirajte nas putem telefona ili emaila, ili dođite direktno u našu radnju. Radujemo se vašoj posjeti!
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <a
                href="tel:+38765077071"
                className="card hover:border-red-primary border-2 border-transparent transition-all text-center group"
              >
                <Phone className="w-12 h-12 text-red-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-1 text-neutral-900">Pozovite</h3>
                <p className="text-sm text-neutral-600">+387 65 077 071</p>
              </a>

              <a
                href="mailto:info@mservis.ba"
                className="card hover:border-red-primary border-2 border-transparent transition-all text-center group"
              >
                <Mail className="w-12 h-12 text-red-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-1 text-neutral-900">Pošaljite email</h3>
                <p className="text-sm text-neutral-600">info@mservis.ba</p>
              </a>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=m:servis+Banja+Luka"
                target="_blank"
                rel="noopener noreferrer"
                className="card hover:border-red-primary border-2 border-transparent transition-all text-center group"
              >
                <MapPin className="w-12 h-12 text-red-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-1 text-neutral-900">Posjetite nas</h3>
                <p className="text-sm text-neutral-600">Ivana Franje Jukića 11</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-red-primary to-red-dark text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">m:servis – Vaš pouzdani partner</h2>
            <p className="text-lg mb-6 text-white/90">
              Sve što vam je potrebno za mobilne telefone – servis, prodaja, oprema i stručan savjet
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="bg-white text-red-primary px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
              >
                Pogledajte usluge
              </button>
              <button
                onClick={() => onNavigate('sales')}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Prodaja i oprema
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
