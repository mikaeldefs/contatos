import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  contatos:Contato[] = [
    {
      nome:"Ednaldo Pereira",
      email:"ednaldopereira@ednaldopereira.com",
      telefones:['0000 - 0000']
    },
    {
      nome:"Chico Bento",
      email:"chicobento@email.com",
      telefones:['1111 - 1111']
    },
    {
      nome:"Agente 01",
      email:"agente01@email.com",
      telefones:['2222 - 2222']
    },
    {
      nome:"Agente 02",
      email:"agente02@email.com",
      telefones:['3333 - 3333']
    },
    {
      nome:"Agente 03",
      email:"agente03@email.com",
      telefones:['4444 - 4444']
    },
    {
      nome:"Agente 04",
      email:"agente04@email.com",
      telefones:['5555 - 5555']
    },
    {
      nome:"Agente 05",
      email:"agente05@email.com",
      telefones:['6666 - 6666']
    },
    {
      nome:"Agente 06",
      email:"agente06@email.com",
      telefones:['7777 - 7777']
    },
    {
      nome:"Agente 07",
      email:"agente07@email.com",
      telefones:['8888 - 8888']
    },
    {
      nome:"Agente 08",
      email:"agente08@email.com",
      telefones:['9999 - 9999']
    }

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
