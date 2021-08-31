import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/components//home/home.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { ServicosComponent } from './shared/components/servicos/servicos.component';
import { ContatoComponent } from './shared/components/contato/contato.component';

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},
{
  path: 'home', component: HomeComponent
},
{
  path: 'contato', component: ContatoComponent
},
{
  path: 'servicos', component: ServicosComponent
},
{
  path: '**', component: ErrorComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
