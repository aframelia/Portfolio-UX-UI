import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import FlightCaseStudy from "./pages/FlightCaseStudy";
import TorontoCupcakeCaseStudy from "./pages/TorontoCupcakeCaseStudy";
import SquidgiesCaseStudy from "./pages/SquidgiesCaseStudy";
import AIHealtCaseStudy from "./pages/AIHealtCaseStudy";
import Bhive from "./pages/Bhive";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/flight-case-study" element={<FlightCaseStudy />} />
            <Route path="/cupcake-case-study" element={<TorontoCupcakeCaseStudy />} />
            <Route path="/squidgies-case-study" element={<SquidgiesCaseStudy />} />
            <Route path="/AIhealth-case-study" element={<AIHealtCaseStudy />} />
            <Route path="/haircare-case-study" element={<Bhive />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
