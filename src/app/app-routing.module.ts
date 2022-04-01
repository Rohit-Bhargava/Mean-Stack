import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthGuard } from "./auth/auth.guard";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SettingComponent } from "./setting/setting.component";

const routes: Routes = [
  { path: "", component: UserProfileComponent },
  { path:'user-pro', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'setting', component: SettingComponent, canActivate: [AuthGuard],
    data:{
      allowedRoles: ['admin', 'manager']
    } 
},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
