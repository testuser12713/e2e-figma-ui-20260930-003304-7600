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
      { label: 'J', x: 76 },
      { label: 'J', x: 103 },
      { label: 'A', x: 129 },
      { label: 'S', x: 156 },
      { label: 'O', x: 183 },
      { label: 'N', x: 210 },
      { label: 'D', x: 237 },
      { label: 'J', x: 263 },
      { label: 'M', x: 290 },
      { label: 'A', x: 317 },
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
