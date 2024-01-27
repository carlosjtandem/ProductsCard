import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/Producto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() producto!: Producto | undefined;  // lo que se va a pasar es de tipo producto o undefined
}
