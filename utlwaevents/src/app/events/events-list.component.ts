import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
    <h1>Upcoming Angular Events / Utlwaevents</h1>
        <hr>
        <div class="well">
        <div>Hello World</div>
        </div>
    <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
    `
})
export class EventsListComponent {
event1 = {
    id: 1,
    name: 'Angular Connect & Utlwaevents',
    date: '09/10/2021',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png' ,
    location: {
        address: '14 engelwood circle' ,
        suburb: 'klippoortjie park' ,
        city: 'Germiston' ,
        country: 'South Africa'
        }
    }
}
