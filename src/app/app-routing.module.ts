import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
// update the route array with these
const routes: Routes = [
 {
   path: 'dashboard',
   component: DashboardComponent,
 },
 {
   path: 'profile',
   component: ProfileComponent,
 },
 {
   path: '**',
   redirectTo: 'dashboard',
   pathMatch: 'full'
 }
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }