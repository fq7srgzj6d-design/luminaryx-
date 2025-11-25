import React, { useState, useEffect } from 'react';
import { 
  Lightbulb, 
  Briefcase, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Mail, 
  Phone, 
  ChevronRight,
  Sparkles,
  Gift,
  MessageCircle
} from 'lucide-react';

// Imágenes locales
import parejaLineArt   from './assets/pareja1.jpg.jpeg';
import anime3D         from './assets/personajeGoku.png.jpeg';
import mascotaGeo      from './assets/mascota.jpeg.webp';
import logoCorporativo from './assets/logoEmpresa.png.jpeg';
import trofeoEquipo    from './assets/trofeo.png.png';
import medicoDentista  from './assets/dentista.png.jpeg';
const LuminaryX = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = '5241126327';
  const generateWhatsAppLink = (productName) => {
    const message = `Hola LuminaryX, estoy interesado en una lámpara personalizada estilo: ${productName}. ¿Podrían darme más información?`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const categories = ['Todos', 'Parejas & Familia', 'Anime & Gamer', 'Mascotas', 'Logos & Negocios'];

  const products = [
    {
      id: 1,
      title: 'Retrato Pareja Line Art',
      category: 'Parejas & Familia',
      price: '$590 MXN',
      image:
        'https://images.unsplash.com/photo-1521216291727-573201482e21?auto=format&fit=crop&w=900&q=80',
      description:
        'Inmortaliza un momento especial con tu persona favorita. Diseño minimalista basado en tu foto real.',
      glowColor: 'cyan'
    },
    {
      id: 2,
      title: 'Personaje Anime 3D',
      category: 'Anime & Gamer',
      price: '$590 MXN',
      image:
        'https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?auto=format&fit=crop&w=900&q=80',
      description:
        'Tu personaje favorito cobrando vida con luz LED y efecto 3D.',
      glowColor: 'purple'
    },
    {
      id: 3,
      title: 'Mascota',
      category: 'Mascotas',
      price: '$590 MXN',
      image:
        'https://images.unsplash.com/photo-1537151625747-768eb6cf92b6?auto=format&fit=crop&w=900&q=80',
      description:
        'Un homenaje luminoso a tu mejor amigo peludo. Estilo moderno y adorable.',
      glowColor: 'green'
    },
    {
      id: 4,
      title: 'Logotipo Corporativo',
      category: 'Logos & Negocios',
      price: '$590 MXN',
      image:
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80',
      description:
        'Destaca tu marca en tu escritorio o recepción con tu logo iluminado en acrílico.',
      glowColor: 'blue'
    },
    {
      id: 5,
      title: 'Escudo Equipo',
      category: 'Anime & Gamer',
      price: '$590 MXN',
      image:
        'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=900&q=80',
      description:
        'Para los campeones. Escudos de equipos de fútbol, e-sports o trofeos personalizados.',
      glowColor: 'cyan'
    },
    {
      id: 6,
      title: 'Profesiones',
      category: 'Logos & Negocios',
      price: '$590 MXN',
      image:
        'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=80',
      description:
        'El regalo perfecto para dentistas, doctores y profesionales. Decoración técnica y elegante.',
      glowColor: 'pink'
    }
  ];

  const filteredProducts =
    activeCategory === 'Todos'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-purple-500/50 selection:text-white">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-white/5 py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-950 shadow-[0_0_15px_rgba(255,255,255,0.4)] relative group cursor-pointer">
                <div className="w-6 h-6 border-2 border-slate-950 rounded-full relative overflow-hidden group-hover:scale-90 transition-transform">
                  <div className="absolute w-4 h-4 bg-slate-950 rounded-full top-2 left-2 group-hover:bg-purple-600 transition-colors" />
                </div>
              </div>
              <span className="font-serif text-2xl tracking-widest font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                LUMINARYX
              </span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-slate-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 uppercase tracking-wider hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.8)] relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <a
                href={generateWhatsAppLink('Consulta General')}
                target="_blank"
                rel="noreferrer"
                className="bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] px-6 py-2 rounded-full font-bold transition-all duration-300 text-sm relative overflow-hidden group"
              >
                <span className="relative z-10">Cotizar Ahora</span>
                <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
              </a>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 border-b border-gray-800 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-purple-400 hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.8)] block px-3 py-2 rounded-md text-base font-medium transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <a
        href={generateWhatsAppLink('Hola, vi su página web')}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50.group"
      >
        <span className="absolute -top-10 right-0 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none">
          ¡Chatea con nosotros!
        </span>
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
          <div className="relative bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] hover:scale-110 transition-all.duration-300 border-2 border-white/20">
            <MessageCircle size={32} fill="white" className="text-green-500" />
          </div>
        </div>
      </a>

      {/* A partir de aquí puedes dejar el resto de secciones igual que ya las tenías:
          HERO, CATÁLOGO, PROCESO y FOOTER, porque no afectan al error actual. */}
    </div>
  );
};

export default LuminaryX;
