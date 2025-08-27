import { Layout, Info, Smartphone, Download, Navigation, CheckCircle } from "lucide-react";

const improvements = [
  {
    icon: Layout,
    title: "Clean Hero Banner",
    description: "Simplified the hero banner for immediate clarity and focus."
  },
  {
    icon: Info,
    title: "Clarified App Purpose",
    description: "Clearly communicated the app’s value and purpose so new visitors understand it instantly."
  },
  {
    icon: Smartphone,
    title: "Interactive Landing Page",
    description: "Added engaging, scrollable elements to make the landing experience dynamic and informative."
  },
  {
    icon: Download,
    title: "Stronger CTAs",
    description: "Designed clear and prominent download prompts to encourage users to install the app."
  },
  {
    icon: Navigation,
    title: "Streamlined Navigation",
    description: "Reorganized content for faster access to key sections."
  },
  {
    icon: CheckCircle,
    title: "Enhanced UX",
    description: "Reduced clutter and improved information hierarchy for a smoother user experience."
  }
];

const DesignDecisions = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Key Design Decisions
        </h3>

        <div className="space-y-6">
          {improvements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg transition-shadow mx-auto"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignDecisions;
