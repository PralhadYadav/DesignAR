import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ECommerceService } from "../e-commerce.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  locations: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ecommerceSrc: ECommerceService
  ) {}

  ngOnInit() {
    this.locations = ["Mumbai", "Pune", "Delhi", "Chennai"];
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      location: ["", Validators.required]
    });
  }

  onSubmit() {
    console.log("submit");
    if (this.loginForm.valid) {
      this.ecommerceSrc.setUserDetails(this.loginForm.value);
      this.router.navigate(["products"]);
    }
  }
}
