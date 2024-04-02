import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullCalendarModule } from '@fullcalendar/angular';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'weather',
    component: WeatherWidgetComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CalendarComponent,
    WeatherWidgetComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
