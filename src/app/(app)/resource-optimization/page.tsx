import { ResourceAnalysisClient } from '@/components/resource-optimization/resource-analysis-client';

export default function ResourceOptimizationPage() {
  return (
    <div className="container mx-auto py-2">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight font-headline text-primary">Resource Optimization Analysis</h1>
        <p className="text-muted-foreground mt-1">
          Leverage AI to analyze your Kubernetes resource usage and uncover potential cost savings.
        </p>
      </header>
      <ResourceAnalysisClient />
    </div>
  );
}
