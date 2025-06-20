import { SavingsTable } from "@/components/savings-reports/savings-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function SavingsReportsPage() {
  return (
    <div className="container mx-auto py-2">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight font-headline text-primary">Savings Reports</h1>
        <p className="text-muted-foreground mt-1">
          Track the cost savings achieved through your optimization efforts.
        </p>
      </header>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Optimization Impact
          </CardTitle>
          <CardDescription>
            Review the history of applied optimizations and their corresponding cost savings.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SavingsTable />
        </CardContent>
      </Card>
    </div>
  );
}
