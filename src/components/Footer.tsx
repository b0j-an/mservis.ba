import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-neutral-900 text-white mt-20">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img
                src="/hf_20260318_065907_7c6e0f35-3066-4f92-8e35-532786af0869.jpeg"
                alt="m:servis logo"
                className="h-16 w-auto mb-2"
              />
            </div>
            <p className="text-neutral-400 text-sm">
              Servis, prodaja i oprema za mobilne telefone. Sve na jednom mjestu.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Brzi linkovi</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-neutral-400 hover:text-red-primary transition-colors text-sm"
                >
                  Početna
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-neutral-400 hover:text-red-primary transition-colors text-sm"
                >
                  Usluge
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sales')}
                  className="text-neutral-400 hover:text-red-primary transition-colors text-sm"
                >
                  Prodaja i oprema
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('glossary')}
                  className="text-neutral-400 hover:text-red-primary transition-colors text-sm"
                >
                  Rječnik
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="text-neutral-400 hover:text-red-primary transition-colors text-sm"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-neutral-400 hover:text-red-primary transition-colors text-sm"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-red-primary mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400">
                  Ulica Kralja Petra 45<br />78000 Banja Luka
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-red-primary flex-shrink-0" />
                <a href="tel:+38765077071" className="text-neutral-400 hover:text-red-primary transition-colors">
                  +387 65 077 071
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-red-primary flex-shrink-0" />
                <a href="mailto:info@mservis.ba" className="text-neutral-400 hover:text-red-primary transition-colors">
                  info@mservis.ba
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Radno vrijeme</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-red-primary mt-0.5 flex-shrink-0" />
                <div className="text-neutral-400">
                  <div>Pon - Pet: 08:00 - 17:00</div>
                  <div>Subota: 09:00 - 14:00</div>
                  <div>Nedjelja: Zatvoreno</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-400">
          <p>&copy; {new Date().getFullYear()} m:servis. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}
