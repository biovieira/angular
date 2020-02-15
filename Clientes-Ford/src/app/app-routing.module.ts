import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoComponent } from './veiculo/veiculo.component';


const routes: Routes = [
  { path: 'veiculo', component: VeiculoComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
