import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './Doctor Appoiment/doctor/doctor.component';
import { AppoimentComponent } from './Doctor Appoiment/appoiment/appoiment.component';
import { OnlydocComponent } from './Doctor Appoiment/onlydoc/onlydoc.component';
import { RegisterComponent } from './Doctor Appoiment/register/register.component';


const routes: Routes = [
 // {path:"",redirectTo:'/app',pathMatch:"full"},
  // {path:"app",component:AppoimentComponent},
  
  //   {path:'list',component:DoctorComponent},
  //   {path:'done',component:OnlydocComponent},
  //   {path:'register',component:RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
