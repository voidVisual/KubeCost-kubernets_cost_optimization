'use server';

import { z } from 'zod';
import { resourceOptimizationAnalysis, type ResourceOptimizationAnalysisInput, type ResourceOptimizationAnalysisOutput } from '@/ai/flows/resource-optimization-analysis';
import { rightSizeRecommendations, type RightSizeRecommendationsInput, type RightSizeRecommendationsOutput } from '@/ai/flows/right-sizing-recommendations';
import { ResourceOptimizationAnalysisSchema, RightSizingRecommendationsSchema } from '@/lib/schemas';

export async function getResourceOptimizationAnalysisAction(
  values: z.infer<typeof ResourceOptimizationAnalysisSchema>
): Promise<{ data?: ResourceOptimizationAnalysisOutput; error?: string }> {
  const validatedFields = ResourceOptimizationAnalysisSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid input: ' + validatedFields.error.flatten().fieldErrors.namespace?.join(', ') };
  }
  
  const input: ResourceOptimizationAnalysisInput = {
    namespace: validatedFields.data.namespace,
  };

  try {
    const result = await resourceOptimizationAnalysis(input);
    return { data: result };
  } catch (error) {
    console.error('Error in getResourceOptimizationAnalysisAction:', error);
    return { error: 'Failed to get resource optimization analysis. Please try again.' };
  }
}

export async function getRightSizingRecommendationsAction(
  values: z.infer<typeof RightSizingRecommendationsSchema>
): Promise<{ data?: RightSizeRecommendationsOutput; error?: string }> {
  const validatedFields = RightSizingRecommendationsSchema.safeParse(values);

  if (!validatedFields.success) {
     let errorMessages = [];
     if(validatedFields.error.flatten().fieldErrors.deploymentName) errorMessages.push("Deployment Name: " + validatedFields.error.flatten().fieldErrors.deploymentName?.join(', '));
    return { error: 'Invalid input: ' + errorMessages.join('; ') };
  }

  const input: RightSizeRecommendationsInput = {
    deploymentName: validatedFields.data.deploymentName,
    applicationDetails: validatedFields.data.applicationDetails,
  };

  try {
    const result = await rightSizeRecommendations(input);
    return { data: result };
  } catch (error) {
    console.error('Error in getRightSizingRecommendationsAction:', error);
    return { error: 'Failed to get right-sizing recommendations. Please try again.' };
  }
}
