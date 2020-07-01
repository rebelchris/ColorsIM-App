import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage {
  constructor(private ApiService: ApiService, private navCtrl: NavController) {}

  logout() {
    this.ApiService.logout().then((data) => {
      this.navCtrl.navigateForward("home");
    });
  }
}
