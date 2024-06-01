import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/Search with message/search.service';

@Component({
  selector: 'app-newsearcg',
  templateUrl: './newsearcg.component.html',
  styleUrls: ['./newsearcg.component.scss']
})
export class NewsearcgComponent implements OnInit {

  allUsers: any[] = [];
  userFilter: any[] = [];
 
  constructor(private service: SearchService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe((res: any) => {
      this.allUsers = res;
      if (this.allUsers.length > 0) {
        this.userFilter = this.allUsers
      }
      console.log(this.allUsers);
    });
   
  }

  search(user: any) {
    if(user.trim() === ''){
      this.userFilter = this.allUsers
    }
    else{
      this.userFilter=this.allUsers.filter((item)=>{
        return Object.values(item).find((el)=>{
          return (typeof el === 'string' && el.toLowerCase().includes(user.toLowerCase()))
        })
      })
     

    }

   
   
  }

  delete(userId: any) {
 
    if (confirm('Are you sure you want to delete this user' + " " + userId.name + " " + '?')) {
   
      this.userFilter = this.userFilter.filter((user) => user !== userId);
    }
  }

}
