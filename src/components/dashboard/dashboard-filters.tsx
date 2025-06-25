'use client';

import * as React from 'react';
import type { DateRange } from 'react-day-picker';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Filter } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { DashboardFilterState } from '@/app/(app)/dashboard/page';

interface DashboardFiltersProps {
  initialFilters: DashboardFilterState;
  onApplyFilters: (filters: DashboardFilterState) => void;
}

export function DashboardFilters({ initialFilters, onApplyFilters }: DashboardFiltersProps) {
  // Local state to manage form before applying
  const [date, setDate] = React.useState<DateRange | undefined>(initialFilters.date);
  const [namespace, setNamespace] = React.useState(initialFilters.namespace);
  const [label, setLabel] = React.useState(initialFilters.label);

  const handleApply = () => {
    onApplyFilters({ date, namespace, label });
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-4">
        <CardTitle className="font-headline flex items-center gap-2 text-xl">
          <Filter className="h-5 w-5 text-primary" />
          Filter & View Options
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row flex-wrap items-center gap-4">
        <div className="grid gap-1">
           <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-full sm:w-[260px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="grid gap-1">
          <Select value={namespace} onValueChange={setNamespace}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="All Namespaces" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Namespaces</SelectItem>
              <SelectItem value="kube-system">kube-system</SelectItem>
              <SelectItem value="monitoring">monitoring</SelectItem>
              <SelectItem value="default">default</SelectItem>
              <SelectItem value="production-app">production-app</SelectItem>
              <SelectItem value="staging-app">staging-app</SelectItem>
            </SelectContent>
          </Select>
        </div>
         <div className="grid gap-1">
           <Select value={label} onValueChange={setLabel}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="All Labels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Labels</SelectItem>
              <SelectItem value="team:backend">team:backend</SelectItem>
              <SelectItem value="team:frontend">team:frontend</SelectItem>
              <SelectItem value="project:alpha">project:alpha</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="ml-auto" onClick={handleApply}>Apply</Button>
      </CardContent>
    </Card>
  );
}
