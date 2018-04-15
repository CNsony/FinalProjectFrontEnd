import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import {LoginComponent}         from './login/login.component'
import { UploadComponent }      from './upload/upload.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'upload',     component: UploadComponent },
  { path: 'role',       component: RoleManagementComponent },
  { path: 'admin',      component: AdminManagementComponent}
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
