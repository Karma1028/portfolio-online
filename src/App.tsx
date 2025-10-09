import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "./components/ui/sidebar";
import Landing from "./pages/Landing";
import About from "./pages/About";

// Import critical components directly for faster loading
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Lazy load only heavy components
const Journey = lazy(() => import("./pages/Journey"));
const Hobbies = lazy(() => import("./pages/Hobbies"));
const GalleryLazy = lazy(() => import("./pages/Gallery"));

import TopNav from "./components/TopNav";

const queryClient = new QueryClient();

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  
  return (
    <div className="flex w-full app-viewport">
      <TopNav />
      <main className={`flex-1 app-scroll-area ${isLandingPage ? 'pt-0' : 'pt-20'}`}>
        <Suspense fallback={
          <div className="flex items-center justify-center h-screen bg-gradient-to-b from-background to-secondary/20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading...</p>
            </motion.div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/portfolio" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Journey />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<GalleryLazy />} />
            <Route path="/contact" element={<Contact />} />
            {false && <Route path="/hobbies" element={<Hobbies />} />}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <AppContent />
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;