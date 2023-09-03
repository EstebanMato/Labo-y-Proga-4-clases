import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio01';
  public name: string = 'Marcelo Gallardo';
  public apellido: string ="";
  public btnLabel = 'Nombre boton';
  public edadUno!:number; 
  public edadDos!:number; 
  public promedio:number | null = null;
  public suma:number | null = null;

   public operar(): void {
    if (!isNaN(this.edadUno) && !isNaN(this.edadDos)) {
      this.suma = this.edadUno + this.edadDos ;
      this.promedio = (this.suma)/2; // Realiza la suma
    } else {
      this.promedio = null; //
    }
  }

  public limpiarTextos():void {
    this.edadUno = 0;
    this.edadDos = 0;
    this.suma = 0;
    this.promedio =0;
  }
}
