import { CostOverviewCards } from "@/components/dashboard/cost-overview-cards";
import { CostDistributionChart } from "@/components/dashboard/cost-distribution-chart";
import { DashboardFilters } from "@/components/dashboard/dashboard-filters";
import { CostHeatmap } from "@/components/dashboard/cost-heatmap";
import { SavingsOpportunities } from "@/components/dashboard/savings-opportunities";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-2 space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline text-primary">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
            Real-time cost visibility and resource efficiency insights.
        </p>
      </header>
      
      <DashboardFilters />

      <section aria-labelledby="cost-overview-title">
        <h2 id="cost-overview-title" className="sr-only">Cost Overview</h2>
        <CostOverviewCards />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CostDistributionChart />
        </div>
        <div>
          <SavingsOpportunities />
        </div>
      </div>

      <section aria-labelledby="cost-heatmap-title">
        <CostHeatmap />
      </section>
    </div>
  );
}
