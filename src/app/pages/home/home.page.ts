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
  ];

  constructor() { }

  ngOnInit() {
  }

}
