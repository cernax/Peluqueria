import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  constructor() {
    document.addEventListener('DOMContentLoaded', function() {
      let draggableEl = document.getElementById('mydraggable');
      let calendarEl = document.getElementById('calendar');
      let calendar = new Calendar(calendarEl, {
        plugins: [ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        events: [
        {
          id: 'a',
          title: 'my event',
          start: '2018-09-01'
        }],
        droppable: true,

        eventClick: function(info) {
        alert('Event: ' + info.event.title);
        alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
        alert('View: ' + info.view.type);
        locale: esLocale;
        // change the border color just for fun
        info.el.style.borderColor = 'red';
      }
      });
      let event = calendar.getEventById('a') // an event object!
      let start = event.start // a property (a Date object)
      console.log(start.toISOString()) // "2018-09-01T00:00:00.000Z"

      calendar.setOption('locale', 'es');
      calendar.setOption('height', 450);
      calendar.updateSize();
      calendar.render();
      new Draggable(draggableEl, {
        eventData: {
          title: 'my event',
          duration: '02:00'
        }
      });
    });

  }

  ngOnInit() {}


}

