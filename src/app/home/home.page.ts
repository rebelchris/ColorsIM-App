import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ApiService } from "../services/api.service";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private ApiService: ApiService, private navCtrl: NavController) {}

  register() {
    this.ApiService.register().then((data) => {
      this.navCtrl.navigateForward("tabs/color");
    });
  }
}
