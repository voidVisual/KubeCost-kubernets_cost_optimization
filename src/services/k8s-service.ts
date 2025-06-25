'use server';

import {
    RIGHT_SIZING_SAMPLE_CONFIG,
    RIGHT_SIZING_SAMPLE_UTILIZATION,
    RESOURCE_OPTIMIZATION_SAMPLE_DATA,
} from '@/lib/constants';

/**
 * @fileOverview Simulates a service that interacts with a Kubernetes cluster
 * to fetch resource and configuration data. In a real application, this would
 * connect to the Kubernetes API, Prometheus, or other monitoring tools.
 */

/**
 * Fetches the current resource configuration (e.g., from a Deployment YAML).
 * @param deploymentName - The name of the deployment.
 * @returns A string containing the YAML configuration.
 */
export async function getCurrentResourceConfig(deploymentName: string): Promise<string> {
    console.log(`Fetching resource config for deployment: ${deploymentName}`);
    // In a real app, you'd use the K8s API to get this.
    return Promise.resolve(RIGHT_SIZING_SAMPLE_CONFIG);
}

/**
 * Fetches resource utilization data (e.g., from Prometheus).
 * @param deploymentName - The name of the deployment.
 * @returns A JSON string of utilization data.
 */
export async function getResourceUtilizationData(deploymentName: string): Promise<string> {
    console.log(`Fetching utilization data for deployment: ${deploymentName}`);
    // In a real app, you'd query Prometheus here.
    return Promise.resolve(RIGHT_SIZING_SAMPLE_UTILIZATION);
}

/**
 * Fetches cluster-wide resource utilization data for analysis.
 * @param namespace - The namespace to filter by (or 'all').
 * @returns A JSON string of cluster utilization data.
 */
export async function getClusterUtilizationForAnalysis(namespace: string): Promise<string> {
    console.log(`Fetching cluster utilization for namespace: ${namespace}`);
    // In a real app, this would be a more complex query.
    return Promise.resolve(RESOURCE_OPTIMIZATION_SAMPLE_DATA);
}
