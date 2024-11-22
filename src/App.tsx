import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import Services from "./pages/Services";
import VideoEditing from "./pages/VideoEditing";
import Foods from "./pages/Foods";
import Tutor from "./pages/Tutor";
import Repair from "./pages/Repair";
import RentABuddy from "./pages/RentABuddy";
import GraphicDesign from "./pages/GraphicDesign";
import Selling from "./pages/Selling";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="skillswap-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/video-editing" element={<VideoEditing />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/tutor" element={<Tutor />} />
            <Route path="/repair" element={<Repair />} />
            <Route path="/rent-a-buddy" element={<RentABuddy />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/selling" element={<Selling />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;