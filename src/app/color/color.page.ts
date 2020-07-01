import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-color",
  templateUrl: "./color.page.html",
  styleUrls: ["./color.page.scss"],
})
export class ColorPage implements OnInit {
  constructor(private ApiService: ApiService) {}

  user: any = {};

  ngOnInit() {
    this.ApiService.getUser().then((user) => {
      this.user = user;
    });
  }
}
