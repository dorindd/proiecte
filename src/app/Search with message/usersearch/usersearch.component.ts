import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.scss'],
})
export class UsersearchComponent implements OnInit {
  allUsers: any[] = [];
  userFilter: any[] = [];
  show: boolean =true;
  display!: boolean;
  constructor(private service: SearchService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe((res: any) => {
      this.allUsers = res;
      // if (this.allUsers.length > 0) {
      //   this.show = true;
      // }
      console.log(this.allUsers);
    });
   
  }

  search(user: any) {
    this.userFilter = this.allUsers.filter((item: any) => {
      this.show = false;
      return item.name.toLowerCase().includes(user.toLowerCase());
    });
    this.display = this.userFilter.length === 0;
  }

  delete(userId: any) {
 
    if (confirm('Are you sure you want to delete this user?')) {
      this.allUsers = this.allUsers.filter((user) => user !== userId);
      this.userFilter = this.userFilter.filter((user) => user !== userId);
    }
  }
}
