import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, User, Mail, MessageCircle, Figma, Palette, Monitor, Coffee, Heart, Star, ArrowUp, Smile, Lightbulb, Zap, Eye, Target, Layers, PenTool, Users, MousePointer, Compass, Workflow } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const portfolioItems = [
    {
      title: t('portfolio.flight.title'),
      category: t('portfolio.flight.category'),
      image: "bg-gradient-to-br from-sky to-sky-light",
      description: t('portfolio.flight.description')
    },
    {
      title: t('portfolio.trading.title'),
      category: t('portfolio.trading.category'),
      image: "bg-gradient-to-br from-slate-800 to-slate-900",
      description: t('portfolio.trading.description')
    },
    {
      title: t('portfolio.banking.title'),
      category: t('portfolio.banking.category'),
      image: "bg-gradient-to-br from-mint to-mint-light",
      description: t('portfolio.banking.description')
    },
    {
      title: t('portfolio.ecommerce.title'),
      category: t('portfolio.ecommerce.category'),
      image: "bg-gradient-to-br from-peach to-peach-light",
      description: t('portfolio.ecommerce.description')
    }
  ];

  const tools = [
    { name: "Figma", icon: <Figma className="w-8 h-8" />, color: "text-purple-500" },
    { name: "Adobe XD", icon: <Palette className="w-8 h-8" />, color: "text-pink-500" },
    { name: "Framer", icon: <Monitor className="w-8 h-8" />, color: "text-blue-500" },
    { name: "HotJar", icon: <Coffee className="w-8 h-8" />, color: "text-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="font-baloo font-bold text-lg sm:text-xl text-foreground">Afra.Portfolio</div>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.work')}</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.talk')}</a>
            <a href="#tools" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.skills')}</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.blog')}</a>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button className="bg-coral hover:bg-coral/90 text-white rounded-full px-3 sm:px-6 text-sm sm:text-base">
              {t('nav.contact')}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Decorative UX doodles - hidden on small screens */}
        <div className="hidden sm:block doodle-sparkle top-8 left-8">
          <Lightbulb className="w-6 sm:w-8 h-6 sm:h-8" />
        </div>
        <div className="hidden sm:block doodle-heart top-16 right-16">
          <Eye className="w-5 sm:w-6 h-5 sm:h-6" />
        </div>
        <div className="hidden md:block doodle-star bottom-32 left-24">
          <Target className="w-5 h-5" />
        </div>
        <div className="hidden md:block doodle-arrow bottom-20 right-32">
          <Zap className="w-4 h-4" />
        </div>
        <div className="hidden lg:block doodle-smile top-24 left-32">
          <PenTool className="w-5 h-5" />
        </div>
        <div className="hidden sm:block doodle-heart bottom-40 right-8">
          <Layers className="w-4 h-4" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center font-baloo">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-baloo font-bold text-foreground mb-4 sm:mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            {t('hero.subtitle')}
          </p>
          
          <Button 
            onClick={() => navigate('/flight-case-study')}
            className="bg-coral hover:bg-coral/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-baloo font-semibold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
          >
            {t('hero.cta')}
          </Button>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="py-12 sm:py-16 px-4 sm:px-6 bg-lavender-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                onClick={() => navigate('/flight-case-study')}
              >
                <div className={`h-48 sm:h-64 ${item.image} relative flex items-center justify-center`}>
                  {/* Mock device/interface */}
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-lg w-36 sm:w-48 h-24 sm:h-32">
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <div className="h-2 sm:h-3 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-2 sm:h-3 bg-slate-200 rounded w-1/2"></div>
                      <div className="h-4 sm:h-6 bg-primary/20 rounded w-full"></div>
                      <div className="flex gap-1 sm:gap-2">
                        <div className="h-2 sm:h-3 bg-slate-200 rounded w-1/3"></div>
                        <div className="h-2 sm:h-3 bg-slate-200 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="text-sm text-coral font-medium mb-2">{item.category}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 relative">
        {/* UX Research & Design doodles - hidden on small screens */}
        <div className="hidden sm:block doodle-smile top-8 right-8">
          <Users className="w-5 sm:w-6 h-5 sm:h-6" />
        </div>
        <div className="hidden sm:block doodle-star bottom-12 left-8">
          <MousePointer className="w-4 h-4" />
        </div>
        <div className="hidden md:block doodle-sparkle top-32 left-16">
          <Compass className="w-5 h-5" />
        </div>
        <div className="hidden md:block doodle-arrow bottom-32 right-24">
          <Workflow className="w-4 h-4" />
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl font-baloo font-bold text-foreground mb-4 sm:mb-6">{t('about.title')}</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>{t('about.intro')}</p>
                <p>{t('about.ux')}</p>
                <p>{t('about.maker')}</p>
                <p>{t('about.experience')}</p>
              </div>
            </div>
            
            <div className="flex justify-center relative order-1 md:order-2">
              <div className="hidden sm:block doodle-heart -top-4 -left-4">
                <Heart className="w-5 h-5" />
              </div>
              <div className="bg-gradient-to-br from-lavender to-mint-light rounded-2xl p-6 sm:p-8 w-60 sm:w-80 h-60 sm:h-80 flex items-center justify-center">
                <div className="bg-card dark:bg-card rounded-full p-4 sm:p-6 shadow-lg">
                  <User className="w-16 sm:w-24 h-16 sm:h-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-12 sm:py-16 px-4 sm:px-6 bg-lavender-light relative">
        {/* Decorative doodles - hidden on small screens */}
        <div className="hidden sm:block doodle-sparkle top-12 left-12">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="hidden sm:block doodle-arrow bottom-16 right-16">
          <ArrowUp className="w-4 h-4 rotate-12" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-baloo font-bold text-foreground mb-3 sm:mb-4">
            {t('tools.title1')}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-baloo font-bold text-foreground mb-8 sm:mb-12">
            {t('tools.title2')}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="bg-card dark:bg-card rounded-2xl p-4 sm:p-6 shadow-sm border hover:shadow-lg transition-all group-hover:scale-105">
                  <div className={tool.color}>
                    <div className="w-6 h-6 sm:w-8 sm:h-8">{tool.icon}</div>
                  </div>
                </div>
                <span className="mt-2 sm:mt-3 font-medium text-foreground text-sm sm:text-base">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 bg-lavender-light relative">
        {/* Decorative doodles - hidden on small screens */}
        <div className="hidden sm:block doodle-heart top-8 left-8">
          <Heart className="w-6 h-6" />
        </div>
        <div className="hidden sm:block doodle-star top-16 right-24">
          <Star className="w-5 h-5" />
        </div>
        <div className="hidden sm:block doodle-smile bottom-16 left-24">
          <Smile className="w-5 h-5" />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-baloo font-bold text-foreground mb-3 sm:mb-4">
              {t('contact.title1')}
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-baloo font-bold text-foreground mb-3 sm:mb-4">
              {t('contact.title2')}
            </h3>
            <h4 className="text-3xl sm:text-4xl md:text-5xl font-baloo font-bold text-foreground mb-3 sm:mb-4">
              {t('contact.title3')} 
            </h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 order-2 md:order-1">
              <div className="flex flex-wrap gap-2 sm:gap-4 justify-center md:justify-start">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Twitter</a>
                <span className="text-muted-foreground">•</span>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Dribbble</a>
                <span className="text-muted-foreground">•</span>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Instagram</a>
              </div>
            </div>
            
            <div className="space-y-4 order-1 md:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder={t('contact.email')} className="bg-card dark:bg-card border-border text-sm sm:text-base" />
                <Input placeholder={t('contact.name')} className="bg-card dark:bg-card border-border text-sm sm:text-base" />
              </div>
              <Textarea placeholder={t('contact.message')} rows={4} className="bg-card dark:bg-card border-border text-sm sm:text-base" />
              <Button className="w-full bg-coral hover:bg-coral/90 text-white rounded-full py-3 text-sm sm:text-base">
                {t('contact.submit')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
