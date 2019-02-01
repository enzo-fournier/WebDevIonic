import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {Page2Page} from "./page2.page";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MatExpansionModule,
    RouterModule.forChild([
      {
        path: '',
        component: Page2Page
      }
    ])
  ],
  bootstrap: [Page2Page],
  declarations: [Page2Page]
})
export class Page2PageModule {
}
