import { Injectable } from '@angular/core';
import { User } from './appoiment/user';


@Injectable({
  providedIn: 'root',
})
export class ShareService {
  appoitment: User[] = [];
  userAppoitment = {};
  



  constructor() {
    const local = localStorage.getItem('appoimemts');
    if (local !== null) {
      this.appoitment = JSON.parse(local);
    }
  }

  addAppoitment(
    id: any,
    name: any,
    mobile: any,
    city: any,
    age: any,
    first: any,
    gender: any,
    date: any,
    time: any,
    note: any,
    done: any
  ) {
    let userid = this.appoitment.length + 1;
    this.appoitment.push({
      id: userid,
      name: name,
      mobile: mobile,
      city: city,
      age: age,
      first: first,
      gender: gender,
      date: date,
      time: time,
      note: note,
      done: done,
    });
    localStorage.setItem('appoimemts', JSON.stringify(this.appoitment));
    console.log(this.appoitment);
  }

  deleteApp(index: any) {
    this.appoitment = this.appoitment.filter((u) => u !== index);
    localStorage.setItem('appoimemts', JSON.stringify(this.appoitment));

    //Note that I've also modified the deleteApp function in the service to use the filter method instead of splice, which is a more functional approach and avoids mutating the original array.
  }

  // getRegister(myname: any, password: any) {
  //   this.credentials.push({ myname: myname, password: password });
  //   localStorage.setItem('credentials', JSON.stringify(this.credentials));
  // }
}
