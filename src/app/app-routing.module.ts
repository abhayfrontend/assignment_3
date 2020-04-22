import { NgModule } from '@angular/core';
import { RouterModule, Routes ,CanActivate} from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { LayoutComponent } from '../app/layout/layout.component';
import { 
  AuthGuardService as AuthGuard 
} from '../app/auth-services/auth-guard.service';
import {FirstComponent} from '../app/first/first.component'
const routes: Routes = [


  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'home',
    component: LayoutComponent,
    canActivate: [AuthGuard] 

  },
  {
    path: 'first',
    component:FirstComponent,
    canActivate: [AuthGuard] 

  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
