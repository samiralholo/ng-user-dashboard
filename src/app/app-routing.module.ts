import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './configs';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.Dashboard,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.Dashboard,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
