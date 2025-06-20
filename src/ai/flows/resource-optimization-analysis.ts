'use server';

/**
 * @fileOverview A Kubernetes resource optimization analysis AI agent.
 *
 * - resourceOptimizationAnalysis - A function that handles the resource optimization analysis process.
 * - ResourceOptimizationAnalysisInput - The input type for the resourceOptimizationAnalysis function.
 * - ResourceOptimizationAnalysisOutput - The return type for the resourceOptimizationAnalysis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResourceOptimizationAnalysisInputSchema = z.object({
  resourceData: z
    .string()
    .describe(
      'Kubernetes resource utilization data in JSON format, including CPU, memory, and network usage for each namespace, pod, and service.'
    ),
});
export type ResourceOptimizationAnalysisInput = z.infer<
  typeof ResourceOptimizationAnalysisInputSchema
>;

const ResourceOptimizationAnalysisOutputSchema = z.object({
  summary: z.string().describe('A summary of the resource optimization analysis.'),
  potentialSavings: z
    .string()
    .describe('An estimate of potential cost savings.'),
  recommendations: z
    .array(z.string())
    .describe(
      'Specific recommendations for right-sizing containers and optimizing resource requests.'
    ),
});
export type ResourceOptimizationAnalysisOutput = z.infer<
  typeof ResourceOptimizationAnalysisOutputSchema
>;

export async function resourceOptimizationAnalysis(
  input: ResourceOptimizationAnalysisInput
): Promise<ResourceOptimizationAnalysisOutput> {
  return resourceOptimizationAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'resourceOptimizationAnalysisPrompt',
  input: {schema: ResourceOptimizationAnalysisInputSchema},
  output: {schema: ResourceOptimizationAnalysisOutputSchema},
  prompt: `You are an expert Kubernetes cost optimizer. Analyze the provided Kubernetes resource utilization data and identify potential cost savings. Provide a summary of your analysis, an estimate of potential cost savings, and specific recommendations for right-sizing containers and optimizing resource requests.

Resource Data: {{{resourceData}}}`,
});

const resourceOptimizationAnalysisFlow = ai.defineFlow(
  {
    name: 'resourceOptimizationAnalysisFlow',
    inputSchema: ResourceOptimizationAnalysisInputSchema,
    outputSchema: ResourceOptimizationAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
