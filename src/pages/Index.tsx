import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, User, Mail, MessageCircle, Figma, Menu, X, Palette, Monitor, Coffee, Heart, Star, ArrowUp, Smile, Lightbulb, Zap, Eye, Target, Layers, PenTool, Users, MousePointer, Compass, Workflow, Linkedin, Github, Instagram, BaggageClaimIcon, Globe, Code, Braces, Paintbrush } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);


  const portfolioItems = [
    {
      title: t('portfolio.flight.title'),
      category: t('portfolio.flight.category'),
      image: "/flight.png",
      bg: "bg-gradient-to-br from-sky to-sky-light",
      description: t('portfolio.flight.description')
    },
    {
      title: t('portfolio.redesign.title'),
      category: t('portfolio.redesign.category'),
      image: "/TorontoMoc.png",
      bg: "bg-gradient-to-br from-slate-800 to-slate-900",
      description: t('portfolio.redesign.description')
    },
    {
      title: t('portfolio.design.title'),
      category: t('portfolio.design.category'),
      image: "/Portfoilio.png",
      bg: "bg-gradient-to-br from-mint to-mint-light",
      description: t('portfolio.design.description')
    },
    {
      title: t('portfolio.ecommerce.title'),
      category: t('portfolio.ecommerce.category'),
      image: "/squidgies.png",
      bg: "bg-gradient-to-br from-peach to-peach-light",
      description: t('portfolio.ecommerce.description')
    }
  ];

  const tools = [
    { name: "Figma", icon: <Figma className="w-8 h-8" />, color: "text-purple-500" },
    { name: "Adobe XD", icon: <Palette className="w-8 h-8" />, color: "text-pink-500" },
    { name: "Framer", icon: <Monitor className="w-8 h-8" />, color: "text-blue-500" },
    { name: "HotJar", icon: <Coffee className="w-8 h-8" />, color: "text-orange-500" },
    { name: "Webflow", icon: <Globe className="w-8 h-8" />, color: "text-indigo-500" },
    { name: "React.js", icon: <Braces className="w-8 h-8" />, color: "text-cyan-500" },
    { name: "HTML", icon: <Code className="w-8 h-8" />, color: "text-red-500" },
    { name: "CSS", icon: <Paintbrush className="w-8 h-8" />, color: "text-blue-400" },
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-baloo font-bold text-xl text-foreground">AfraMelia</div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.work')}</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.talk')}</a>
            <a href="#tools" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.skills')}</a>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-coral hover:bg-coral/90 text-white rounded-full px-6"
            >
              {t('nav.contact')}
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-foreground">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Decorative UX doodles */}
        <div className="doodle-sparkle top-8 left-8">
          <Lightbulb className="w-8 h-8" />
        </div>
        <div className="doodle-heart top-16 right-16">
          <Eye className="w-6 h-6" />
        </div>
        <div className="doodle-star bottom-32 left-24">
          <Target className="w-5 h-5" />
        </div>
        <div className="doodle-arrow bottom-20 right-32">
          <Zap className="w-4 h-4" />
        </div>
        <div className="doodle-smile top-24 left-32">
          <PenTool className="w-5 h-5" />
        </div>
        <div className="doodle-heart bottom-40 right-8">
          <Layers className="w-4 h-4" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center font-baloo">
          <h1 className="text-6xl md:text-8xl font-baloo font-bold text-foreground mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            {t('hero.subtitle')}
          </p>
          
          <Button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Afra.CV.pdf'; 
              link.download = 'Afra_Melia_CV.pdf'; 
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-full font-baloo font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            {t('hero.cta')}
          </Button>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="py-16 px-6 bg-lavender-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                onClick={() => navigate('/flight-case-study')}
              >
                <div className={`h-64 ${item.bg} relative flex items-center justify-center`}>
                  {/* Mock device/interface */}
                  {/* <div className="bg-white rounded-lg p-4 shadow-lg w-48 h-32">
                    <div className="flex flex-col gap-2">
                      <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                      <div className="h-6 bg-primary/20 rounded w-full"></div>
                      <div className="flex gap-2">
                        <div className="h-3 bg-slate-200 rounded w-1/3"></div>
                        <div className="h-3 bg-slate-200 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div> */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-coral font-medium mb-2">{item.category}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 relative">
        {/* UX Research & Design doodles */}
        <div className="doodle-smile top-8 right-8">
          <Users className="w-6 h-6" />
        </div>
        <div className="doodle-star bottom-12 left-8">
          <MousePointer className="w-4 h-4" />
        </div>
        <div className="doodle-sparkle top-32 left-16">
          <Compass className="w-5 h-5" />
        </div>
        <div className="doodle-arrow bottom-32 right-24">
          <Workflow className="w-4 h-4" />
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-baloo font-bold text-foreground mb-6">{t('about.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t('about.intro')}</p>
                <p>{t('about.ux')}</p>
                <p>{t('about.maker')}</p>
                <p>{t('about.experience')}</p>
              </div>
            </div>
            
            <div className="flex justify-center relative">
              <div className="doodle-heart -top-4 -left-4">
                <Heart className="w-5 h-5" />
              </div>
              <div className="bg-gradient-to-br from-lavender to-mint-light rounded-2xl p-8 w-80 h-80 flex items-center justify-center">
                <div className="overflow-hidden">
                <img 
                  src="/me.png" 
                  alt="Afra Melia" 
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-16 px-6 bg-lavender-light relative">
        {/* Decorative doodles */}
        <div className="doodle-sparkle top-12 left-12">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="doodle-arrow bottom-16 right-16">
          <ArrowUp className="w-4 h-4 rotate-12" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-baloo font-bold text-foreground mb-4">
            {t('tools.title1')}
          </h2>
          <h3 className="text-4xl font-baloo font-bold text-foreground mb-12">
            {t('tools.title2')}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="bg-card dark:bg-card rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all group-hover:scale-105">
                  <div className={tool.color}>
                    {tool.icon}
                  </div>
                </div>
                <span className="mt-3 font-medium text-foreground">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-lavender-light relative">
        {/* Decorative doodles */}
        <div className="doodle-heart top-8 left-8">
          <Heart className="w-6 h-6" />
        </div>
        <div className="doodle-star top-16 right-24">
          <Star className="w-5 h-5" />
        </div>
        <div className="doodle-smile bottom-16 left-24">
          <Smile className="w-5 h-5" />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-baloo font-bold text-foreground mb-4">
              {t('contact.title1')}
            </h2>
            <h3 className="text-4xl md:text-5xl font-baloo font-bold text-foreground mb-4">
              {t('contact.title2')}
            </h3>
            <h4 className="text-4xl md:text-5xl font-baloo font-bold text-foreground mb-4">
              {t('contact.title3')} 
            </h4>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder={t('contact.name')} className="bg-card dark:bg-card border-border" />
                <Input placeholder={t('contact.email')} className="bg-card dark:bg-card border-border" />
              </div>
              <Textarea placeholder={t('contact.message')} rows={4} className="bg-card dark:bg-card border-border" />
              <Button className="w-full bg-coral hover:bg-coral/90 text-white rounded-full py-3">
                {t('contact.submit')}
              </Button>
            </div>
          </div>
        </div>
      </section>
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-background z-40 border-t border-border px-6 py-6 space-y-4 shadow-md">
          <a
            href="#work"
            onClick={() => setMenuOpen(false)}
            className="block text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('nav.work')}
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('nav.talk')}
          </a>
          <a
            href="#tools"
            onClick={() => setMenuOpen(false)}
            className="block text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('nav.skills')}
          </a>
          <Button
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) section.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
            className="w-full bg-coral hover:bg-coral/90 text-white rounded-full"
          >
            {t('nav.contact')}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Index;
