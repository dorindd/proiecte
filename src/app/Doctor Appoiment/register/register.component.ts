import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShareService } from '../share.service';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements AfterViewInit,OnInit {
@ViewChild('name') name!:ElementRef
@ViewChild('password') password!:ElementRef;
  constructor(private service:ShareService,private elementRef: ElementRef,private location:Location,private authservice: AuthService) { }
ngAfterViewInit(): void {
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
    'green';
}
  ngOnInit(): void {
  }
register(name:any,password:any){
  this.authservice.getRegister(name,password);
  this.name.nativeElement.value='';
  this.password.nativeElement.value='';
   

}
getback(){
  this.location.back();

}
}
