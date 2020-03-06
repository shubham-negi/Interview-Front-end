import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Axelerant';
  // list containing mock data
  feedbackList: object[];
  serviceList: object[];

  constructor() {
    this.feedbackList = [
      {
        "id": "01",
        "message": "Mauris at quam at mauris venenatis eleifend. Nullam eleifend o Mauris at quam at mauris venenatis eleifend. Nullam eleifend.",
        "username": "Client Name",
        "position": "Position, ORG",
        "avatar": "../../../assets/icons/user-avatar.png",
        "alt_text": "user icon"
      }, {
        "id": "02",
        "message": "Mauris at quam at mauris venenatis eleifend. Nullam eleifend o Mauris at quam at mauris venenatis eleifend. Nullam eleifend. Mauris at quam at mauris venenatis eleifend. Nullam eleifend.",
        "username": "Client Name",
        "position": "Position, ORG",
        "avatar": "../../../assets/icons/user-avatar.png",
        "alt_text": "user icon"
      }, {
        "id": "03",
        "message": "Mauris at quam at mauris venenatis eleifend. Nullam eleifend o Mauris at quam at mauris venenatis eleifend. Nullam eleifend.",
        "username": "Client Name",
        "position": "Position, ORG",
        "avatar": "../../../assets/icons/user-avatar.png",
        "alt_text": "user icon"
      }
    ]

    this.serviceList = [
      {
        url: '../../../assets/icons/service-icon-a.png',
        alt: 'service icon a',
        name: 'Service Name'
      }, {
        url: '../../../assets/icons/service-icon-b.png',
        alt: 'service icon b',
        name: 'Service Name'
      }, {
        url: '../../../assets/icons/service-icon-c.png',
        alt: 'service icon c',
        name: 'Service Name'
      }
    ];
  }
}
