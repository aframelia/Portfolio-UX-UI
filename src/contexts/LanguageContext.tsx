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
    'hero.subtitle': 'UX/UI Designer and web developer focused on creating thoughtful, joyful, human-first products.',
    'hero.cta': 'Download my CV',
    
    // About
    'about.title': 'About me',
    'about.intro': "I'm Afra, a UX/UI Designer and Web Developer",
    'about.ux': 'I love everything about UX — user findings, wireframing, prototyping, and I also design to make the UX come alive.',
    'about.maker': 'Because I experience products as a user and bring them to life as a maker, I’m dedicated to building intuitive, impactful designs.',
    'about.experience': 'I’m comfortable working on all kinds of things, from the digital side right down to the little things.',
    
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
    'contact.submit': 'Contact',
    
    // Portfolio items
    'portfolio.flight.title': 'Flight Booking App',
    'portfolio.flight.category': 'UX/UI Design',
    'portfolio.flight.description': 'Simplifying travel booking experience',
    'portfolio.redesign.title': 'Redesign Website',
    'portfolio.redesign.category': 'UI Design',
    'portfolio.redesign.description': 'Redesigning an e-commerce cupcake website',
    'portfolio.design.title': 'Portfolio template',
    'portfolio.design.category': 'UI Design, React.js',
    'portfolio.design.description': 'A template for a portfolio in React.js',
    'portfolio.ecommerce.title': 'E-commerce Platform',
    'portfolio.ecommerce.category': 'Product Design',
    'portfolio.ecommerce.description': 'Kids shopping experience',
    'portfolio.EndProject.title': 'Clinical Data Entry System',
    'portfolio.EndProject.category': 'FullStack Development',
    'portfolio.EndProject.description': 'A web application for clinicians to manage patient records and extract medical terms from clinical notes with NLP.',

    // Portfolio filters
    'portfolio.filter.design': 'Design Projects',
    'portfolio.filter.development': 'Development Projects',
    
  },
  es: {
    // Navigation
    'nav.work': 'Trabajo',
    'nav.talk': 'Sobre mi',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': "Hola, soy Afra.",
    'hero.subtitle': 'Diseñadora UX/UI y desarrollador web enfocada en crear productos reflexivos, alegres y centrados en las personas.',
    'hero.cta': 'Descarga mi CV',
    
    // About
    'about.title': 'Sobre mí',
    'about.intro': 'Soy Afra, Diseñadora UX/UI y desarrollador web.',
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
    'contact.submit': 'Contactar',
    
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