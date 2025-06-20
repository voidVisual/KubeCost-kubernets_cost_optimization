import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Zap } from "lucide-react";
import { MOCK_COST_DATA } from "@/lib/constants";

export function CostOverviewCards() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Estimated Cost</CardTitle>
          <DollarSign className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-primary font-headline">
            {formatCurrency(MOCK_COST_DATA.totalCost)}
          </div>
          <p className="text-xs text-muted-foreground pt-1">
            Current monthly cloud expenditure
          </p>
        </CardContent>
      </Card>
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Potential Monthly Savings</CardTitle>
          <TrendingUp className="h-5 w-5 text-accent" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-accent font-headline">
            {formatCurrency(MOCK_COST_DATA.potentialSavings)}
          </div>
          <p className="text-xs text-muted-foreground pt-1">
            Through optimization recommendations
          </p>
        </CardContent>
      </Card>
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Optimized Resources</CardTitle>
          <Zap className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-primary font-headline">
            {MOCK_COST_DATA.optimizedResources}
          </div>
          <p className="text-xs text-muted-foreground pt-1">
            Number of resources with applied optimizations
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
