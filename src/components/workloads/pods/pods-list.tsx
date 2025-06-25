'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MOCK_PODS_DATA } from "@/lib/workloads-data";
import { CheckCircle2, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Filter, MoreVertical } from "lucide-react";

export function PodsList() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Pods</CardTitle>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
                <Filter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10"></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Labels</TableHead>
              <TableHead>Node</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Restarts</TableHead>
              <TableHead>CPU Usage (cores)</TableHead>
              <TableHead>Memory Usage (bytes)</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="w-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_PODS_DATA.map((pod) => (
              <TableRow key={pod.name}>
                <TableCell>
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </TableCell>
                <TableCell className="font-medium text-primary hover:underline cursor-pointer">{pod.name}</TableCell>
                <TableCell>
                    <div className="flex flex-wrap gap-1">
                        {pod.labels.map(label => (
                            <Badge key={label.key} variant="secondary" className="font-normal">{label.key}: {label.value}</Badge>
                        ))}
                    </div>
                </TableCell>
                <TableCell>{pod.node}</TableCell>
                <TableCell>{pod.status}</TableCell>
                <TableCell>{pod.restarts}</TableCell>
                <TableCell>
                    <div className="flex items-center gap-2">
                        <Progress value={pod.cpuUsage} className="h-2 w-24" indicatorClassName="bg-green-500" />
                        <span className="text-muted-foreground text-xs">1.00m</span>
                    </div>
                </TableCell>
                <TableCell>
                     <div className="flex items-center gap-2">
                        <Progress value={pod.memoryUsage} className="h-2 w-24" />
                        <span className="text-muted-foreground text-xs">{pod.memoryValue}</span>
                    </div>
                </TableCell>
                <TableCell>{pod.age}</TableCell>
                <TableCell>
                    <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end space-x-2 py-4 text-sm text-muted-foreground">
            <span>Rows per page: 2</span>
            <span className="px-4">1-2 of 2</span>
            <div className="flex items-center space-x-1">
                <Button variant="outline" size="icon" className="h-8 w-8" disabled>
                    <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8" disabled>
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8" disabled>
                    <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8" disabled>
                    <ChevronsRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
