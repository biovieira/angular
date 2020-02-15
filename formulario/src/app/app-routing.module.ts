import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cliente/cadastro/cadastro.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'cliente', component: CadastroComponent},
  { path: '*', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
