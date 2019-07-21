import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

import allLocales from '@fullcalendar/core/locales-all';
import esLocale from '@fullcalendar/core/locales/es';
import { Calendar } from '@fullcalendar/core';
import {EMPTY} from 'rxjs';


function formato(fecha: string) {
    return fecha.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
}
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

    calendarPlugins = [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]; // important
    esLocale = ['es'];
    calendarEvents = [
        { id:'', title: '', start: '', end: '', backgroundColor: '' }
    ];

    handleDateClick(arg) { // handler method
        //alert(arg.dateStr);
        let pop;
        let fecha;
        let titulo;
        pop = document.getElementById("popup");
        pop.style.display = "flex";
        pop.style.opacity = 1;        
        fecha = document.getElementById("fecha");
        fecha.innerText  = formato(arg.dateStr);
        titulo = document.getElementById("tituloCalendario");
        titulo.focus();
        titulo.value = "";
    }

    handleEventClick(info){

        let prpevent;
        let titleEvento;
        let body;
        let date;
        prpevent = document.getElementById("popupEvento");
        prpevent.style.display = "flex";
        prpevent.style.opacity = 1;
        titleEvento = document.getElementById("TituloEvento");
        date = new Date(info.event.start);
        let dd = date.getDate();
        let mm = date.getMonth()+1;
        let yyyy = date.getFullYear();
        if(dd<10){
            dd='0'+dd;
        }
        if(mm<10){
            mm='0'+mm;
        }
        titleEvento.innerHTML = dd + '/' + mm + '/' + yyyy;
        body = document.getElementById("txtBody");
        body.innerHTML = info.event.title;

        info.el.style.borderColor = 'red';
    }
    
    onClickCerrar(){
        let content;
        content = document.getElementById("popup");
        content.style.display = "none";
        content.style.opacity = 0;
      }

    onClickCerrarEvento(){
        let content;
        content = document.getElementById("popupEvento");
        content.style.display = "none";
        content.style.opacity = 0;
    }

    onGuardarEvento(){
        debugger;
        let titulo;
        let fecha;
        let fechamodificada;
        titulo = document.getElementById("tituloCalendario");
        titulo = titulo.value;
        fecha = document.getElementById("fecha").textContent.split("/");
        fecha = fecha.reverse().join("-");
        fechamodificada = fecha.replace("-","");
        fechamodificada = fechamodificada.replace("-","");

        this.calendarEvents = this.calendarEvents.concat({id:fechamodificada , title:titulo, start:fecha, end:fecha, backgroundColor:"red" })
        //tituloCalendario, Peluquero
        let content;
        content = document.getElementById("popup");
        content.style.display = "none";
        content.style.opacity = 0;
    }


    constructor() {
    }

    ngOnInit() {}
}
