import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {  
  }
  consultaCEP(cep){
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;
        //Valida o formato do CEP.
        if(validacep.test(cep)) {
          this.http.get(`https://viacep.com.br/ws/${cep}/json`)
            map(dados => dados);
        }
    }
  } 
}
