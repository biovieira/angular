import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $, element } from 'protractor';
import { profileForm } from '../models/profileForm';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public profileForm:profileForm = new profileForm();

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let cadastroData = localStorage.getItem("cadastro");
    if (cadastroData != null) {
      this.profileForm = JSON.parse(cadastroData);
    }
    
  }

  cep(event:any) {
    return this.http
    .get("https://viacep.com.br/ws/" + this.profileForm.address.zip + "/json/")
    .subscribe(
      data => this.preencheCep(data)
    );
  }

  preencheCep(data:any) {
    this.profileForm.address.street = data.logradouro;
    this.profileForm.address.neighbour = data.bairro;
    this.profileForm.address.city = data.localidade;
    this.profileForm.address.state = data.uf;
    localStorage.setItem("cadastro", JSON.stringify(this.profileForm));
  }

}
