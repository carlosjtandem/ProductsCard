import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.css'
})
export class RXJSOperatorsComponent implements OnInit {
  myarray = [10, 20, 30];

  private myArrayOf$: Observable<any> | undefined;  //Lo ideal en vez de any deberia usar una interfaz de datos
  private myArrayFrom$: Observable<any> | undefined;

  constructor() {    
  }
  
  ngOnInit(): void {
    this.myArrayOf$ = of(this.myarray);  // of permite crear un observable a partir del array
    this.myArrayOf$.subscribe(data => console.log('DAta of', data));

    // OPERADOR FROM -- con este operador se podria pasar una promesa y con of no se puede
    this.myArrayFrom$ = from(this.myarray);  // of permite crear un observable a partir del array
    this.myArrayFrom$.subscribe(data => console.log('DAta from', data));
  }
}

