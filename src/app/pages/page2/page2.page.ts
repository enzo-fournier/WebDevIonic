import {Component, OnInit} from "@angular/core";
import {page2Service} from "./page2.service";
import {ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';

@Component({
  selector: 'page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
  host: {'class': 'page2'},
  providers: [page2Service]
})
export class Page2Page implements OnInit {

  public articles: Array<any>;

  public toShow: boolean;

  constructor(public page2Service: page2Service,  private modalController: ModalController) {
    this.toShow = true;
  }

  ngOnInit() {
    console.log("INIT page2");
    this.articles = this.page2Service.getArticles();
  }

  async openModal(art){
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        article: art
      }
    });
    modal.present();
  }

  updateItem(art){
    if(localStorage.getItem(art.id) === null) {
      localStorage.setItem(art.id, JSON.stringify(art));
      //localStorage.setItem(art.id, '{userId: ' + art.userId + ', ' + 'id: ' + art.id + ', ' + 'title: ' + '"' + art.title + '"' + ', ' + 'body: ' + '"' + art.body + '"' + '}');
      console.log("Updated");
    }
    else{
      localStorage.removeItem(art.id);
    }
  }

  isItemCached(art) {
    if (localStorage.getItem(art.id) === null) {
      return false;
    }
    else{
      return true;
    }
  }

  /*emptyCache() {
    let self = this;
    this.articles.forEach(function (element) {
      self.updateItem(element);
    });
  }*/
}

