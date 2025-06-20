'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, LabelList } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MOCK_COST_BREAKDOWN_DATA, COST_CHART_CONFIG } from '@/lib/constants';
import type { Icon } from 'lucide-react';

type ChartDataType = {
  category: string;
  value: number;
  fill: string;
  icon: Icon;
};

export function CostDistributionChart() {
  const [activeTab, setActiveTab] = React.useState<'namespace' | 'pod' | 'service'>('namespace');
  const chartData = MOCK_COST_BREAKDOWN_DATA[activeTab];

  const CustomTooltipContent = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const IconComponent = data.icon;
      return (
        <div className="rounded-lg border bg-background p-2 shadow-sm">
          <div className="grid grid-cols-[auto,1fr] items-center gap-2">
            <IconComponent className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm font-medium">{label}</p>
          </div>
          <p className="text-right text-sm text-muted-foreground">
            Cost: ${data.value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Cost Distribution</CardTitle>
        <CardDescription>Breakdown of costs by different Kubernetes resources.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="namespace">Namespace</TabsTrigger>
            <TabsTrigger value="pod">Pod</TabsTrigger>
            <TabsTrigger value="service">Service</TabsTrigger>
          </TabsList>
          
          <div className="h-[350px] w-full">
            <ChartContainer config={COST_CHART_CONFIG} className="h-full w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 30, top: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `$${value / 1000}k`} />
                  <YAxis 
                    dataKey="category" 
                    type="category" 
                    tickLine={false} 
                    axisLine={false} 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickFormatter={(value) => COST_CHART_CONFIG[value as keyof typeof COST_CHART_CONFIG]?.label || value}
                    width={120}
                  />
                  <ChartTooltip
                    cursor={{ fill: 'hsl(var(--accent)/0.1)' }}
                    content={<CustomTooltipContent />}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={30}>
                     <LabelList 
                        dataKey="value" 
                        position="right" 
                        offset={8} 
                        className="fill-foreground" 
                        fontSize={12}
                        formatter={(value: number) => `$${value.toLocaleString()}`}
                      />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}
