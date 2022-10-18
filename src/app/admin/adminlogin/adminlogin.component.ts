import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminAuthService } from '../service/admin-auth.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminLoginData = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  })

  constructor(private fb: FormBuilder, private adminAuth: AdminAuthService) { }

  ngOnInit(): void {
    this.adminLoginData = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  adminLogin() {
    this.adminAuth.adminLogin(this.adminLoginData.value.username, this.adminLoginData.value.password);
    //console.log(this.adminLoginData.value.username + "" + this.adminLoginData.value.password)
  }

}
