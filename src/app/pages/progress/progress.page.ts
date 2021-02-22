import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  percentage: number = 0;

  constructor() { }

  ngOnInit() {
  }

  rangeChange(event: any) {
    const {value} = event.detail;
    this.percentage = value / 100;
  }

}
