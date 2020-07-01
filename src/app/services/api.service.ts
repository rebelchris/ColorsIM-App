import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { API_URL } from "../../environments/environment";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(public http: HttpClient, private storage: Storage) {}

  register() {
    return new Promise<any>((resolve) => {
      this.http
        .post(API_URL + "/users", { color: "green" })
        .subscribe((response) => {
          this.storage.set("user", response);
          resolve(response);
        });
    });
  }

  getLocalData() {
    return this.storage.get("user");
  }

  getUser() {
    return new Promise<any>((resolve) => {
      this.getLocalData().then((data) => {
        if (data === null) {
          // No local storage yet do the main query
          resolve();
        } else {
          resolve(data);
        }
      });
    });
  }

  getUsers() {
    return new Promise<any>((resolve) => {
      console.log(this.storage.get("user"));
      this.http.get(API_URL + "/users").subscribe((response) => {
        resolve(response);
      });
    });
  }

  logout() {
    return new Promise<any>((resolve) => {
      this.getLocalData().then((user) => {
        this.http
          .delete(API_URL + "/users/" + user.id)
          .subscribe((response) => {
            resolve(response);
          });
      });
    });
  }
}
