import { Lightbulb, Users, Clock, Zap } from "lucide-react";

const CaseTakeaways = () => {
  const lessons = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Test Early",
      description: "Get user feedback before investing too much in detailed designs",
      color: "peach"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Real users > assumptions",
      description: "Actually talking to users revealed pain points I never expected",
      color: "mint"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Microinteractions matter!",
      description: "Small animations and feedback made a huge difference in user confidence",
      color: "sky"
    }
  ];

  return (
    <section className="py-16 px-6 bg-lavender-light relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lessons Learned
          </h2>
          <p className="text-xl text-muted-foreground">Key insights from this project</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {lessons.map((lesson, index) => (
            <div key={index} className={`bg-${lesson.color}-light rounded-2xl p-8 border shadow-sm hover:shadow-md transition-shadow`}>
              <div className="text-foreground mb-4">
                {lesson.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {lesson.title}
              </h3>
              <p className="text-foreground leading-relaxed">
                {lesson.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbulb doodle */}
      <div className="absolute top-8 left-8">
        <Lightbulb className="w-8 h-8 text-coral animate-pulse" />
      </div>
    </section>
  );
};

export default CaseTakeaways;