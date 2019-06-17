import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  onClickMe() {
    var content;
    content = document.getElementById("exampleModalCenter");
    content.style.display = "flex";
    content.style.opacity = 1;
  }
  onClickCerrar(){
    var content;
    content = document.getElementById("exampleModalCenter");
    content.style.display = "none";
    content.style.opacity = 0;
  }
  onClickHome(){location.href = "http://localhost:4200/";}
  
  constructor() { }

  ngOnInit() {
  }

}
