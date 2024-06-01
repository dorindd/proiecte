import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
url='https://jsonplaceholder.typicode.com/users'
  constructor(private http:HttpClient) { }

  getUsers():Observable<any[]>{
    return  this.http.get<any[]>(this.url)

  }
}
