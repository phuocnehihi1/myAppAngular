import { Component } from '@angular/core';
import { Produc } from './common/produc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name ='Võ Hữu Phước';
  title = 'myAppAngular';
  product:  Produc ={

    name:'hat',
    quatity:200,
    price:500
  }
}
