import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";

import { AuthService } from '../auth/auth.service'
import { Router } from "@angular/router";

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy{
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  roles: Role[] = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'manager', viewValue: 'Manager' },
    { value: 'user', viewValue: 'User' },
  ];
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    }

    onLogout() {
      this.authService.logout();
      this.router.navigate(['/login']);
    }

    ngOnDestroy() {
      this.authListenerSubs.unsubscribe();
    }
  
}
