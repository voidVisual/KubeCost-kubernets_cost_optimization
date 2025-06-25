'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { ResourceOptimizationAnalysisSchema, type ResourceOptimizationAnalysisFormData } from '@/lib/schemas';
import { getResourceOptimizationAnalysisAction } from '@/lib/actions';
import type { ResourceOptimizationAnalysisOutput } from '@/ai/flows/resource-optimization-analysis';
import { Loader2, CheckCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function ResourceAnalysisClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<ResourceOptimizationAnalysisOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<ResourceOptimizationAnalysisFormData>({
    resolver: zodResolver(ResourceOptimizationAnalysisSchema),
    defaultValues: {
      namespace: 'all',
    },
  });

  async function onSubmit(values: ResourceOptimizationAnalysisFormData) {
    setIsLoading(true);
    setAnalysisResult(null);
    const { data, error } = await getResourceOptimizationAnalysisAction(values);
    setIsLoading(false);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: error,
      });
    } else if (data) {
      setAnalysisResult(data);
      toast({
        title: 'Analysis Complete',
        description: 'Resource optimization analysis finished successfully.',
        action: <CheckCircle className="text-green-500" />,
      });
    }
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Analyze Resource Utilization</CardTitle>
          <CardDescription>
            Select a Kubernetes namespace to analyze and get AI-driven optimization insights.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="namespace"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Namespace</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a namespace to analyze" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="all">All Namespaces</SelectItem>
                        <SelectItem value="production">production</SelectItem>
                        <SelectItem value="staging">staging</SelectItem>
                        <SelectItem value="kube-system">kube-system</SelectItem>
                        <SelectItem value="monitoring">monitoring</SelectItem>
                        <SelectItem value="default">default</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Analyze Resources'
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {analysisResult && (
        <Card className="shadow-lg animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              Analysis Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">Summary</h3>
              <p className="text-muted-foreground">{analysisResult.summary}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Potential Savings</h3>
              <p className="text-accent font-bold text-xl">{analysisResult.potentialSavings}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Recommendations</h3>
              {analysisResult.recommendations.length > 0 ? (
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {analysisResult.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No specific recommendations at this time.</p>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
