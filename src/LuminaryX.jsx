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

// Imágenes locales (guárdalas en src/assets con estos nombres o ajusta las rutas)
import parejaLineArt from './assets/pareja1.jpg';
import anime3D from './assets/personajeGoku.png';
import mascotaGeo from './assets/mascota.jpeg';
import logoCorporativo from './assets/logoEmpresa.png';
import trofeoEquipo from './assets/trofeo.png';
import medicoDentista from './assets/dentista.png';

const LuminaryX = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar el scroll y cambiar la barra de navegación
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Configuración de WhatsApp ACTUALIZADA
  const phoneNumber = "5241126327";
  const generateWhatsAppLink = (productName) => {
    const message = `Hola LuminaryX, estoy interesado en una lámpara personalizada estilo: ${productName}. ¿Podrían darme más información?`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const categories = ['Todos', 'Parejas & Familia', 'Anime & Gamer', 'Mascotas', 'Logos & Negocios'];

  // DATOS DE PRODUCTOS (ahora con imágenes locales)
  const products = [
    {
      id: 1,
      title: "Retrato Pareja Line Art",
      category: "Parejas & Familia",
      price: "$590 MXN",
      image: parejaLineArt,
      description: "Inmortaliza un momento especial con tu persona favorita. Diseño minimalista basado en tu foto real.",
      glowColor: "cyan"
    },
    {
      id: 2,
      title: "Personaje Anime 3D",
      category: "Anime & Gamer",
      price: "$590 MXN",
      image: anime3D,
      description: "Tu personaje favorito (Goku, Naruto, etc.) cobrando vida con luz LED y efecto 3D.",
      glowColor: "purple"
    },
    {
      id: 3,
      title: "Mascota",
      category: "Mascotas",
      price: "$590 MXN",
      image: mascotaGeo,
      description: "Un homenaje luminoso a tu mejor amigo peludo. Estilo moderno y adorable.",
      glowColor: "green"
    },
    {
      id: 4,
      title: "Logotipo Corporativo",
      category: "Logos & Negocios",
      price: "$590 MXN",
      image: logoCorporativo,
      description: "Destaca tu marca en tu escritorio o recepción con tu logo iluminado en acrílico.",
      glowColor: "blue"
    },
    {
      id: 5,
      title: "Escudo Equipo",
      category: "Anime & Gamer",
      price: "$590 MXN",
      image: trofeoEquipo,
      description: "Para los campeones. Escudos de equipos de fútbol, e-sports o trofeos personalizados.",
      glowColor: "cyan"
    },
    {
      id: 6,
      title: "Profesiones",
      category: "Logos & Negocios",
      price: "$590 MXN",
      image: medicoDentista,
      description: "El regalo perfecto para dentistas, doctores y profesionales. Decoración técnica y elegante.",
      glowColor: "pink"
    }
  ];

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-purple-500/50 selection:text-white">

      {/* --- NAVEGACIÓN --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-white/5 py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex.items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-950 shadow-[0_0_15px_rgba(255,255,255,0.4)] relative group cursor-pointer">
                <div className="w-6 h-6 border-2 border-slate-950 rounded-full relative overflow-hidden group-hover:scale-90 transition-transform">
                  <div className="absolute w-4 h-4 bg-slate-950 rounded-full top-2 left-2 group-hover:bg-purple-600 transition-colors"></div>
                </div>
              </div>
              <span className="font-serif text-2xl tracking-widest font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">LUMINARYX</span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-slate-300 hover:text-purple-400 px-3.py-2 rounded-md text-sm font-medium transition-all duration-300 uppercase tracking-wider hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.8)] relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
               <a 
                href={generateWhatsAppLink("Consulta General")}
                target="_blank"
                rel="noreferrer"
                className="bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] px-6 py-2 rounded-full font-bold transition-all duration-300 text-sm relative overflow-hidden group"
               >
                 <span className="relative z-10">Cotizar Ahora</span>
                 <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
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

        {/* Menú Móvil */}
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

      {/* --- BOTÓN FLOTANTE WHATSAPP --- */}
      <a 
        href={generateWhatsAppLink("Hola, vi su página web")}
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <span className="absolute -top-10 right-0 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-lg.opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none">
          ¡Chatea con nosotros!
        </span>
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-green-500 w-16 h-16 rounded-full flex items-center.justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] hover:scale-110 transition-all duration-300 border-2 border-white/20">
            <MessageCircle size={32} fill="white" className="text-green-500" />
          </div>
        </div>
      </a>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute.bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05),transparent_70%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8.relative z-10 text-center">
          <h2 className="text-purple-300 font-light tracking-[0.4em] uppercase text-xs mb-8 opacity-90">
            Diseño en Acrílico & LED
          </h2>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-thin text-white mb-8 leading-tight tracking-wide">
            Lámparas LED <br />
            <span className="font-normal bg-gradient-to-r from-purple-200 via-white to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              Personalizadas
            </span>
          </h1>

          <p className="mt-8 max-w-xl mx-auto text-lg text-slate-300 font-light tracking-wider border-t border-white/10 pt-8">
            Hechas para iluminar tus mejores recuerdos.
          </p>

          <div className="mt-12 flex.justify-center gap-4">
            <a 
              href="#catalogo" 
              className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] relative overflow-hidden group"
            >
              <span className="relative z-10">Ver Catálogo</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300.blur-xl"></div>
            </a>
            <a 
              href="#proceso"
              className="px-8 py-4 border-2 border-slate-600 text-white font-medium rounded-full hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Cómo funciona</span>
              <div className="absolute inset-0 bg-cyan-400.opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
            </a>
          </div>
        </div>
      </section>

      {/* --- VALUE PROPOSITION --- */}
      <section className="py-12 bg-slate-900/50 border-y.border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8.relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 group hover:bg-slate-800/50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center.justify-center text-purple-400 mx-auto mb-4 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-shadow duration-300">
                <Sparkles size={32} className="group-hover:animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">100% Personalizado</h3>
              <p className="text-slate-400 text-sm">No usamos plantillas genéricas. Diseñamos a partir de tu foto o idea.</p>
            </div>
            <div className="p-6 group hover:bg-slate-800/50 rounded-2xl transition-colors.duration-300">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center.justify-center text-cyan-400 mx-auto mb-4 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-shadow.duration-300">
                <Lightbulb size={32} className="group-hover:animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Calidad Premium</h3>
              <p className="text-slate-400 text-sm">Acrílico de alta resistencia y bases LED táctiles con cambio de color.</p>
            </div>
            <div className="p-6 group hover:bg-slate-800/50 rounded-2xl transition-colors.duration-300">
              <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center.justify-center text-pink-400 mx-auto mb-4 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-shadow.duration-300">
                <Gift size={32} className="group-hover:animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">Listo para Regalar</h3>
              <p className="text-slate-400 text-sm">Empaque elegante y seguro. La mejor experiencia de unboxing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CATÁLOGO --- */}
      <section id="catalogo" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8.relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center mb-12.relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white.mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">Nuestro Catálogo</h2>
          <p className="text-slate-400 drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">Explora nuestras colecciones. Precio promedio: $590 MXN.</p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all.duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent shadow-[0_0_15px_rgba(168,85,247,0.6)]' 
                    : 'bg-slate-900/50 text-slate-400 border-slate-700 hover:border-purple-500/50 hover:text-purple-300 hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8.relative z-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className={`group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 transition-all.duration-500 relative hover:z-10
                ${product.glowColor === 'purple' ? 'hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]' : ''}
                ${product.glowColor === 'cyan' ? 'hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]' : ''}
                ${product.glowColor === 'green' ? 'hover:border-green-500/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]' : ''}
                ${product.glowColor === 'blue' ? 'hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]' : ''}
                ${product.glowColor === 'pink' ? 'hover:border-pink-500/50 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]' : ''}
              `}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity.duration-500 blur-xl pointer-events-none
                ${product.glowColor === 'purple' ? 'bg-purple-600' : ''}
                ${product.glowColor === 'cyan' ? 'bg-cyan-600' : ''}
                ${product.glowColor === 'green' ? 'bg-green-600' : ''}
                ${product.glowColor === 'blue' ? 'bg-blue-600' : ''}
                ${product.glowColor === 'pink' ? 'bg-pink-600' : ''}
              `}></div>

              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent.opacity-80 z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform.duration-700 group-hover:brightness-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                />
                <span className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3.py-1 rounded-full border border-white/10 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  {product.category}
                </span>
              </div>
              <div className="p-6 relative z-20 bg-slate-900/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white.mb-2 group-hover:text-white transition-colors drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">{product.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2 group-hover:text-slate-300 transition-colors">{product.description}</p>
                <div className="flex items-center.justify-between">
                  <span className="text-2xl font-light text-white.drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{product.price}</span>
                  <a 
                    href={generateWhatsAppLink(product.title)}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center.gap-2 text-white px-4 py-2 rounded-lg font-medium transition-all text-sm shadow-lg border
                      ${product.glowColor === 'purple' ? 'bg-purple-600 hover:bg-purple-500 border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]' : ''}
                      ${product.glowColor === 'cyan' ? 'bg-cyan-600 hover:bg-cyan-500 border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]' : ''}
                      ${product.glowColor === 'green' ? 'bg-green-600 hover:bg-green-500 border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]' : ''}
                      ${product.glowColor === 'blue' ? 'bg-blue-600 hover:bg-blue-500 border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]' : ''}
                      ${product.glowColor === 'pink' ? 'bg-pink-600 hover:bg-pink-500 border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]' : ''}
                    `}
                  >
                    <Phone size={16} className="animate-pulse" />
                    Pedir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROCESO --- */}
      <section id="proceso" className="py-20 bg-slate-900 border-y border-white/5.relative overflow-hidden">
         <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent -translate-y-1/2 blur-md.pointer-events-none hidden md:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8.relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white.mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">¿Cómo trabajamos?</h2>
            <p className="text-slate-400 drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">Convertimos tu idea en luz en 4 sencillos pasos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Tu Idea', desc: 'Envíanos tu foto, logo o idea por WhatsApp.', icon: <Lightbulb size={24} /> },
              { step: '02', title: 'Diseño', desc: 'Creamos un boceto digital para que veas cómo quedará.', icon: <Briefcase size={24} /> },
              { step: '03', title: 'Fabricación', desc: 'Una vez aprobado, cortamos el acrílico y preparamos la base.', icon: <Sparkles size={24} /> },
              { step: '04', title: 'Entrega', desc: 'Empacamos y entregamos tu lámpara lista para brillar.', icon: <Gift size={24} /> }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="text-7xl font-serif text-slate-800/50 font-bold absolute -top-10 -left-4 select-none group-hover:text-purple-500/20 transition-colors.duration-500 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                  {item.step}
                </div>
                <div className="relative z-10 p-6 border-l-2 border-slate-700 pl-8 transition-all.duration-300 group-hover:border-purple-500 group-hover:bg-slate-800/30 rounded-r-2xl group-hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                  <div className="text-purple-400 mb-4 opacity-50 group-hover:opacity-100 transition-opacity.duration-300 group-hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white.mb-2 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href={generateWhatsAppLink("Duda sobre el proceso")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center.gap-2 text-purple-400 hover:text-purple-300 font-medium transition-all border-b.border-purple-400/50 hover:border-purple-300 pb-1 hover:shadow-[0_5px_10px_-5px_rgba(168,85,247,0.5)] group"
            >
              <span className="group-hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]">Tengo una duda sobre mi foto</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contacto" className="bg-slate-950 pt-16 pb-8 border-t border-white/10.relative">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900/10 to-transparent.pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8.relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12.mb-12">

            <div className="col-span-1 lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold text-white.mb-4 tracking-wider drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">LUMINARYX</h2>
              <p className="text-slate-400 mb-6 max-w-sm.drop-shadow-[0_0_2px_rgba(255,255,255,0.1)]">
                Un estudio de diseño dedicado a transformar recuerdos en objetos de luz.
                Con base en Puerto Vallarta, iluminando emociones.
              </p>
              <div className="flex.gap-4">
                <a href="https://www.facebook.com/LuminaryXLED/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border.border-slate-800 flex items-center.justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/luminar.yx" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border.border-slate-800 flex items-center.justify-center text-slate-400 hover:text-pink-400 hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all">
                  <Instagram size={20} />
                </a>
                <a href="https://www.tiktok.com/@luminaryx7?_r=1&_t=ZS-91gB5IUDN33" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border.border-slate-800 flex items-center.justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider.drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start.gap-3 text-slate-400 group">
                  <Mail size={18} className="mt-1 text-purple-500 group-hover:text-purple-400 group-hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.8)] transition-all" />
                  <span className="group-hover:text-slate-300 transition-colors">Luminaryx.pvr@gmail.com</span>
                </li>
                <li className="flex items-start.gap-3 text-slate-400 group">
                  <Phone size={18} className="mt-1 text-purple-500 group-hover:text-purple-400 group-hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.8)] transition-all" />
                  <span className="group-hover:text-slate-300 transition-colors">+52 4112 6327</span>
                </li>
                <li className="flex items-start.gap-3 text-slate-400 group">
                  <Briefcase size={18} className="mt-1 text-purple-500 group-hover:text-purple-400 group-hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.8)] transition-all" />
                  <span className="group-hover:text-slate-300 transition-colors">Puerto Vallarta, Jalisco</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider.drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Enlaces</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-slate-400 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-all">Inicio</a></li>
                <li><a href="#catalogo" className="text-slate-400 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-all">Catálogo</a></li>
                <li><a href="#proceso" className="text-slate-400 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-all">Proceso de Compra</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center.gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} LuminaryX. Todos los derechos reservados.
            </p>
            <p className="text-slate-600 text-xs flex.items-center gap-1">
              Diseñado con <Sparkles size={12} className="text-purple-500 animate-pulse" /> luz.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LuminaryX;

