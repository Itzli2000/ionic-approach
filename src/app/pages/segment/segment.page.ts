import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  heroes: Observable<any>;
  filterHereos: string = 'all';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.heroes = this.dataService.getHeroes();
  }

  segmentChanged(event: any) {
    const { value } = event.detail;
    this.filterHereos = value;
  }
}
