import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Početna' },
    { id: 'services', label: 'Usluge' },
    { id: 'sales', label: 'Prodaja i oprema' },
    { id: 'glossary', label: 'Rječnik' },
    { id: 'faq', label: 'Najčešća pitanja' },
    { id: 'contact', label: 'Kontakt' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="section-container">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center group"
          >
            <img
              src="/hf_20260318_065907_7c6e0f35-3066-4f92-8e35-532786af0869.jpeg"
              alt="m:servis logo"
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-semibold transition-colors ${
                  currentPage === item.id
                    ? 'text-red-primary'
                    : 'text-neutral-700 hover:text-red-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-neutral-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 rounded-lg font-semibold transition-colors ${
                  currentPage === item.id
                    ? 'bg-red-light text-red-primary'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
