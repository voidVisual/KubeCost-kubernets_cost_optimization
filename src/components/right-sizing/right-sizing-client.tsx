'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { RightSizingRecommendationsSchema, type RightSizingRecommendationsFormData } from '@/lib/schemas';
import { getRightSizingRecommendationsAction } from '@/lib/actions';
import type { RightSizeRecommendationsOutput } from '@/ai/flows/right-sizing-recommendations';
import { Loader2, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function RightSizingClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendationResult, setRecommendationResult] = useState<RightSizeRecommendationsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<RightSizingRecommendationsFormData>({
    resolver: zodResolver(RightSizingRecommendationsSchema),
    defaultValues: {
      deploymentName: '',
      applicationDetails: '',
    },
  });

  async function onSubmit(values: RightSizingRecommendationsFormData) {
    setIsLoading(true);
    setRecommendationResult(null);
    const { data, error } = await getRightSizingRecommendationsAction(values);
    setIsLoading(false);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Recommendation Failed',
        description: error,
      });
    } else if (data) {
      setRecommendationResult(data);
      toast({
        title: 'Recommendations Ready',
        description: 'Right-sizing recommendations generated successfully.',
        action: <Lightbulb className="text-yellow-400" />,
      });
    }
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Get Right-Sizing Recommendations</CardTitle>
          <CardDescription>
            Input your container's deployment name and optional application details to receive AI-powered right-sizing advice.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="deploymentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="deploymentName">Deployment Name</FormLabel>
                    <FormControl>
                      <Input
                        id="deploymentName"
                        placeholder="e.g., my-app-deployment"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="applicationDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="applicationDetails">Application Details (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        id="applicationDetails"
                        placeholder="e.g., stateless web server, high burst traffic"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="button" variant="outline" size="sm" onClick={() => form.setValue('deploymentName', 'my-app')}>
                Load Sample Deployment Name
              </Button>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Get Recommendations'
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {recommendationResult && (
        <Card className="shadow-lg animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-yellow-400" />
              AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Suggested Configuration (YAML)</h3>
              <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto font-code max-h-96">
                <code>{recommendationResult.recommendations}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Confidence Score</h3>
              <Badge variant={recommendationResult.confidenceScore > 0.7 ? 'default' : 'secondary'} className="text-base bg-primary/10 text-primary border-primary/20">
                {(recommendationResult.confidenceScore * 100).toFixed(0)}%
              </Badge>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Justification</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{recommendationResult.justification}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
