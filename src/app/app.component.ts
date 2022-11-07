import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Contador App';
  public numero: number = 0 ;
  public base: number = 5;

  public increaseNumber5(){
    this.numero+=5;
    this.alertas();
  }

  public decreaseNumber5(){
    this.numero-=5;
    this.alertas();
  }


  public reset():number{
    this.numero = 0;
    console.log(this.numero);
    return this.numero;
  }

  public setNumber(n:number){
    this.numero += n;
    this.alertas();
  }

  public alertas(){
    if (this.numero > 10) {
      window.alert('Este es el núm limite chavalillo');
    } else if (this.numero < -10 && this.numero < 0) {
      window.alert('Este es el limite inferior');
    }
  }
}
