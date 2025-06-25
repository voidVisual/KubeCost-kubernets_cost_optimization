'use client';

import * as React from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MOCK_WORKLOAD_METRICS_DATA, WORKLOAD_CHART_CONFIG } from '@/lib/constants';
import { Server } from 'lucide-react';

const workloads = Object.keys(MOCK_WORKLOAD_METRICS_DATA);

export function WorkloadMonitoringChart() {
  const [selectedWorkload, setSelectedWorkload] = React.useState(workloads[0]);

  const chartData = MOCK_WORKLOAD_METRICS_DATA[selectedWorkload];

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
                <CardTitle className="font-headline flex items-center gap-2">
                  <Server className="h-6 w-6 text-primary" />
                  Workload Specific Monitoring
                </CardTitle>
                <CardDescription>
                  Drill down into CPU and Memory usage for a specific workload.
                </CardDescription>
            </div>
            <Select value={selectedWorkload} onValueChange={setSelectedWorkload}>
                <SelectTrigger className="w-full sm:w-[240px]">
                    <SelectValue placeholder="Select a workload" />
                </SelectTrigger>
                <SelectContent>
                    {workloads.map(workload => (
                        <SelectItem key={workload} value={workload}>
                            {workload}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ChartContainer config={WORKLOAD_CHART_CONFIG} className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 20,
                  left: 10,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis
                    yAxisId="left"
                    tickLine={false}
                    axisLine={false}
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickFormatter={(value) => `${value}`}
                    orientation="left"
                />
                <YAxis
                    yAxisId="right"
                    tickLine={false}
                    axisLine={false}
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickFormatter={(value) => `${value}`}
                    orientation="right"
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <ChartLegend content={<ChartLegendContent />} />
                <Line
                  dataKey="cpu"
                  type="monotone"
                  stroke="var(--color-cpu)"
                  strokeWidth={2}
                  dot={false}
                  yAxisId="left"
                />
                <Line
                  dataKey="memory"
                  type="monotone"
                  stroke="var(--color-memory)"
                  strokeWidth={2}
                  dot={false}
                  yAxisId="right"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
