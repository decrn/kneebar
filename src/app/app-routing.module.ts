import { AuthGuard } from './providers/auth.guard';
import { NoAuthGuard } from './providers/noauth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'positions',
    loadChildren: './components/positions-overview/positions-overview.module#PositionsOverviewModule'
  },
  {
    path: 'account',
    loadChildren: './components/account/account.module#AccountModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './components/login-register/login-register.module#LoginRegisterModule',
    canActivate: [NoAuthGuard]
  },
  {
    path: 'submissions',
    loadChildren: './components/submissions-overview/submissions-overview.module#SubmissionsOverviewModule'
  },
  { path: 'position/:name', loadChildren: './components/detail/detail.module#DetailModule' },
  { path: 'submission/:name', loadChildren: './components/detail/detail.module#DetailModule' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [ AuthGuard, NoAuthGuard ]
})
export class AppRoutingModule { }
