import { Components } from './models/components';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  menuOptions: Observable<Components[]>;

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.menuOptions = this.dataService.getMenuOptions();
  }
}
