import { Injectable } from '@angular/core';
import { Authuser } from './appoiment/authuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  credentials: Authuser[] = [];
  constructor() { 
    const local = localStorage.getItem('credentials');
    if (local !== null) {
      this.credentials = JSON.parse(local);
    }
  }

  getRegister(myname: string, password: any) {
    this.credentials.push({name: myname, password: password });
    localStorage.setItem('credentials', JSON.stringify(this.credentials));
  }

  getValidation(name:string,password:any):boolean{
    return this.credentials.some(user => user.name === name && user.password === password);
  }
    // const validateUser=this.credentials.find(el=>el.name === name && el.password === password);
    // return validateUser!== undefined;


  }

