import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import GuruBesar from "./pages/GuruBesar";
import KetuaUmum from "./pages/KetuaUmum";
import ProgramKerja from "./pages/ProgramKerja";
import TimPengda from "./pages/TimPengda";
import KontakPerson from "./pages/KontakPerson";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/guru-besar" element={<GuruBesar />} />
          <Route path="/ketua-umum" element={<KetuaUmum />} />
          <Route path="/program-kerja" element={<ProgramKerja />} />
          <Route path="/tim-pengda" element={<TimPengda />} />
          <Route path="/kontak-person" element={<KontakPerson />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
