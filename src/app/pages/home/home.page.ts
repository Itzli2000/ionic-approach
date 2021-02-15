import { Component, OnInit } from '@angular/core';
import { Components } from 'src/app/models/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Components[] = [
    {
      icon: 'american-football-outline',
      name: 'action sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'alert',
      redirectTo: '/alert'
    },
    {
      icon: 'person-circle-outline',
      name: 'avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'buttons',
      redirectTo: '/buttons'
    },
    {
      icon: 'card-outline',
      name: 'cards',
      redirectTo: '/cards'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'check',
      redirectTo: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'date time',
      redirectTo: '/date-time'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
