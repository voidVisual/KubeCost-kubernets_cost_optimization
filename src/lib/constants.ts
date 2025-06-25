import {
  LayoutDashboard,
  SlidersHorizontal,
  Combine,
  Activity,
  FileText,
  Settings,
  DollarSign,
  Package,
  Server,
  Network,
  Boxes
} from 'lucide-react';
import type { ChartConfig } from '@/components/ui/chart';

export const NAV_ITEMS = [
  {
    href: '/dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard',
  },
  {
    href: '/resource-optimization',
    icon: SlidersHorizontal,
    label: 'Resource Optimization',
  },
  {
    href: '/right-sizing',
    icon: Combine,
    label: 'Right-Sizing',
  },
  {
    href: '/monitoring-integration',
    icon: Activity,
    label: 'Monitoring',
  },
  {
    href: '/savings-reports',
    icon: FileText,
    label: 'Savings Reports',
  },
];

export const MOCK_COST_DATA = {
  totalCost: 12580.75,
  potentialSavings: 3200.50,
  optimizedResources: 42,
};

export const MOCK_COST_BREAKDOWN_DATA = {
  namespace: [
    { category: 'kube-system', value: 3500, fill: 'var(--color-chart-1)', icon: Package },
    { category: 'monitoring', value: 2800, fill: 'var(--color-chart-2)', icon: Settings },
    { category: 'default', value: 1500, fill: 'var(--color-chart-3)', icon: Boxes },
    { category: 'production-app', value: 4000, fill: 'var(--color-chart-4)', icon: Server },
    { category: 'staging-app', value: 780, fill: 'var(--color-chart-5)', icon: Network },
  ],
  pod: [
    { category: 'prometheus-0', value: 1200, fill: 'var(--color-chart-1)', icon: Package },
    { category: 'grafana-0', value: 950, fill: 'var(--color-chart-2)', icon: Package },
    { category: 'app-deploy-1', value: 2200, fill: 'var(--color-chart-3)', icon: Package },
    { category: 'app-deploy-2', value: 1800, fill: 'var(--color-chart-4)', icon: Package },
    { category: 'db-0', value: 3100, fill: 'var(--color-chart-5)', icon: Package },
  ],
  service: [
    { category: 'app-service-lb', value: 1800, fill: 'var(--color-chart-1)', icon: Network },
    { category: 'internal-api', value: 1100, fill: 'var(--color-chart-2)', icon: Network },
    { category: 'db-cluster-ip', value: 2500, fill: 'var(--color-chart-3)', icon: Network },
  ],
};

export const COST_CHART_CONFIG = {
  value: {
    label: 'Cost ($)',
    icon: DollarSign,
  },
  category: {
    label: 'Category',
  },
  'kube-system': { label: 'Kube System', icon: Package },
  monitoring: { label: 'Monitoring', icon: Settings },
  default: { label: 'Default', icon: Boxes },
  'production-app': { label: 'Production App', icon: Server },
  'staging-app': { label: 'Staging App', icon: Network },
  'prometheus-0': { label: 'Prometheus Pod', icon: Package },
  'grafana-0': { label: 'Grafana Pod', icon: Package },
  'app-deploy-1': { label: 'App Deploy 1', icon: Package },
  'app-deploy-2': { label: 'App Deploy 2', icon: Package },
  'db-0': { label: 'Database Pod', icon: Package },
  'app-service-lb': { label: 'App Load Balancer', icon: Network },
  'internal-api': { label: 'Internal API', icon: Network },
  'db-cluster-ip': { label: 'Database Service', icon: Network },
} satisfies ChartConfig;


export const MOCK_SAVINGS_REPORTS_DATA = [
  { id: '1', date: '2024-07-01', optimization: 'Right-sized frontend pods', savings: 250.75, status: 'Implemented' },
  { id: '2', date: '2024-07-05', optimization: 'Scaled down staging DB', savings: 120.00, status: 'Implemented' },
  { id: '3', date: '2024-07-10', optimization: 'Optimized monitoring CPU requests', savings: 85.50, status: 'Pending' },
  { id: '4', date: '2024-07-15', optimization: 'Removed unused legacy service', savings: 300.00, status: 'Implemented' },
  { id: '5', date: '2024-07-20', optimization: 'Adjusted HPA for backend API', savings: 150.25, status: 'Implemented' },
];

export const RESOURCE_OPTIMIZATION_SAMPLE_DATA = `{
  "namespaces": [
    {
      "name": "production",
      "cpuUsage": "8000m",
      "memoryUsage": "16Gi",
      "pods": [
        {
          "name": "webapp-prod-abcdef-12345",
          "cpuUsage": "2000m",
          "memoryUsage": "4Gi"
        }
      ]
    },
    {
      "name": "staging",
      "cpuUsage": "4000m",
      "memoryUsage": "8Gi"
    }
  ]
}`;

export const RIGHT_SIZING_SAMPLE_CONFIG = `apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: my-app-container
        image: my-app:latest
        resources:
          requests:
            cpu: "500m"
            memory: "1Gi"
          limits:
            cpu: "1"
            memory: "2Gi"`;

export const RIGHT_SIZING_SAMPLE_UTILIZATION = `{
  "cpuUsage": {
    "avg": "250m",
    "max": "400m",
    "p95": "380m"
  },
  "memoryUsage": {
    "avg": "500Mi",
    "max": "800Mi",
    "p95": "750Mi"
  }
}`;

export const MOCK_CLUSTER_METRICS_DATA = [
  { date: '2024-07-01', cpu: 65, memory: 70 },
  { date: '2024-07-02', cpu: 68, memory: 72 },
  { date: '2024-07-03', cpu: 70, memory: 75 },
  { date: '2024-07-04', cpu: 72, memory: 78 },
  { date: '2024-07-05', cpu: 75, memory: 80 },
  { date: '2024-07-06', cpu: 73, memory: 79 },
  { date: '2024-07-07', cpu: 78, memory: 82 },
  { date: '2024-07-08', cpu: 80, memory: 85 },
  { date: '2024-07-09', cpu: 79, memory: 84 },
  { date: '2024-07-10', cpu: 82, memory: 88 },
  { date: '2024-07-11', cpu: 85, memory: 90 },
  { date: '2024-07-12', cpu: 83, memory: 89 },
];

export const MOCK_WORKLOAD_METRICS_DATA: { [key: string]: any[] } = {
  'webapp-prod': [
    { time: '10:00', cpu: 250, memory: 512 },
    { time: '10:05', cpu: 260, memory: 520 },
    { time: '10:10', cpu: 255, memory: 515 },
    { time: '10:15', cpu: 270, memory: 530 },
    { time: '10:20', cpu: 265, memory: 525 },
    { time: '10:25', cpu: 280, memory: 540 },
  ],
  'api-server': [
    { time: '10:00', cpu: 400, memory: 1024 },
    { time: '10:05', cpu: 410, memory: 1030 },
    { time: '10:10', cpu: 420, memory: 1040 },
    { time: '10:15', cpu: 415, memory: 1035 },
    { time: '10:20', cpu: 430, memory: 1050 },
    { time: '10:25', cpu: 425, memory: 1045 },
  ],
  'data-processor': [
    { time: '10:00', cpu: 800, memory: 2048 },
    { time: '10:05', cpu: 850, memory: 2100 },
    { time: '10:10', cpu: 900, memory: 2200 },
    { time: '10:15', cpu: 870, memory: 2150 },
    { time: '10:20', cpu: 920, memory: 2250 },
    { time: '10:25', cpu: 910, memory: 2230 },
  ]
};


export const CLUSTER_CHART_CONFIG = {
  cpu: { label: 'CPU Usage (%)', color: 'hsl(var(--chart-1))' },
  memory: { label: 'Memory Usage (%)', color: 'hsl(var(--chart-2))' },
} satisfies ChartConfig;

export const WORKLOAD_CHART_CONFIG = {
  cpu: { label: 'CPU (mCores)', color: 'hsl(var(--chart-4))' },
  memory: { label: 'Memory (MiB)', color: 'hsl(var(--chart-5))' },
} satisfies ChartConfig;
