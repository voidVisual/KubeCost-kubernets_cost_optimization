'use client';

import * as React from 'react';
import type { DateRange } from 'react-day-picker';
import { addDays, set } from 'date-fns';

import { CostOverviewCards } from "@/components/dashboard/cost-overview-cards";
import { CostDistributionChart } from "@/components/dashboard/cost-distribution-chart";
import { DashboardFilters } from "@/components/dashboard/dashboard-filters";
import { CostHeatmap } from "@/components/dashboard/cost-heatmap";
import { SavingsOpportunities } from "@/components/dashboard/savings-opportunities";

export interface DashboardFilterState {
  date: DateRange | undefined;
  namespace: string;
  label: string;
}

export default function DashboardPage() {
  const [filters, setFilters] = React.useState<DashboardFilterState>({
    date: undefined,
    namespace: 'all',
    label: 'all',
  });

  React.useEffect(() => {
    // Set initial date on client to avoid hydration errors
    setFilters(prev => ({
        ...prev,
        date: {
            from: addDays(new Date(), -30),
            to: new Date(),
        }
    }));
  }, []);


  const handleApplyFilters = (newFilters: DashboardFilterState) => {
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline text-primary">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
            Real-time cost visibility and resource efficiency insights.
        </p>
      </header>
      
      <DashboardFilters 
        initialFilters={filters}
        onApplyFilters={handleApplyFilters}
      />

      <section aria-labelledby="cost-overview-title">
        <h2 id="cost-overview-title" className="sr-only">Cost Overview</h2>
        <CostOverviewCards filters={filters} />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CostDistributionChart filters={filters} />
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
