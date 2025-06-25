'use server';

/**
 * @fileOverview Provides AI-driven recommendations for right-sizing containers and optimizing resource requests.
 *
 * - rightSizeRecommendations - A function that suggests optimal resource allocation for Kubernetes containers.
 * - RightSizeRecommendationsInput - The input type for the rightSizeRecommendations function.
 * - RightSizeRecommendationsOutput - The return type for the rightSizeRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { getCurrentResourceConfig, getResourceUtilizationData } from '@/services/k8s-service';

const RightSizeRecommendationsInputSchema = z.object({
  deploymentName: z.string().describe('The name of the Kubernetes deployment to analyze.'),
  applicationDetails: z
    .string()
    .optional()
    .describe(
      'Optional details about the application running in the container, such as its type, workload characteristics, and performance requirements.'
    ),
});
export type RightSizeRecommendationsInput = z.infer<typeof RightSizeRecommendationsInputSchema>;

const RightSizeRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe(
      'AI-driven recommendations for right-sizing containers, including suggested CPU and memory requests and limits in YAML format.'
    ),
  confidenceScore: z
    .number()
    .describe(
      'A confidence score (0-1) indicating the reliability of the recommendations, with higher values indicating greater confidence.'
    ),
  justification: z
    .string()
    .describe(
      'A detailed explanation of why the recommendations are being made, based on the resource utilization data and application details.'
    ),
});
export type RightSizeRecommendationsOutput = z.infer<typeof RightSizeRecommendationsOutputSchema>;

export async function rightSizeRecommendations(
  input: RightSizeRecommendationsInput
): Promise<RightSizeRecommendationsOutput> {
  return rightSizeRecommendationsFlow(input);
}

const RightSizingPromptInputSchema = z.object({
  currentResourceConfig: z
    .string()
    .describe(
      'The current Kubernetes resource configuration in YAML format, including CPU and memory requests and limits.'
    ),
  resourceUtilizationData: z
    .string()
    .describe(
      'Resource utilization data from monitoring tools like Prometheus, including CPU and memory usage over time, as a JSON string.'
    ),
  applicationDetails: z
    .string()
    .optional()
    .describe(
      'Optional details about the application running in the container, such as its type, workload characteristics, and performance requirements.'
    ),
});

const prompt = ai.definePrompt({
  name: 'rightSizeRecommendationsPrompt',
  input: {schema: RightSizingPromptInputSchema},
  output: {schema: RightSizeRecommendationsOutputSchema},
  prompt: `You are an AI-powered Kubernetes resource optimization expert. Your task is to analyze the current resource configuration and utilization data of a container and provide recommendations for right-sizing it to minimize resource waste and improve efficiency.

  Here's the current resource configuration (in YAML format):
  {{{currentResourceConfig}}}

  Here's the resource utilization data (as a JSON string):
  {{{resourceUtilizationData}}}

  {{#if applicationDetails}}
  Here are the details about the application running in the container:
  {{{applicationDetails}}}
  {{/if}}

  Based on this information, provide clear and actionable recommendations for right-sizing the container. Include suggested CPU and memory requests and limits (in YAML format), a confidence score (0-1) for the recommendations, and a detailed justification for your recommendations.

  Ensure that the recommendations are safe and will not negatively impact the application's performance. Consider the application's workload characteristics and performance requirements when making your recommendations.
`,
});

const rightSizeRecommendationsFlow = ai.defineFlow(
  {
    name: 'rightSizeRecommendationsFlow',
    inputSchema: RightSizeRecommendationsInputSchema,
    outputSchema: RightSizeRecommendationsOutputSchema,
  },
  async input => {
    const [currentResourceConfig, resourceUtilizationData] = await Promise.all([
        getCurrentResourceConfig(input.deploymentName),
        getResourceUtilizationData(input.deploymentName)
    ]);

    const {output} = await prompt({
        currentResourceConfig,
        resourceUtilizationData,
        applicationDetails: input.applicationDetails
    });
    return output!;
  }
);
