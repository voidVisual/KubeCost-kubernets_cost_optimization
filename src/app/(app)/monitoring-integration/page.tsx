import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Link } from "lucide-react";
import Image from "next/image";

export default function MonitoringIntegrationPage() {
  return (
    <div className="container mx-auto py-2">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight font-headline text-primary">Monitoring Integration</h1>
        <p className="text-muted-foreground mt-1">
          Connect KubeCostOptimizer with your monitoring systems for real-time data.
        </p>
      </header>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            Connect Your Tools
          </CardTitle>
          <CardDescription>
            Integrate with Prometheus, Datadog, and other popular monitoring platforms to automatically fetch resource utilization data. This feature is currently under development.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Image 
            src="https://placehold.co/600x400.png"
            alt="Monitoring tools integration concept"
            width={600}
            height={400}
            className="rounded-lg mx-auto shadow-md"
            data-ai-hint="monitoring dashboard"
          />
          <p className="text-muted-foreground mt-6 text-lg">
            Stay tuned for updates on direct integration capabilities!
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            For now, you can manually input data in the Resource Optimization and Right-Sizing sections.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
