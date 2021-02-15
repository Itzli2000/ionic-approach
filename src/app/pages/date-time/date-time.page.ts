import { Component, OnInit } from '@angular/core';
import { PickerOptions } from 'src/app/models/picker-options';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento: Date = new Date();
  customYearValues: number[] = [2025, 2020, 2019, 2018, 2000];
  customPickerOptions: PickerOptions = {
    buttons: [{
      text: 'Save',
      handler: (event: object) => console.log('Clicked Save!', event)
    }, {
      text: 'Log',
      handler: () => {
        console.log('Clicked Log. Do not Dismiss.');
        return false;
      }
    }]
  };

  constructor() { }

  ngOnInit() {
  }

  dateChange(event) {
    console.log(event);
    console.log(new Date(event.detail.value));
  }

}
