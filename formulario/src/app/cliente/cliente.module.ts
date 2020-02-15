import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { MatInputModule, MatCardModule, MatGridListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CadastroComponent, PesquisaComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class ClienteModule { }
