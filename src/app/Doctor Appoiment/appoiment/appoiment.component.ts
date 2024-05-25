import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ShareService } from '../share.service';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-appoiment',
  templateUrl: './appoiment.component.html',
  styleUrls: ['./appoiment.component.scss'],
})
export class AppoimentComponent implements OnInit, AfterViewInit {
  id: any;
  name: any;
  mobile: any;
  city: any;
  age: any;
  first: any = '';
  gender: any;
  date: any;
  time: any;
  note: any;
  done: boolean = false;
  show = true;
 
  allcredentials: any[] = [];
  myname='';
  password !:''
  constructor(
    private service: ShareService,
    private elementRef: ElementRef,
    private route: Router,
    private authservice: AuthService
  ) {}
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      'green';
  }

  ngOnInit(): void {
  
    this.allcredentials = this.authservice.credentials;
    console.log(this.allcredentials);

    // const local = localStorage.getItem('credentials');
    // if (local !== null) {
    //   this.allcredentials = JSON.parse(local);
    // }
  }
  book() {
    this.service.addAppoitment(
      this.id,
      this.name,
      this.mobile,
      this.city,
      this.age,
      this.first,
      this.gender,
      this.date,
      this.time,
      this.note,
      this.done
    );
    this.name = '';
    this.mobile = '';
    this.city = '';
    this.age = '';
    this.first = '';
    this.gender = '';
    this.date = '';
    this.time = '';
    this.note = '';
  }
  login() {
    this.show = !this.show;
  }
  log() {
   
    const matchCredentials = this.authservice.getValidation(this.myname,this.password)
   
    if (matchCredentials) {
    
 this.route.navigate(['/done'],{queryParams:{myname:this.myname}});
     
    } else {
      alert('wrong credentials');
      this.myname='';
      this.password='';
      this.show = true;
    }
  }
}
