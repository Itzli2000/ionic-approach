import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() name: string;
  @Input() country: string;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  closeNoArgs() {
    this.modalController.dismiss();
  }

  closeWithArgs() {
    this.modalController.dismiss({
      name: 'Itzli Sanchez',
      country: 'Canada'
    });
  }

}
