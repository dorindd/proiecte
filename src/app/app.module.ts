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
import { UsersearchComponent } from './Search with message/usersearch/usersearch.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsearcgComponent } from './NEW way for sercing/newsearcg/newsearcg.component';
import { MainparentComponent } from './Reusable Table Component/mainparent/mainparent.component';
import { ReusablechildComponent } from './Reusable Table Component/reusablechild/reusablechild.component';
import { IntroComponent } from './Quiz/intro/intro.component';
import { HtmlComponent } from './Quiz/html/html.component';
import { MypaginationComponent } from './Pagination example/mypagination/mypagination.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    TodoComponent,
    DoctorComponent,
    AppoimentComponent,
    OnlydocComponent,
    RegisterComponent,
    TableComponent,
    UsersearchComponent,
    NewsearcgComponent,
    MainparentComponent,
    ReusablechildComponent,
    IntroComponent,
    HtmlComponent,
    MypaginationComponent,
  


  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
