import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {
  albums: any[] = [];
  textSearch: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAlbums().subscribe((albums) => (this.albums = albums));
  }

  onSearchChange(event: any) {
    this.textSearch = event.detail.value;
  }
}
