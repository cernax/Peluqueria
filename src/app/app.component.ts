import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {MatRadioModule} from '@angular/material/radio';

library.add(fas, far);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peluqueria';  
  faCoffee = faCoffee;
  clickMessage = '';

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

}

export class RadioOverviewExample {}
