import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DistrictDataComponent } from './district-data/district-data.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'district/:state', component: DistrictDataComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
