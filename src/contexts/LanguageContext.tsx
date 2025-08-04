import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.work': 'Work',
    'nav.talk': 'About',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': "Hi, I'm Afra.",
    'hero.subtitle': 'UX/UI Designer focused on creating thoughtful, joyful, human-first products.',
    'hero.cta': 'Download my CV',
    
    // About
    'about.title': 'About me',
    'about.intro': "I'm Afra, a UX/UI Designer and Founding team of few.",
    'about.ux': 'I love everything about UX — user findings, wireframing, prototyping, and I also design to make the UX come alive, whether that\'s healthcare, productivity or entertainment.',
    'about.maker': 'Because every designer is both user and maker, I find myself constantly building applications and products.',
    'about.experience': 'My experience within varies — from digital to detail and usually everything in between.',
    
    // Tools
    'tools.title1': 'These are the tools',
    'tools.title2': 'I use everyday',
    
    // Contact
    'contact.title1': 'Love to hear',
    'contact.title2': 'from you,',
    'contact.title3': 'Get in touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Submit',
    
    // Portfolio items
    'portfolio.flight.title': 'Flight Booking App',
    'portfolio.flight.category': 'UX/UI Design',
    'portfolio.flight.description': 'Simplifying travel booking experience',
    'portfolio.redesign.title': 'Redesign Website',
    'portfolio.redesign.category': 'UI Design',
    'portfolio.redesign.description': 'Redesigning an e-commerce cupcake website',
    'portfolio.design.title': 'Portafolio template',
    'portfolio.design.category': 'UI Design, React.js',
    'portfolio.design.description': 'A template for a portfolio in React.js',
    'portfolio.ecommerce.title': 'E-commerce Platform',
    'portfolio.ecommerce.category': 'Product Design',
    'portfolio.ecommerce.description': 'Kids shopping experience',
    
    // Portfolio filters
    'portfolio.filter.design': 'Design Projects',
    'portfolio.filter.development': 'Development Projects',
    
    // Case study common
    'case.overview': 'Project Overview',
    'case.problem': 'The Problem',
    'case.solution': 'The Solution',
    'case.research': 'User Research',
    'case.goals': 'UX Goals',
    'case.persona': 'User Persona',
    'case.journey': 'User Journey',
    'case.wireframes': 'Wireframes',
    'case.designs': 'UI Design Decisions',
    'case.testing': 'Usability Testing',
    'case.results': 'Results & Impact',
    'case.takeaways': 'Lessons Learned',
    'case.next': "What's Next?",
    
    // Navigation within case studies
    'case.nav.back': 'Back to Portfolio',

    // Flight Case Study
    'flight.hero.title': 'Fixing Flight Confusion ✈️',
    'flight.hero.subtitle': 'How I redesigned the UX for a travel app with real users in mind',
    'flight.meta.project': 'Flight booking mobile app',
    'flight.meta.timeline': '8 weeks',
    'flight.meta.role': 'UX/UI Designer',
    'flight.meta.team': 'Solo Project',
    'flight.meta.tools': 'Figma, Adobe XD, Notion',

    // Cupcake Case Study
    'cupcake.hero.title': 'Toronto Cupcake Redesign 🧁',
    'cupcake.hero.subtitle': 'Redesigning a cupcake store website to improve navigation, clarity, and conversion',
    'cupcake.meta.project': 'Cupcake store website redesign',
    'cupcake.meta.timeline': '4 weeks',
    'cupcake.meta.role': 'UX/UI Designer',
    'cupcake.meta.team': 'Solo project – Research, Design, and Prototyping',
    'cupcake.meta.tools': 'Figma, Adobe XD, Maze, Notion',

    // Squidgies Case Study
    'squidgies.hero.title': 'Squidgies E-commerce 🧢',
    'squidgies.hero.subtitle': 'A smarter way for parents to shop kids\' clothes that actually fit and are in stock',
    'squidgies.meta.project': 'E-commerce mobile app for children\'s clothes',
    'squidgies.meta.timeline': '6 weeks',
    'squidgies.meta.role': 'UX/UI Designer, Front-End Developer',
    'squidgies.meta.team': 'Solo Project',
    'squidgies.meta.tools': 'Figma, React Native, Notion',
  },
  es: {
    // Navigation
    'nav.work': 'Trabajo',
    'nav.talk': 'Sobre mi',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': "Hola, soy Afra.",
    'hero.subtitle': 'Diseñadora UX/UI enfocada en crear productos reflexivos, alegres y centrados en las personas.',
    'hero.cta': 'Descarga mi CV',
    
    // About
    'about.title': 'Sobre mí',
    'about.intro': 'Soy Afra, Diseñadora UX/UI y parte del equipo fundador de pocos.',
    'about.ux': 'Amo todo sobre UX — investigación de usuarios, wireframing, prototipado, y también diseño para dar vida a la UX, ya sea en salud, productividad o entretenimiento.',
    'about.maker': 'Porque cada diseñador es usuario y creador, me encuentro constantemente construyendo aplicaciones y productos.',
    'about.experience': 'Mi experiencia varía — desde lo digital hasta el detalle y usualmente todo lo que está en el medio.',
    
    // Tools
    'tools.title1': 'Estas son las herramientas',
    'tools.title2': 'que uso todos los días',
    
    // Contact
    'contact.title1': 'Me encanta escuchar',
    'contact.title2': 'de ti,',
    'contact.title3': 'Ponte en contacto',
    'contact.email': 'Correo',
    'contact.name': 'tu.nombre@email.com',
    'contact.message': 'Mensaje',
    'contact.submit': 'Enviar',
    
    // Portfolio items
    'portfolio.flight.title': 'App de Reservas de Vuelos',
    'portfolio.flight.category': 'Diseño UX/UI',
    'portfolio.flight.description': 'Simplificando la experiencia de reserva de viajes',
    'portfolio.redesign.title': 'Rediseño pagina web',
    'portfolio.redesign.category': 'Diseño UI',
    'portfolio.redesign.description': 'Rediseño de una pagina web de comercio de cupcakes.',
    'portfolio.design.title': 'Plantilla portfolio',
    'portfolio.design.category': 'Diseño UI, React.js',
    'portfolio.design.description': 'Una plantilla para portfolio en React.js',
    'portfolio.ecommerce.title': 'Plataforma E-commerce',
    'portfolio.ecommerce.category': 'Diseño de Producto',
    'portfolio.ecommerce.description': 'Experiencia de compra para productos de niños',
    
    // Portfolio filters
    'portfolio.filter.design': 'Proyectos de Diseño',
    'portfolio.filter.development': 'Proyectos de Desarrollo',
    
    // Case study common
    'case.overview': 'Resumen del Proyecto',
    'case.problem': 'El Problema',
    'case.solution': 'La Solución',
    'case.research': 'Investigación de Usuarios',
    'case.goals': 'Objetivos UX',
    'case.persona': 'Persona de Usuario',
    'case.journey': 'Viaje del Usuario',
    'case.wireframes': 'Wireframes',
    'case.designs': 'Decisiones de Diseño UI',
    'case.testing': 'Pruebas de Usabilidad',
    'case.results': 'Resultados e Impacto',
    'case.takeaways': 'Lecciones Aprendidas',
    'case.next': '¿Qué Sigue?',
    
    // Navigation within case studies
    'case.nav.back': 'Volver al Portfolio',

    // Flight Case Study
    'flight.hero.title': 'Resolviendo la Confusión de Vuelos ✈️',
    'flight.hero.subtitle': 'Cómo rediseñé la UX para una app de viajes pensando en usuarios reales',
    'flight.meta.project': 'App móvil de reservas de vuelos',
    'flight.meta.timeline': '8 semanas',
    'flight.meta.role': 'Diseñador UX/UI',
    'flight.meta.team': 'Proyecto Solo',
    'flight.meta.tools': 'Figma, Adobe XD, Notion',

    // Cupcake Case Study
    'cupcake.hero.title': 'Rediseño Toronto Cupcake 🧁',
    'cupcake.hero.subtitle': 'Rediseñando un sitio web de cupcakes para mejorar navegación, claridad y conversión',
    'cupcake.meta.project': 'Rediseño de sitio web de tienda de cupcakes',
    'cupcake.meta.timeline': '4 semanas',
    'cupcake.meta.role': 'Diseñador UX/UI',
    'cupcake.meta.team': 'Proyecto solo – Investigación, Diseño y Prototipado',
    'cupcake.meta.tools': 'Figma, Adobe XD, Maze, Notion',

    // Squidgies Case Study
    'squidgies.hero.title': 'Squidgies E-commerce 🧢',
    'squidgies.hero.subtitle': 'Una forma más inteligente para que los padres compren ropa infantil que realmente les quede y esté en stock',
    'squidgies.meta.project': 'App móvil de e-commerce para ropa infantil',
    'squidgies.meta.timeline': '6 semanas',
    'squidgies.meta.role': 'Diseñador UX/UI, Desarrollador Front-End',
    'squidgies.meta.team': 'Proyecto Solo',
    'squidgies.meta.tools': 'Figma, React Native, Notion',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};