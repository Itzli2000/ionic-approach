import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  userList: Observable<any>;
  @ViewChild(IonList) ionList: IonList;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.userList = this.dataService.getUsers();
  }

  favorite(item) {
    console.log(item);
    this.ionList.closeSlidingItems();
  }

  share(item) {
    console.log(item);
    this.ionList.closeSlidingItems();
  }

  unread(item) {
    console.log(item);
    this.ionList.closeSlidingItems();
  }
}
