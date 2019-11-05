import { Component } from "@angular/core";
import { ECommerceService } from "./e-commerce.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "eCommerce";
 

  constructor() {}

  ngOnInit(): void {
   
  }
}
