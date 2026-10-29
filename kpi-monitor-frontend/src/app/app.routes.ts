import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'kpi-management',
    pathMatch: 'full',
  },

  {
    path: 'kpi-management',
    loadComponent: () =>
      import('./features/kpi-management/kpi-management.component').then(
        (m) => m.KpiManagementComponent,
      ),
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },

  {
    path: '**',
    redirectTo: 'kpi-management',
  },
];
