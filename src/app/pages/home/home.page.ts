import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Components } from 'src/app/models/components';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components: Observable<Components[]>;

  constructor(
    private menuController: MenuController,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.components = this.dataService.getMenuOptions();
  }

  mostrarMenu() {
    this.menuController.open('first')
  }
}
