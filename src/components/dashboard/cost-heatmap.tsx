import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame } from "lucide-react";
import Image from "next/image";

export function CostHeatmap() {
  return (
    <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2">
            <Flame className="h-6 w-6 text-primary" />
            Cost Heatmap
          </CardTitle>
          <CardDescription>
            Visualize cost concentration across namespaces and resources. Darker areas indicate higher cost.
          </CardDescription>
        </CardHeader>
      <CardContent className="flex justify-center items-center p-0">
        <Image
          src="https://placehold.co/1200x400.png"
          alt="Cost Heatmap Placeholder"
          width={1200}
          height={400}
          className="rounded-b-lg w-full h-auto"
          data-ai-hint="heatmap chart"
        />
      </CardContent>
    </Card>
  );
}
