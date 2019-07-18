import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import allLocales from '@fullcalendar/core/locales-all';
import esLocale from '@fullcalendar/core/locales/es';
import { Calendar } from '@fullcalendar/core';



@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

    calendarPlugins = [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]; // important
    esLocale = ['es'];

    handleDateClick(arg) { // handler method
        //alert(arg.dateStr);
        
        let pop;
        let fecha;
        pop = document.getElementById("popup");
        pop.style.display = "flex";
        pop.style.opacity = 1;        
        fecha = document.getElementById("fecha");
        fecha.innerHTML = arg.dateStr;
    }
    
  onClickCerrar(){
    var content;
    content = document.getElementById("popup");
    content.style.display = "none";
    content.style.opacity = 0;
  }
    constructor() {}

    ngOnInit() {
    }
}
