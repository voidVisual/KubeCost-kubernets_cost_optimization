import { z } from 'zod';

export const ResourceOptimizationAnalysisSchema = z.object({
  resourceData: z
    .string()
    .min(1, { message: 'Resource utilization data is required.' })
    .refine(
      (data) => {
        try {
          JSON.parse(data);
          return true;
        } catch (error) {
          return false;
        }
      },
      { message: 'Invalid JSON format for resource data.' }
    ),
});

export type ResourceOptimizationAnalysisFormData = z.infer<typeof ResourceOptimizationAnalysisSchema>;

export const RightSizingRecommendationsSchema = z.object({
  currentResourceConfig: z
    .string()
    .min(1, { message: 'Current resource configuration (YAML) is required.' }),
  resourceUtilizationData: z
    .string()
    .min(1, { message: 'Resource utilization data (JSON) is required.' })
    .refine(
      (data) => {
        try {
          JSON.parse(data);
          return true;
        } catch (error) {
          return false;
        }
      },
      { message: 'Invalid JSON format for resource utilization data.' }
    ),
  applicationDetails: z.string().optional(),
});

export type RightSizingRecommendationsFormData = z.infer<typeof RightSizingRecommendationsSchema>;
