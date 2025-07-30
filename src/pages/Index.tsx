import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, User, Mail, MessageCircle, Figma, Palette, Monitor, Coffee } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const navigate = useNavigate();

  const portfolioItems = [
    {
      title: "Flight Booking App",
      category: "UX/UI Design",
      image: "bg-gradient-to-br from-sky to-sky-light",
      description: "Simplifying travel booking experience"
    },
    {
      title: "Trading Dashboard",
      category: "UI Design",
      image: "bg-gradient-to-br from-slate-800 to-slate-900",
      description: "Real-time financial data visualization"
    },
    {
      title: "Mobile Banking",
      category: "UX Design",
      image: "bg-gradient-to-br from-mint to-mint-light",
      description: "Secure and intuitive banking"
    },
    {
      title: "E-commerce Platform",
      category: "Product Design",
      image: "bg-gradient-to-br from-peach to-peach-light",
      description: "Modern shopping experience"
    }
  ];

  const tools = [
    { name: "Figma", icon: <Figma className="w-8 h-8" />, color: "text-purple-500" },
    { name: "Adobe XD", icon: <Palette className="w-8 h-8" />, color: "text-pink-500" },
    { name: "Framer", icon: <Monitor className="w-8 h-8" />, color: "text-blue-500" },
    { name: "Principle", icon: <Coffee className="w-8 h-8" />, color: "text-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-baloo font-bold text-xl text-foreground">Afra.Portfolio</div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Work</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">Talk</a>
            <a href="#tools" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
          </div>
          
          <Button className="bg-coral hover:bg-coral/90 text-white rounded-full px-6">
            Contact
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-8 left-8">
          <Sparkles className="text-primary w-8 h-8 animate-pulse" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center font-baloo">
          <h1 className="text-6xl md:text-8xl font-baloo font-bold text-foreground mb-6">
            Hi, I'm Afra.
          </h1>
          <p className="text-xl md:text-2xl font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            UX/UI Designer focused on creating thoughtful, joyful, human-first products.
          </p>
          
          <Button 
            onClick={() => navigate('/flight-case-study')}
            className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-full font-baloo font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            See My Work
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
                <div className={`h-64 ${item.image} relative flex items-center justify-center`}>
                  {/* Mock device/interface */}
                  <div className="bg-white rounded-lg p-4 shadow-lg w-48 h-32">
                    <div className="flex flex-col gap-2">
                      <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                      <div className="h-6 bg-primary/20 rounded w-full"></div>
                      <div className="flex gap-2">
                        <div className="h-3 bg-slate-200 rounded w-1/3"></div>
                        <div className="h-3 bg-slate-200 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
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
      <section id="about" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-baloo font-bold text-foreground mb-6">About me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm Afra, a UX/UI Designer and Founding team of few.
                </p>
                <p>
                  I love everything about UX — user findings, wireframing, prototyping,
                  and I also design to make the UX come alive, whether that's
                  healthcare, productivity or entertainment.
                </p>
                <p>
                  Because every designer is both user and maker, I find myself constantly
                  building applications and products.
                </p>
                <p>
                  My experience within varies — from digital to detail and usually
                  everything in between.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-lavender to-mint-light rounded-2xl p-8 w-80 h-80 flex items-center justify-center">
                <div className="bg-white rounded-full p-6 shadow-lg">
                  <User className="w-24 h-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-16 px-6 bg-mint-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-baloo font-bold text-foreground mb-4">
            These are the tools
          </h2>
          <h3 className="text-4xl font-baloo font-bold text-foreground mb-12">
            I use everyday
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="bg-card rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all group-hover:scale-105">
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
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-peach-light via-coral-light to-lavender-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-baloo font-bold text-foreground mb-4">
              Love to hear
            </h2>
            <h3 className="text-4xl md:text-5xl font-baloo font-bold text-foreground mb-4">
              from you,
            </h3>
            <h4 className="text-4xl md:text-5xl font-baloo font-bold text-foreground mb-4">
              Get in <span className="italic">touch</span>
            </h4>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
                <span className="text-muted-foreground">•</span>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Dribbble</a>
                <span className="text-muted-foreground">•</span>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Email" className="bg-card border-border" />
                <Input placeholder="your.name@email.com" className="bg-card border-border" />
              </div>
              <Textarea placeholder="Message" rows={4} className="bg-card border-border" />
              <Button className="w-full bg-coral hover:bg-coral/90 text-white rounded-full py-3">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
