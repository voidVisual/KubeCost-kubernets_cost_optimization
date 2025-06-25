import { z } from 'zod';

export const ResourceOptimizationAnalysisSchema = z.object({
  namespace: z.string().min(1, { message: 'Namespace is required.' }),
});

export type ResourceOptimizationAnalysisFormData = z.infer<typeof ResourceOptimizationAnalysisSchema>;

export const RightSizingRecommendationsSchema = z.object({
  deploymentName: z
    .string()
    .min(1, { message: 'Deployment name is required.' }),
  applicationDetails: z.string().optional(),
});

export type RightSizingRecommendationsFormData = z.infer<typeof RightSizingRecommendationsSchema>;
