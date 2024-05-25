import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './Project one/students/students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './ToDo/todo/todo.component';
import { DoctorComponent } from './Doctor Appoiment/doctor/doctor.component';
import { AppoimentComponent } from './Doctor Appoiment/appoiment/appoiment.component';
import { OnlydocComponent } from './Doctor Appoiment/onlydoc/onlydoc.component';
import { RegisterComponent } from './Doctor Appoiment/register/register.component';
import { TableComponent } from './TableWithPagination/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    TodoComponent,
    DoctorComponent,
    AppoimentComponent,
    OnlydocComponent,
    RegisterComponent,
    TableComponent


  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
