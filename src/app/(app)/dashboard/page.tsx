import { CostOverviewCards } from "@/components/dashboard/cost-overview-cards";
import { CostDistributionChart } from "@/components/dashboard/cost-distribution-chart";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-2">
      <h1 className="text-3xl font-bold tracking-tight mb-6 font-headline text-primary">Dashboard</h1>
      
      <section aria-labelledby="cost-overview-title" className="mb-8">
        <h2 id="cost-overview-title" className="sr-only">Cost Overview</h2>
        <CostOverviewCards />
      </section>

      <section aria-labelledby="cost-distribution-title">
        <h2 id="cost-distribution-title" className="sr-only">Cost Distribution</h2>
        <CostDistributionChart />
      </section>
    </div>
  );
}
