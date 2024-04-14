import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchComponent } from './pages/match/match.component';
import { HomeComponent } from './pages/home/home.component';
import { ConnectComponent } from './pages/connect/connect.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'test', component: MatchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
