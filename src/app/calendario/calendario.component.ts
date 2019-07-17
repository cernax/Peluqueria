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
        alert(arg.dateStr);
    }
    constructor() {}

    ngOnInit() {
    }
}
