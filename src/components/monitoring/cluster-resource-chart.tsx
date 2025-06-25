'use client';

import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MOCK_CLUSTER_METRICS_DATA, CLUSTER_CHART_CONFIG } from '@/lib/constants';
import { Activity } from 'lucide-react';

export function ClusterResourceChart() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          Overall Cluster Resources
        </CardTitle>
        <CardDescription>
          Live view of aggregate CPU and Memory usage across the entire cluster.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ChartContainer config={CLUSTER_CHART_CONFIG} className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={MOCK_CLUSTER_METRICS_DATA}
                margin={{
                  top: 5,
                  right: 20,
                  left: 10,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickFormatter={(value) => `${value}%`}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                 <ChartLegend content={<ChartLegendContent />} />
                <Area
                  dataKey="cpu"
                  type="monotone"
                  fill="var(--color-cpu)"
                  fillOpacity={0.4}
                  stroke="var(--color-cpu)"
                  stackId="a"
                />
                <Area
                  dataKey="memory"
                  type="monotone"
                  fill="var(--color-memory)"
                  fillOpacity={0.4}
                  stroke="var(--color-memory)"
                  stackId="b"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
