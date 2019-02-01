import {Injectable, Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Storage} from "@ionic/storage";
import {ModalController, NavParams} from "@ionic/angular";

@Injectable()
export class Page1Service {

  constructor(public httpclient: HttpClient, public storage: Storage) {

  }

  getArticles(){
    return this.httpclient.get("https://jsonplaceholder.typicode.com/posts");
  }

  persistArticles(articles){
    return this.storage.set("articles", articles);
  }

}
