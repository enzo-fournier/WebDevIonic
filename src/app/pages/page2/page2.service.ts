import {Injectable, Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Storage} from "@ionic/storage";
import {ModalController, NavParams} from "@ionic/angular";

@Injectable()
export class page2Service {

  constructor(public httpclient: HttpClient, public storage: Storage) {

  }

  getArticles(){
    let articles = [];
    for ( let i = 0, len = localStorage.length; i < len; ++i ) {
      if(localStorage.key( i ) != "identifiant") {
        articles.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return articles;
  }
}
