import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ECommerceService {
  loggedInUser: any;

  setUserDetails(data) {
    this.loggedInUser = data;
  }

  getUserDetails() {
    return this.loggedInUser;
  }
}
