import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { IsAdminGuard } from './guards/is-admin.guard';
import { IsConnectedGuard } from './guards/is-connected.guard';

const routes: Routes = [
  {path:'admin', component: AdminPageComponent, canActivate: [IsAdminGuard]},
  {path:'dashboard', component: DashboardPageComponent, canActivate: [IsConnectedGuard]},
  {path:'', component: HomePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
