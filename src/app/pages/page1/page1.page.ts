import {Component, OnInit} from "@angular/core";
import {Page1Service} from "./page1.service";
import {ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';
import { Router } from "@angular/router";

@Component({
  selector: 'page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  host: {'class': 'page1'},
  providers: [Page1Service]
})
export class Page1Page implements OnInit {

  public articles: Array<any>;

  public error: boolean;

  constructor(public page1Service: Page1Service,  private modalController: ModalController, private router: Router) {
  }

  ngOnInit() {
    let self = this;
    this.page1Service.getArticles().subscribe(
      (data: Array<any>) => {
        self.error = false;
        this.articles = data.slice(0,10);

        this.page1Service.persistArticles(data).then(
          ok => {
            console.log("Les articles ont bien été stockés");
          }
        );
      },
      error => {
        self.error = true;
        setTimeout(function(){
          self.goToPage2();
        }, 2000);
      }
    );
  }

  goToPage2(){
    this.router.navigateByUrl("page2");
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
}

