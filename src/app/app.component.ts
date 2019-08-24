import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Mobile' }
  ];

  onCheckOne() {
    alert('From Check box without directive');
  }

  onCheckTwo() {
    alert('From Check box with directive');
  }
}
