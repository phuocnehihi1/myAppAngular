import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name ='Võ Hữu Phước';
  title = 'myAppAngular';
  product  ={
    name:'hat',
    quatity:'200',
    price:'500'
  }
}
