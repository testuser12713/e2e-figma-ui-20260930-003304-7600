export const dashboardStats = {
  restRate: {
    value: '20',
    unit: 'DAYS',
    since: 'Since 21. Dec',
    period: 'Dec 2024 - Jan 2024',
  },
  topRun: 'Top Run: 20 Days',
  restarts: 'Restarts: 4',
  periods: ['D', 'W', 'M'] as const,
  activePeriod: 'Y',
  chart: {
    months: [
      { label: 'M', x: 49 },
      { label: 'J', x: 94 },
      { label: 'A', x: 139 },
      { label: 'S', x: 183 },
      { label: 'O', x: 228 },
      { label: 'N', x: 273 },
      { label: 'D', x: 317 },
    ],
    yAxis: [
      { label: '90', y: 382 },
      { label: '80', y: 465 },
      { label: '70', y: 548 },
      { label: '60', y: 626 },
    ],
  },
} as const;

export type DashboardStats = typeof dashboardStats;
