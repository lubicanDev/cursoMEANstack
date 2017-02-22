import { Component } from '@angular/core';

// Definiciones de clase room

class Room {
  // Definicion de atributos
  room_id: string;
  isDouble: boolean;
  // Metodo constructor
  constructor(room_id: string, isDouble: boolean) {
    this.room_id = room_id;
    this.isDouble = isDouble;
  }
  //Metodos
  getRoomType(): string {

    // return isDouble? 'doble' : 'Sencilla';
    if (this.isDouble) {
      return 'Doble';
    }
    else {
      return 'Sencilla';
    }
  }
}

class Customer {
  // definimos atributos
  customer_id: string;
  name: string;
  email: string;
  //Metod constructor
  constructor(customer_id: string, name: string, email: string) {
    this.customer_id = customer_id;
    this.name = name;
    this.email = email;
  }
  //Metodos

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component-1.css'],
})
export class AppComponent {
  title = 'app works!';
  nombre = 'mamoncete'

  // Una Forma 
  /*  
    room1 = new Room('101', true);
    room2 = new Room('301', false);*/

  // Otra Forma   
  rooms = [
    new Room('101', true),
    new Room('107', false),
    new Room('201', true),
    new Room('301', false)
  ];
  customers: Customer[] = [];
  customerSelected: Customer = new Customer("", "", "")

  //Metodos del componente
  selectCustomer(customer: Customer) {

  }
  addCustomer(customer: Customer) {

  }


}
