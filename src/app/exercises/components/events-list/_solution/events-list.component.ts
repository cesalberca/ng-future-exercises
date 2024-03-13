import { Component } from '@angular/core'
import { EventPage } from '../../event/_solution/event.component'

@Component({
  selector: 'app-events-list',
  standalone: true,
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css',
  imports: [EventPage],
})
export class EventsListPage {
  events: string[] = ['Meditar', 'Journaling', 'Beber 2L de agua', 'Hacer 10.000 pasos']
}
