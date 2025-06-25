'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MOCK_MEMORY_USAGE_DATA, PODS_CHART_CONFIG } from '@/lib/workloads-data';

export function MemoryUsageChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Memory Usage</CardTitle>
        <CardDescription>Memory (bytes)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ChartContainer config={PODS_CHART_CONFIG} className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MOCK_MEMORY_USAGE_DATA} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="time" tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickFormatter={(value) => `${value} Mi`}
                    />
                    <ChartTooltip
                        cursor={{ fill: 'hsl(var(--accent)/0.1)' }}
                        content={<ChartTooltipContent />}
                    />
                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={2} />
                </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
