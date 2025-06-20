'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MOCK_SAVINGS_REPORTS_DATA } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function SavingsTable() {
  const { toast } = useToast();

  const handleGenerateReport = () => {
    toast({
      title: "Report Generation",
      description: "This feature is for demonstration. A full report would be generated here.",
    });
  };
  
  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'implemented':
        return 'default'; // default is often primary
      case 'pending':
        return 'secondary';
      default:
        return 'outline';
    }
  };


  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={handleGenerateReport} variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Generate Full Report (Demo)
        </Button>
      </div>
      <Table>
        <TableCaption>A list of your recent cost-saving optimizations.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Date</TableHead>
            <TableHead>Optimization Applied</TableHead>
            <TableHead className="text-right w-[150px]">Savings Achieved</TableHead>
            <TableHead className="w-[120px] text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {MOCK_SAVINGS_REPORTS_DATA.map((report) => (
            <TableRow key={report.id} className="hover:bg-muted/50 transition-colors">
              <TableCell className="font-medium">{report.date}</TableCell>
              <TableCell>{report.optimization}</TableCell>
              <TableCell className="text-right font-semibold text-accent">
                ${report.savings.toFixed(2)}
              </TableCell>
              <TableCell className="text-center">
                <Badge variant={getStatusBadgeVariant(report.status) as any} className="capitalize">
                  {report.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
