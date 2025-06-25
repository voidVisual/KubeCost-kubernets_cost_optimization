import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function SavingsOpportunities() {
  return (
    <Card className="shadow-lg h-full">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-yellow-400" />
          Saving Opportunities
        </CardTitle>
        <CardDescription>
          AI-identified areas to reduce cost.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md border">
            <div>
                <p className="font-semibold">Right-Size 15 Pods</p>
                <p className="text-sm text-muted-foreground">Potential Savings: $550/mo</p>
            </div>
            <Button size="sm" asChild>
                <Link href="/right-sizing">View</Link>
            </Button>
        </div>
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md border">
            <div>
                <p className="font-semibold">Idle Resource Alert</p>
                <p className="text-sm text-muted-foreground">2 unused deployments found</p>
            </div>
             <Button size="sm" asChild>
                <Link href="/resource-optimization">Analyze</Link>
            </Button>
        </div>
         <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md border">
            <div>
                <p className="font-semibold">Optimize Storage Class</p>
                <p className="text-sm text-muted-foreground">Save on persistent volumes</p>
            </div>
             <Button size="sm" variant="outline" disabled>
                Coming Soon
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
