import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { SignInComponent } from './SignIn/SignIn.component';
import { SignUpComponent } from './SignUp/SignUp.component';

const routes: Routes = [
  { path: '', redirectTo: '/SignIn', pathMatch: 'full' },
  {
    path: 'SignIn',
    component: SignInComponent,
  },
  {
    path: 'SignUp',
    component: SignUpComponent,
  },
  { path: 'Dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '/SignIn' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
