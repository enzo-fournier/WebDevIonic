import {Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  host: {'class': 'home'},
  providers: []
})
export class HomePage implements OnInit {

  public identifiant: string;

  constructor(public router: Router) {}

  ngOnInit() {
    console.log("INIT MAIN PAGE");
    this.identifiant = localStorage.getItem("identifiant")
    if (this.identifiant != null) {
      this.goToPage1();
    }
  }

  goToPage1(){
    this.router.navigateByUrl("page1");
  }

  saveName(name: string){
    localStorage.setItem("identifiant", name);
    this.identifiant = localStorage.getItem("identifiant");
    this.goToPage1();
  }
}

