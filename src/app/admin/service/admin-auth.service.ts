import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

export interface admin {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  adminUsername: string = environment.adminUsername;
  adminPassword: string = environment.adminPassword;

  constructor(private http: HttpClient, private router: Router) { }
  //admin login
  adminLogin(username: string, password: string) {
    if (username === this.adminUsername && password === this.adminPassword) {
      alert('Login Successful!!');
      console.log('Login Successful!');
      this.router.navigate(['/admin/admin-dashboard']);
    } else {
      alert('Wrong Login Credentials!');
      console.log('Login failed!');
      this.router.navigate(['/admin/login']);
    }
  }
  //check admin login status
  isAdminLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}

