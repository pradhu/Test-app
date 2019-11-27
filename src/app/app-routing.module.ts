import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AngularFireAuth } from 'angular/fire/auth';
import * as firebase from 'firebase/app';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';


// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'registration', component: RegistrationComponent }
// ];

export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'user', component: UserComponent }
];
// export const rootRouterConfig: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
//   { path: 'register', component: RegistrationComponent, canActivate: [AuthGuard] },
//   { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
// ];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
