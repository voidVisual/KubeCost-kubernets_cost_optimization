import type { ChartConfig } from "@/components/ui/chart";

export const WORKLOADS_NAV_ITEMS = [
    {
        title: "Workloads",
        badge: "N",
        items: [
            { href: "/workloads/cron-jobs", label: "Cron Jobs" },
            { href: "/workloads/daemon-sets", label: "Daemon Sets" },
            { href: "/workloads/deployments", label: "Deployments" },
            { href: "/workloads/jobs", label: "Jobs" },
            { href: "/workloads/pods", label: "Pods" },
            { href: "/workloads/replica-sets", label: "Replica Sets" },
            { href: "/workloads/replication-controllers", label: "Replication Controllers" },
            { href: "/workloads/stateful-sets", label: "Stateful Sets" },
        ],
    },
    {
        title: "Service",
        badge: "N",
        items: [
            { href: "/workloads/ingresses", label: "Ingresses" },
            { href: "/workloads/services", label: "Services" },
        ],
    },
    {
        title: "Config and Storage",
        items: [
            { href: "/workloads/config-maps", label: "Config Maps" },
            { href: "/workloads/persistent-volume-claims", label: "Persistent Volume Claims" },
            { href: "/workloads/secrets", label: "Secrets" },
            { href: "/workloads/storage-classes", label: "Storage Classes" },
        ],
    },
];

export const MOCK_CPU_USAGE_DATA = [
    { time: "21:11", value: 0 },
    { time: "21:12", value: 0 },
    { time: "21:13", value: 0.005 },
    { time: "21:14", value: 0.022 },
    { time: "21:15", value: 0.008 },
    { time: "21:16", value: 0 },
];
  
export const MOCK_MEMORY_USAGE_DATA = [
    { time: "21:11", value: 20 },
    { time: "21:12", value: 20 },
    { time: "21:13", value: 20 },
    { time: "21:14", value: 20 },
    { time: "21:15", value: 20 },
    { time: "21:16", value: 20 },
];

export const PODS_CHART_CONFIG = {
    value: {
      color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;
  

export const MOCK_PODS_DATA = [
    {
        name: "kubernetes-dashboard-76577bd7bb-vdfcn",
        status: "Running",
        restarts: 0,
        age: "3 hours ago",
        node: "docker-desktop",
        labels: [
            { key: "k8s-app", value: "kubernetes-dashboard" },
            { key: "pod-template-hash", value: "76577bd7bb" },
        ],
        cpuUsage: 10, // percentage
        memoryUsage: 85, // percentage
        memoryValue: "17.06Mi",
    },
    {
        name: "dashboard-metrics-scraper-79c5968bdc-mcwmf",
        status: "Running",
        restarts: 0,
        age: "3 hours ago",
        node: "docker-desktop",
        labels: [
            { key: "k8s-app", value: "dashboard-metrics-scraper" },
            { key: "pod-template-hash", value: "79c5968bdc" },
        ],
        cpuUsage: 50,
        memoryUsage: 50,
        memoryValue: "10.36Mi",
    },
];