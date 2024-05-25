import { Component, ElementRef, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ShareService } from '../share.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-onlydoc',
  templateUrl: './onlydoc.component.html',
  styleUrls: ['./onlydoc.component.scss']
})
export class OnlydocComponent implements OnInit {
  userAppoiments: any[] = [];
  currentAppoitment: any[] = [];
  myselect: any = '';
  dateappoiment: any = [];
  allselect = ['all', 'Current date'];
 
  printName:any='uu'
  constructor(private service:ShareService,private elementRef: ElementRef,private location:Location,private router:ActivatedRoute) { }
  ngAfterViewInit() {

   
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      'blue';
  }
  ngOnInit(): void {

    this.router.queryParamMap.subscribe((params:any)=>{
      this.printName=params.get('myname')
      console.log(this.printName)
    })
    const local = localStorage.getItem('appoimemts');
    if (local !== null) {
      this.userAppoiments = JSON.parse(local);
    }

   
    this.userAppoiments = this.service.appoitment;
    console.log(this.userAppoiments);

   
    
    
  }
 

  checked(id: any) {
    this.userAppoiments = this.userAppoiments.map(u => {
      if (u.id === id) {
  
      u.done=!u.done
   
      }
      return u;
    });
  
    // Filter the appointments based on the `done` property
  
  
    localStorage.setItem('appoimemts', JSON.stringify(this.service.appoitment));
  }

  delete(user: any) {

      this.service.deleteApp(user);
  
    this.service.deleteApp(user);
    this.userAppoiments = this.userAppoiments.filter(u => u !== user);
    this.currentAppoitment = this.currentAppoitment.filter(u => u !== user);
   
  
    }
    select(event: any) {
      this.myselect = event.target.value;
   
      if (this.myselect === 'all') {
        this.userAppoiments = this.service.appoitment;
  
        console.log(this.userAppoiments);
      } 
      else if (this.myselect === '') {
        this.userAppoiments = [];
      } else {
        this.userAppoiments.filter((appointment) => {
          const currentDate = new Date();
          const formattedCurrentDate = this.formatDate(currentDate);
          console.log(appointment);
          console.log(formattedCurrentDate);
  
          if (appointment.date === formattedCurrentDate) {
            this.currentAppoitment.push(appointment);
     
  
            console.log(this.currentAppoitment);
          }
        });
      }
      this.currentAppoitment = [...new Set(this.currentAppoitment)];
   
    }
  
    formatDate(date: Date): string {
      const year = date.getFullYear();
      const month = this.padZero(date.getMonth() + 1); // Months are zero based
      const day = this.padZero(date.getDate());
      return `${year}-${month}-${day}`;
    }
  
    padZero(num: number): string {
      return num < 10 ? '0' + num : num.toString();
    }
    back(){
      this.location.back();

    }

}
