'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Activity, RadioTower, Link, CheckCircle, XCircle } from "lucide-react";
import * as React from "react";
import { ClusterResourceChart } from "@/components/monitoring/cluster-resource-chart";
import { WorkloadMonitoringChart } from "@/components/monitoring/workload-monitoring-chart";

const integrations = [
  {
    name: "Prometheus",
    description: "The leading open-source monitoring solution.",
    icon: <RadioTower className="h-10 w-10 text-orange-500" />,
    status: "connected" as const,
  },
  {
    name: "Datadog",
    description: "Cloud-scale monitoring and security for any stack.",
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-purple-600"
        fill="currentColor"
      >
        <title>Datadog</title>
        <path d="M13.68 9.36a4.68 4.68 0 1 1-9.36 0 4.68 4.68 0 0 1 9.36 0zm-4.68 2.52c-1.38 0-2.52-1.14-2.52-2.52s1.14-2.52 2.52-2.52 2.52 1.14 2.52 2.52-1.14 2.52-2.52 2.52zm11.72 8.448V0h-2.136v20.328a3.12 3.12 0 0 1-6.072 1.104l-.096-.288h-2.28a6.24 6.24 0 0 0 12-.912l.576.432.012-.012z" />
      </svg>
    ),
    status: "disconnected" as const,
  },
  {
    name: "New Relic",
    description: "Empower engineers with a data-driven approach to planning.",
    icon: (
        <svg 
            role="img" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-cyan-500"
            fill="currentColor"
        >
            <title>New Relic</title>
            <path d="M12.017 0a12.01 12.01 0 0 0-3.92 23.018c.28.052.38-.116.38-.264v-3.766c-2.316.48-2.92-1.392-2.92-1.392-.516-1.3-1.2-1.644-1.2-1.644-1.02-.684.072-.66.072-.66 1.128.072 1.716 1.152 1.716 1.152 1.008 1.716 2.64 1.224 3.288.936a2.38 2.38 0 0 1 .708-1.452c-2.508-.288-5.148-1.248-5.148-5.58 0-1.236.444-2.244 1.152-3.036-.12-.288-.504-1.428.108-3 0 0 .948-.3 3.12 1.164a10.82 10.82 0 0 1 5.664 0c2.172-1.464 3.12-1.164 3.12-1.164.612 1.572.228 2.712.108 3 .72.792 1.152 1.8 1.152 3.036 0 4.344-2.64 5.292-5.16 5.58a2.9 2.9 0 0 1 .84 2.232v3.312c0 .156.096.324.384.264A12.01 12.01 0 0 0 12.017 0Z"/>
        </svg>
    ),
    status: "disconnected" as const,
  },
    {
    name: "Grafana",
    description: "Visualize and analyze metrics, logs, and traces.",
    icon: (
        <svg 
            role="img" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-orange-400"
            fill="currentColor"
        >
            <title>Grafana</title>
            <path d="M14.331 3.999H4.004v1.65l10.327.003V3.999zM20 9.208l-5.669 3.272V8.49l5.669-3.273v3.991zm-7.32 11.201L18.428 15v-4.498l-5.748 3.32v6.38zM3.996 9.205l5.67-3.272v12.535L3.996 15V9.205z"/>
        </svg>
    ),
    status: "disconnected" as const,
  },
];

type IntegrationStatus = "connected" | "disconnected";

export default function MonitoringIntegrationPage() {
    const { toast } = useToast();
    const [statuses, setStatuses] = React.useState<Record<string, IntegrationStatus>>(
        integrations.reduce((acc, item) => ({ ...acc, [item.name]: item.status }), {})
    );

    const handleConnectToggle = (name: string) => {
        const newStatus = statuses[name] === 'connected' ? 'disconnected' : 'connected';
        setStatuses(prev => ({ ...prev, [name]: newStatus }));
        toast({
            title: `${newStatus === 'connected' ? 'Connected' : 'Disconnected'} ${name}`,
            description: `Integration status has been updated (demo only).`,
            action: <CheckCircle className="text-green-500" />
        });
    };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 space-y-8">
      <header className="mb-4">
        <h1 className="text-3xl font-bold tracking-tight font-headline text-primary">Monitoring Integration</h1>
        <p className="text-muted-foreground mt-1">
          Connect KubeCostOptimizer with your monitoring systems and view live metrics.
        </p>
      </header>
      
      <section aria-labelledby="monitoring-charts-title" className="space-y-8">
        <h2 id="monitoring-charts-title" className="sr-only">Monitoring Charts</h2>
        <ClusterResourceChart />
        <WorkloadMonitoringChart />
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2">
            <RadioTower className="h-6 w-6 text-primary" />
            Connect Your Tools
          </CardTitle>
           <CardDescription>
            This page is a demonstration of how KubeCostOptimizer would connect to external monitoring tools.
           </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                {integrations.map((tool) => {
                    const isConnected = statuses[tool.name] === 'connected';
                    return (
                    <Card key={tool.name} className="shadow-md hover:shadow-lg transition-shadow flex flex-col">
                        <CardHeader className="flex flex-row items-start gap-4">
                        <div>{tool.icon}</div>
                        <div className="flex-1">
                            <CardTitle className="font-headline text-xl">{tool.name}</CardTitle>
                            <CardDescription className="text-xs">{tool.description}</CardDescription>
                        </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                        {isConnected ? (
                            <div className="flex items-center text-sm text-green-600 bg-green-50 p-2 rounded-md border border-green-200">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                <span>Status: Connected</span>
                            </div>
                        ) : (
                            <div className="flex items-center text-sm text-muted-foreground bg-muted/50 p-2 rounded-md border">
                                <XCircle className="h-4 w-4 mr-2" />
                                <span>Status: Not Connected</span>
                            </div>
                        )}
                        </CardContent>
                        <CardFooter>
                        <Button 
                            className="w-full" 
                            variant={isConnected ? "destructive" : "default"}
                            onClick={() => handleConnectToggle(tool.name)}
                        >
                            <Link className="h-4 w-4 mr-2" />
                            {isConnected ? "Disconnect" : "Connect"}
                        </Button>
                        </CardFooter>
                    </Card>
                    )
                })}
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
