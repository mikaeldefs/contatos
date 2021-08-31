import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() ocultarModalClick:EventEmitter<null> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  ocultar(){
    this.ocultarModalClick.emit();
    console.log('Sair!')
  }

}
