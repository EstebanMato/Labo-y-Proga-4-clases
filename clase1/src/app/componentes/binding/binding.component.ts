import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  public name: string = 'Marcelo Gallardo';
  public apellido: string ="";
  public btnLabel = 'Click me';

  public onClick(event: any): void{
    console.log(event);
    this.name =Math.random()?.toString();
  }
}
