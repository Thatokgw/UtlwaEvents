import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events / Utlwaevents</h1>
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent {
events = [
     {
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
    },
      {
        id: 2,
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
        },
         {
            id: 3,
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
            },
             {
                id: 4,
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
                },
                {
                    id: 5,
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
]
}
