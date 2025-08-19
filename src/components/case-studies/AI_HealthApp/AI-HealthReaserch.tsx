import { MessageSquare, Search, Users, Target, Lightbulb, CheckCircle2, AlertTriangle, Lightbulb as IdeaIcon } from "lucide-react";

const AIHealthResearch = () => {
  const competitors = [
    {
      name: "Ada Health",
      patterns: "Chat-based, Recommendation-based, Confidence Scores, Prompt Suggestions",
      worksWell: [
        "Conversational and easy to follow due to chat-based flow",
        "Follow-up questions improve accuracy",
        "Trust signals like NHS references and confidence scores",
        "Clear summary after triage"
      ],
      fails: [
        "Text-heavy results, hard to scan quickly",
        "Overly long steps slow down process",
        "Some medical terms not simplified for laypeople"
      ]
    },
    {
      name: "K Health",
      patterns: "Predictive/autofill, Recommendation-based, Chat-based, Error Handling",
      worksWell: [
        "Predictive/autofill in symptom form speeds input",
        "Balanced mix of structured triage and conversational follow-up",
        "Strong trust elements – doctor profiles, partner logos, disclaimers",
        "Option to connect to a real doctor"
      ],
      fails: [
        "Some AI responses feel scripted and generic",
        "Free version limits detail, causing frustration",
        "Visual design feels clinical and cold"
      ]
    },
    {
      name: "Healthily",
      patterns: "Search-based, Chat-based, Recommendation-based, Trust Signals",
      worksWell: [
        "Search-first approach for quick answers",
        "Filters by severity or type improve relevance",
        "Strong trust signals – NHS logos, update dates",
        "Mix of articles and AI responses for context"
      ],
      fails: [
        "No visible confidence score for certainty",
        "Rigid search – phrasing matters too much",
        "Less personal than conversational flows"
      ]
    }
  ];

  const commonWins = [
    "Strong trust elements such as NHS references, doctor profiles, and update dates",
    "Multiple interaction styles (chat, forms, search) improve accessibility",
    "Clear follow-up questions refine AI outputs",
    "AI outputs often paired with educational resources for context"
  ];

  const commonFails = [
    "Overly long or dense AI responses that are hard to scan",
    "Some AI outputs feel scripted or lack personalization",
    "Confidence levels are not always visible or clear",
    "Rigid search/input handling reduces flexibility in phrasing"
  ];

  const designImplications = [
    "Simplify language and break down AI outputs into bite-sized chunks for faster scanning.",
    "Incorporate clear, visible confidence levels or uncertainty indicators in AI results.",
    "Offer multiple input modes — chat, form autofill, and search — to fit diverse user preferences.",
    "Use trust signals prominently to build credibility and user reassurance.",
    "Balance AI-generated info with human touchpoints, like access to real clinicians or easy escalation.",
    "Make the interface feel warm and empathetic rather than clinical or cold, to reduce user anxiety."
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🩺 Competitor Review – AI Health Apps
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Analysis of existing AI-powered health apps to identify strengths, weaknesses, and common AI UX patterns.
          </p>
        </div>

        {/* Competitor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {competitors.map((comp, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">{comp.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                <strong>AI UX Patterns:</strong> {comp.patterns}
              </p>

              <h4 className="text-green-600 font-semibold mb-2">✅ Works Well</h4>
              <ul className="space-y-2 mb-4">
                {comp.worksWell.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1"></div>
                    {point}
                  </li>
                ))}
              </ul>

              <h4 className="text-yellow-600 font-semibold mb-2">⚠️ Fails</h4>
              <ul className="space-y-2">
                {comp.fails.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1"></div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Common Wins & Pitfalls */}
        <div className="bg-card p-8 rounded-xl border border-border mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-foreground">Common Wins</h3>
              </div>
              <ul className="space-y-3">
                {commonWins.map((win, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1"></div>
                    {win}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-bold text-foreground">Common Pitfalls</h3>
              </div>
              <ul className="space-y-3">
                {commonFails.map((fail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1"></div>
                    {fail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Design Implications */}
        <div className="bg-card p-8 rounded-xl border border-border">
          <div className="flex items-center gap-3 mb-6">
            <IdeaIcon className="w-7 h-7 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">💡 Design Implications</h3>
          </div>

          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto text-center">
            Based on competitor analysis and identified common UX patterns, these design implications guide how to build an AI health app that is user-friendly, trustworthy, and empathetic — addressing key pitfalls while leveraging proven strengths.
          </p>

          <ul className="space-y-4 list-disc list-inside text-foreground text-sm md:text-base max-w-3xl mx-auto">
            {designImplications.map((implication, i) => (
              <li key={i}>{implication}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AIHealthResearch;
