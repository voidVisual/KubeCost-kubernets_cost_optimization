'use client'
import { Button } from "@/components/ui/button";
import { WorkloadsSidebar } from "@/components/workloads/workloads-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CpuUsageChart } from "@/components/workloads/pods/cpu-usage-chart";
import { MemoryUsageChart } from "@/components/workloads/pods/memory-usage-chart";
import { PodsList } from "@/components/workloads/pods/pods-list";
import { ChevronRight, Menu } from "lucide-react";

export default function PodsPage() {
  return (
    <div className="flex h-full">
      <WorkloadsSidebar />
      <div className="flex-1 p-4 sm:p-6 space-y-6">
        <div className="flex items-center">
            <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
            </Button>
          <h1 className="text-2xl font-semibold flex items-center gap-2 text-muted-foreground">
            Workloads
            <ChevronRight className="h-5 w-5" />
            <span className="text-foreground">Pods</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CpuUsageChart />
            <MemoryUsageChart />
        </div>

        <div>
            <PodsList />
        </div>
      </div>
    </div>
  );
}
