import { Component, OnInit } from "@angular/core";

import { Subscription } from "rxjs";

import { AuthService } from "../auth/auth.service";
import { AuthData } from "../auth/auth-data.model";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
   
  email:String='';
  name:String="";

  constructor(private authService: AuthService) {
    this.authService.user().subscribe(
      data => this.addUser(data),
    )
   }

  ngOnInit() {

   
      }

  addUser(data) {
    this.authService = data.localStorage.setItem()
  }

  // getAuthData() {
  //   const token = localStorage.getItem("token");
  //   const expirationDate = localStorage.getItem("expiration");
  //   const userId = localStorage.getItem("userId");
  //   if (!token || !expirationDate) {
  //     return;
  //   }
  //   return {
  //     token: token,
  //     expirationDate: new Date(expirationDate),
  //     userId: userId
  //   }
  // }

    }