import { Component } from '@angular/core';

interface SidebarItem {
  title: string;
  icon: string;
  link: string;
  active: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  sidebarItems: SidebarItem[] = [
    { title: 'To do List', icon: 'fa fa-moon-o', link: '', active: true },
    {
      title: 'Calendar',
      icon: 'fa fa-calendar-o',
      link: 'calendar',
      active: false,
    },
    { title: 'Weather', icon: 'fa fa-sun-o', link: 'weather', active: false },
  ];

  activateItem(item: SidebarItem): void {
    this.sidebarItems.forEach((i) => (i.active = false)); // Desactivar todos los elementos
    item.active = true; // Activar el elemento clicado
  }
}
