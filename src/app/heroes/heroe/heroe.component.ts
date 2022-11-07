import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent implements OnInit {
  public nombre: string = 'Capitan America';
  public edad: number = 29;
  constructor() {}

  ngOnInit(): void {}

  public getName(): string {
    return this.nombre + '-' + this.edad.toString();
  }

  public getNameCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  get nameCapitalizado(): string {
    return this.getName().toUpperCase();
  }

  public changeName():void{
    this.nombre = 'Spiderman';
  }

  public changeEdad():void{
    this.edad = 30;
  }

  public returnPropertys():void{
    this.nombre = this.nombre;
    this.edad = this.edad;
    console.log(this.nombre);

  }
}
