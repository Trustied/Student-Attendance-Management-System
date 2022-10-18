import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup/admin-signup.component';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'admin-dashboard', component: AdminDashboardComponent, },
      { path: 'signup', component: AdminSignupComponent },
      { path: 'login', component: AdminloginComponent }

    ]
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'student', component: StudentComponent, children: [
      { path: 'student-dashboard', component: StudentDashboardComponent },
    ]
  },


  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
