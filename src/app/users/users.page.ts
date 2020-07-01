import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.page.html",
  styleUrls: ["./users.page.scss"],
})
export class UsersPage implements OnInit {
  constructor(private ApiService: ApiService) {}

  users: any[] = [];

  ngOnInit() {
    this.ApiService.getUsers().then((data) => {
      this.users = data;
    });
  }
}
