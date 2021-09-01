import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

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

  cs:ContatoService = new ContatoService();

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

  addTelefone():void{
    this.novoContato.telefones.push("");
  }

  removeTelefone(pos:number):void{
    console.log(pos);
    this.novoContato.telefones.splice(pos, 1);
  }

  salvar(){
    this.cs.addContato(this.novoContato);

    // Se quiser fazer a tela sumir depois de add um contato
    this.ocultarModalClick.emit();

    // Manter a tela e limpar os campos
    // this.novoContato = {
    //   nome:"",
    //   email:"",
    //   telefones:[""]
    // }
  }
  
}
