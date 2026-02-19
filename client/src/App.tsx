import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

const Home = lazy(() => import("@/pages/Home"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
        <Router />
      </Suspense>
    </TooltipProvider>
  );
}

export default App;
