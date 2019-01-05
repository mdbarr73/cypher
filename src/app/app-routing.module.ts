import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from '@app/landing/landing.component';
import { CreateGameComponent } from '@app/create-game/create-game.component';

const routes: Routes = [
  { path: 'create', component: CreateGameComponent },
  { path: '', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
