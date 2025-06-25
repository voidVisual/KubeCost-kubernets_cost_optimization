'use client';

import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MOCK_CPU_USAGE_DATA, PODS_CHART_CONFIG } from '@/lib/workloads-data';

export function CpuUsageChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>CPU Usage</CardTitle>
        <CardDescription>CPU (cores)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ChartContainer config={PODS_CHART_CONFIG} className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={MOCK_CPU_USAGE_DATA}
                margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    domain={[0, 0.03]}
                />
                <ChartTooltip
                  cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 2 }}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="value"
                  type="natural"
                  fill="hsl(var(--chart-2) / 0.4)"
                  stroke="hsl(var(--chart-2))"
                  stackId="a"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
