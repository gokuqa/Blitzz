import { Component, ViewChild, ElementRef } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  @ViewChild('timePickerOverlay') timePickerOverlay!: ElementRef;

  events: { title: string; start: string }[] = [
    { title: 'event 1', start: '2019-04-01T09:00:00' },
    { title: 'event 2', start: '2019-04-02T10:00:00' },
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: this.events,
  };

  timePickerPosition = { left: 0, top: 0 };
  selectedDate: string = ''; // Variable para almacenar la fecha seleccionada
  selectedTitle: string = ''; // Variable para almacenar el título seleccionado

  constructor() {}

  handleDateClick(arg: any) {
    const title = prompt('Enter a title for the event:');
    if (title) {
      this.selectedTitle = title;
      this.selectedDate = arg.dateStr; // Almacena la fecha seleccionada
      const timePickerOverlay = this.timePickerOverlay.nativeElement as HTMLDivElement;
      timePickerOverlay.style.left = arg.jsEvent.clientX + 'px';
      timePickerOverlay.style.top = arg.jsEvent.clientY + 'px';
      timePickerOverlay.style.display = 'block';
    }
  }

  handleTimeChange() {
    if (this.selectedTitle && this.selectedDate) {
      const timeInput = document.getElementById('eventTime') as HTMLInputElement;
      const time = timeInput.value;
      if (time) {
        const start = this.selectedDate + 'T' + time;
        const confirmation = confirm(`Do you want to create an event at ${start}?`);
        if (confirmation) {
          alert(`Event '${this.selectedTitle}' created at ${start}`);
          this.events = [...this.events, { title: this.selectedTitle, start: start }];
          this.calendarOptions.events = this.events;
        }
      }
    }
    const timePickerOverlay = this.timePickerOverlay.nativeElement as HTMLDivElement;
    timePickerOverlay.style.display = 'none'; // Ocultar el campo de entrada de hora
  }
}
