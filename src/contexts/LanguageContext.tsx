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
    'nav.talk': 'Talk',
    'nav.skills': 'Skills',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': "Hi, I'm Afra.",
    'hero.subtitle': 'UX/UI Designer focused on creating thoughtful, joyful, human-first products.',
    'hero.cta': 'See My Work',
    
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
    'contact.email': 'Email',
    'contact.name': 'your.name@email.com',
    'contact.message': 'Message',
    'contact.submit': 'Submit',
    
    // Portfolio items
    'portfolio.flight.title': 'Flight Booking App',
    'portfolio.flight.category': 'UX/UI Design',
    'portfolio.flight.description': 'Simplifying travel booking experience',
    'portfolio.trading.title': 'Trading Dashboard',
    'portfolio.trading.category': 'UI Design',
    'portfolio.trading.description': 'Real-time financial data visualization',
    'portfolio.banking.title': 'Mobile Banking',
    'portfolio.banking.category': 'UX Design',
    'portfolio.banking.description': 'Secure and intuitive banking',
    'portfolio.ecommerce.title': 'E-commerce Platform',
    'portfolio.ecommerce.category': 'Product Design',
    'portfolio.ecommerce.description': 'Modern shopping experience',
  },
  es: {
    // Navigation
    'nav.work': 'Trabajo',
    'nav.talk': 'Hablar',
    'nav.skills': 'Habilidades',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': "Hola, soy Afra.",
    'hero.subtitle': 'Diseñadora UX/UI enfocada en crear productos reflexivos, alegres y centrados en las personas.',
    'hero.cta': 'Ver Mi Trabajo',
    
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
    'portfolio.trading.title': 'Dashboard de Trading',
    'portfolio.trading.category': 'Diseño UI',
    'portfolio.trading.description': 'Visualización de datos financieros en tiempo real',
    'portfolio.banking.title': 'Banca Móvil',
    'portfolio.banking.category': 'Diseño UX',
    'portfolio.banking.description': 'Banca segura e intuitiva',
    'portfolio.ecommerce.title': 'Plataforma E-commerce',
    'portfolio.ecommerce.category': 'Diseño de Producto',
    'portfolio.ecommerce.description': 'Experiencia de compra moderna',
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