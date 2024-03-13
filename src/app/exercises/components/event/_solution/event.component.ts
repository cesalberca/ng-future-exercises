import { Component, input } from '@angular/core'

@Component({
  selector: 'app-event',
  styleUrl: './event.component.css',
  templateUrl: './event.component.html',
  standalone: true,
  imports: [],
})
export class EventPage {
  event = input<string>('Unkown')
}
