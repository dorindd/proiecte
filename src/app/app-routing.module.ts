import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './Doctor Appoiment/doctor/doctor.component';
import { AppoimentComponent } from './Doctor Appoiment/appoiment/appoiment.component';
import { OnlydocComponent } from './Doctor Appoiment/onlydoc/onlydoc.component';
import { RegisterComponent } from './Doctor Appoiment/register/register.component';
import { HtmlComponent } from './Quiz/html/html.component';
import { IntroComponent } from './Quiz/intro/intro.component';


const routes: Routes = [
  {path:"",redirectTo:'/into',pathMatch:"full"},
  // {path:"app",component:AppoimentComponent},
  
  //   {path:'list',component:DoctorComponent},
  //   {path:'done',component:OnlydocComponent},
  //   {path:'register',component:RegisterComponent}

  {path:'into',component:IntroComponent},
  {path:'quiz',component:HtmlComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
