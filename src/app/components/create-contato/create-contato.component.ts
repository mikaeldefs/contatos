import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() ocultarModalClick:EventEmitter<null> = new EventEmitter();
  novoContato:Contato = {
    nome:"",
    email:"",
    telefones:[""]
  }

  constructor() { }

  ngOnInit(): void {
  }

  ocultar(){
    this.ocultarModalClick.emit();
    console.log('Sair!')
  }

  track(index:number, value:string){
    return index;
  }

}
