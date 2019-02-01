import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HomePage} from "./home.page";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  bootstrap: [HomePage],
  declarations: [HomePage]
})
export class HomePageModule {
}
