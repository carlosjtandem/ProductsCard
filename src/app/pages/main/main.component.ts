import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../interfaces/Producto';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  productos: Producto[] | undefined;
  productosCopy: Producto[] | undefined;


  constructor(public http: HttpClient) {
    this.getData();
  }
  async getData() {
    await this.http.get<any>(environment.apiUrl + "/products")
      .subscribe((res) => {
        //  console.table(res)
        this.productos = res.map(({ id, title, price, description, images, category }: Producto) => {
          return {
            id: id,
            title: title,
            price: price,
            description: description,
            images: images[0],
            category: category.name
          };
        })
        this.productosCopy = this.productos;

      });
  }


  filter(e: any) {
    const search: string = e.target.value;
    console.log({ search })
    //TODO: add filter
    this.productos = this.productosCopy?.filter(( {title} : Producto) => {
      return title.toLowerCase().includes(search.toLowerCase());
    });
  };

}
