import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  number = 0;

  name = "anthony hitchcock";
 
  color = "#ffffff";

colorChange = () => {
    this.color = '#000000'
}

addnum = () => {
  this.number++;
}

minusnum = () => {
  this.number--
  console.log("minus")
}

}
