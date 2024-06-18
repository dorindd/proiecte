import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagservService {
url='https://jsonplaceholder.typicode.com/todos'
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.url)
  }
}
