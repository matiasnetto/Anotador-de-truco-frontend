import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchComponent } from './pages/match/match.component';
import { HomeComponent } from './pages/home/home.component';
import { ConnectComponent } from './pages/connect/connect.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'auth',  loadChildren: ()=> import('./pages/auth/auth.module').then(m=> m.AuthModule)},
  { path: 'test', component: MatchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
