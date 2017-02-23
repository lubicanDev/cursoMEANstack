import { Component } from '@angular/core';

// Definiciones de clase room

class Room {
  // Definicion de atributos
  room_id: number;
  isDouble: boolean;

  // Metodo constructor
  constructor(room_id: number, isDouble: boolean) {
    this.room_id = room_id;
    this.isDouble = isDouble;
  }
  //Metodos
  // para transformar true/false en Doble/Simple
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

  //Metodo constructor
  constructor(customer_id: string, name: string, email: string) {
    this.customer_id = customer_id;
    this.name = name;
    this.email = email;
  }
  //Metodos
  // clone() -> con esto devolvemos el objeto de una variable
  clone(): Customer {
    return new Customer(this.customer_id, this.name, this.email);
  }
}

var arrayRooms = [
  new Room(101, true),
  new Room(107, false),
  new Room(201, true),
  new Room(301, false)
];

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
  rooms: Room[] = arrayRooms;

  //CUSTOMERS
  
  customers: Customer[] = [];
  customerSelected: Customer = new Customer("", "", "");

  //Metodos del componente
  selectCustomer(customer: Customer):void {
    this.customerSelected = customer;
  }
  addCustomer(customer: Customer) {
    this.customers.push(customer.clone()); // no podemos utilizar una variable, hay que usar el objeto al que apunta la variable. por eso utilizamos el método ".clone()"
    this.customerSelected = new Customer("","","");
  }


}
