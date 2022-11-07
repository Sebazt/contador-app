import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  public saiyans: string[] = [
    'Goku',
    'Vegeta',
    'Gohan',
    'Trunks',
    'Broly',
    'Goten',
  ];
  public saiyanEliminado:string= '';
  constructor() {}

  ngOnInit(): void {}

  public borrarSaiyan():void{
    this.saiyanEliminado = this.saiyans.pop() || ''; /* devuelve string o undef */
    if(this.saiyans.length==0){
      window.alert("Eliminaste todos los sayayines");
    }

  }
}
