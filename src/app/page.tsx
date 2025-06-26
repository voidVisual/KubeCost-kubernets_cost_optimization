import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame, DollarSign, Zap, BarChart } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between border-b">
        <Link href="/" className="flex items-center gap-2">
          <Flame className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold font-headline tracking-tight">KubeCostOptimizer</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Button asChild>
            <Link href="/dashboard">Explore Dashboard</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline text-primary animate-in fade-in-0 slide-in-from-top-12 duration-1000">
              Your Kubernetes Costs, <span className="text-foreground">Demystified.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in-0 slide-in-from-top-16 duration-1000 delay-200">
              KubeCostOptimizer provides real-time cost visibility and AI-driven insights to help you slash your cloud bill by up to 60%. Stop guessing, start optimizing.
            </p>
            <div className="animate-in fade-in-0 slide-in-from-top-20 duration-1000 delay-400">
              <Button size="lg" asChild>
                <Link href="/dashboard">Get Started for Free</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/40 py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Why KubeCostOptimizer?</h2>
              <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                Powerful features to give you complete control over your Kubernetes spending.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center animate-in fade-in-0 slide-in-from-bottom-12 duration-700 delay-200 shadow-md hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                    <BarChart className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline pt-4">Real-Time Visibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get an instant, granular view of your K8s costs broken down by namespace, pod, and label. No more surprises.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center animate-in fade-in-0 slide-in-from-bottom-12 duration-700 delay-400 shadow-md hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 text-accent rounded-full p-3 w-fit">
                    <DollarSign className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline pt-4">AI-Powered Savings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Leverage Genkit AI to receive actionable right-sizing and resource optimization recommendations.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center animate-in fade-in-0 slide-in-from-bottom-12 duration-700 delay-600 shadow-md hover:shadow-xl transition-shadow">
                <CardHeader>
                   <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                    <Zap className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline pt-4">Proactive Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Set up custom alerts for cost spikes and idle resources to stay ahead of budget overruns before they happen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
             <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Optimize?</h2>
                <p className="text-lg text-muted-foreground mt-4 mb-8">
                    Take control of your cloud spend today. Explore the live demo and see the power of KubeCostOptimizer for yourself.
                </p>
                <Button size="lg" asChild>
                    <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
            </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} KubeCostOptimizer. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
