import { Route, Router, Switch } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HeadManager } from "./components/HeadManager";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import DestinationDetail from "./pages/DestinationDetail";
import Category from "./pages/Category";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/destino/:id" component={DestinationDetail} />
      <Route path="/categoria/:slug" component={Category} />
      <Route path="/sobre" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

interface AppProps {
  /** Caminho da página quando renderizada no build (pré-renderização). */
  ssrPath?: string;
}

function App({ ssrPath }: AppProps) {
  return (
    <ErrorBoundary>
      <Router ssrPath={ssrPath}>
        <HeadManager />
        <ScrollToTop />
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Routes />
            <ScrollToTopButton />
          </TooltipProvider>
        </ThemeProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
