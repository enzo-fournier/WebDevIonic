import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() article: any;

  constructor(private modalController: ModalController) { }

  ngOnInit(){

  }

  closeModal() {
    this.modalController.dismiss();
  }
}
