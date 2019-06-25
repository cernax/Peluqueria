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

  onClickEvento(){
    let calendarEl = document.getElementById('calendar');
    let calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      events: [
        { // this object will be "parsed" into an Event Object
          title: 'The Title', // a property!
          start: '2019-06-01', // a property!
          end: '2019-06-02' // a property! ** see important note below about 'end' **
        }
      ]});
  }

  constructor() {}

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
          let draggableEl = document.getElementById('mydraggable');
          let calendarEl = document.getElementById('calendar');
          let calendar = new Calendar(calendarEl, {
            plugins: [ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
            events: [
            {
              id: 'a',
              title: 'my event',
              start: '2019-06-17'
            }],
            droppable: true,
            selectable: true,
            editable: true,
            

            eventLimit: true, // for all non-TimeGrid views
            views: {
              timeGrid: {
                eventLimit: 6 // adjust to 6 only for timeGridWeek/timeGridDay
              }
            },
            
            eventClick: function(info) {
            alert('Event: ' + info.event.title);
            alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            alert('View: ' + info.view.type);
            
            // change the border color just for fun
            info.el.style.borderColor = 'red';
          }
          });
          locale: esLocale;
          
          let event = calendar.getEventById('a') // an event object!
          let start = event.start // a property (a Date object)
          console.log(start.toISOString()) // "2018-09-01T00:00:00.000Z"
    
          calendar.setOption('locale', 'es');
          calendar.setOption('height', 450);
          calendar.updateSize();
          calendar.render();
          new Draggable(draggableEl, {
            itemSelector: '.item-class',  
            eventData: function(eventEl) {
              return {
                title: eventEl.innerText,
                duration: '02:00'
              };
          }
        });
        });}

}

