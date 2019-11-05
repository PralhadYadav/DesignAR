import { Component, OnInit } from "@angular/core";
import { ECommerceService } from "../e-commerce.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  numberOfProducts: number = 0;
  selectedProduct: any = [];
  Products: any = [
    {
      name: "Watch",
      price: 2000
    },
    {
      name: "lamp",
      price: 1000
    },
    {
      name: "shirt",
      price: 5000
    }
  ];
  constructor(private ecommerceSrc: ECommerceService) {}

  ngOnInit() {}

  countProduct(event, action) {
    if (action == "add") {
      this.numberOfProducts = this.numberOfProducts + 1;
      this.selectedProduct.push(event);
    } else {
      const index = this.selectedProduct.findIndex(
        product => product.name === event.name
      );
      if (action == "remove" && index >= 0) {
        this.selectedProduct.splice(index, 1);
        this.numberOfProducts = this.numberOfProducts - 1;
      }
      else{
        alert("You don't have that product in your cart")
      }
    }
  }

  showProductList() {
    let user = this.ecommerceSrc.getUserDetails();

    console.log(
      `User ${user.username} buys following products ${JSON.stringify(
        this.selectedProduct
      )} as total ${this.numberOfProducts} Products`
    );
  }
}
