import { FunctionCall } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  senha = 'senhaboa';

  constructor() {}

  trocar: boolean = true;

  //usuarios = [];
  ngOnInit(): void {}

  funcaoTrocar = () => {
    this.trocar = true;
  };

  funcaoTrocarDnv = () => {
    this.trocar = false;
  };

  funcaoAlerta = senha => {
    switch (senha) {
      case 1:
        console.log('Senha incorreta');
        break;
      case 2:
        console.log('Confirmação de senha incorreta');
        break;
    }
  };
}

/*cadastrar(usuario): void {//cadastrar serve como uma function

    this.usuarios.push(usuario);//push adiciona ao array
  }*/
