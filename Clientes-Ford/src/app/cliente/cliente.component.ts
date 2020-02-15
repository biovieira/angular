import { Component, OnInit } from "@angular/core";
import { formularioCadastro } from '../models/formularioCadastro';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: "app-cliente",
    templateUrl: "./cliente.component.html",
    styleUrls: ["./cliente.component.css"]
})
export class ClienteComponent implements OnInit {

    public profileForm:any;

    ngOnInit() { 
        let formCadastro =  new formularioCadastro();
        this.profileForm = formCadastro.profileForm;
    }

    consultaCEP() {
        var viaCep = console.log("https://viacep.com.br/ws/" + this.profileForm.address.zip + "/json");
    }
}
