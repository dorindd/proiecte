import {

  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { ShareService } from '../share.service';
import { User } from '../appoiment/user';
import { Location } from '@angular/common';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit, AfterViewInit {
  userAppoiments: User[] = [];
  currentAppoitment: User[] = [];
  myselect: any = '';
  dateappoiment: any = [];
  allselect = ['all', 'Current'];
  name:any
  constructor(private service: ShareService, private elementRef: ElementRef,private location: Location) { }
  // imp pt schimbat culoarea pe toata pagina
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      'green';
  }
  // imp pt schimbat culoarea pe toata pagina
  ngOnInit(): void {
    const local = localStorage.getItem('appoimemts');
    if (local !== null) {
      this.userAppoiments = JSON.parse(local);
    }

    this.userAppoiments = this.service.appoitment;
    
    
    console.log(this.userAppoiments);
  }
  delete(user: any) {

  //  this.service.deleteApp(user);

  this.service.deleteApp(user);
  this.userAppoiments = this.userAppoiments.filter(u => u !== user);
  this.currentAppoitment = this.currentAppoitment.filter(u => u !== user);

  }


  select(event: any) {
    this.myselect = event.target.value.toUpperCase();
    this.currentAppoitment=this.userAppoiments.filter(u=>u.name.toUpperCase() === this.myselect.toUpperCase());
   
  console.log(this.myselect)

  
    console.log(this.currentAppoitment);

    
 
  }
  back(){
    this.location.back();

  }


}
