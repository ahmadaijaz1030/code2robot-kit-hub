import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { useIsMobile } from "./hooks/use-mobile";
import { useLocation } from "react-router-dom";
import React from "react";
import Videos from "./pages/Videos";

const queryClient = new QueryClient();

function ScrollToTopOnMobile() {
  const isMobile = useIsMobile();
  const { pathname } = useLocation();
  React.useEffect(() => {
    if (isMobile) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname, isMobile]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopOnMobile />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/videos" element={<Videos />} />
            {/* ADD ANY CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
