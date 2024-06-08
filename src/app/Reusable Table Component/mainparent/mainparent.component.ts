import { Component, OnInit } from '@angular/core';
import { ReusableshareService } from '../reusableshare.service';

@Component({
  selector: 'app-mainparent',
  templateUrl: './mainparent.component.html',
  styleUrls: ['./mainparent.component.scss'],
})
export class MainparentComponent implements OnInit {
  allUsers: any[] = [];
  allColumn: any[] = [];
  show = false;
  filterData: any[] = [];
  display: boolean = false;
  dataArray = ['name', 'username', 'email', 'phone', 'website', 'date'];
  singledataArray = [
    'ID',
    'name',
    'username',
    'email',
    'phone',
    'website',
    'date',
  ];
  sigleFilterUser: any = {};
  showSingleUser = false;
  visible!:boolean
  constructor(private service: ReusableshareService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe((res: any) => {
      this.allUsers = res;
      if (this.allUsers && this.allUsers.length > 0) {
        this.filterData = this.allUsers;
      }
      console.log(this.allUsers);
      this.allUsers.forEach((item) => {
        item.date = new Date();
        const dateString = item.date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });
        item.date = dateString;
      });

      this.allColumn = Object.keys(this.allUsers[0]);
      console.log(this.allColumn);
    });
  }

  showBtn() {
    if (this.show === false) {
      this.dataArray.push('Actions');
    } else {
      this.dataArray.pop();
    }
    this.show = !this.show;
  }

  search(data: any) {
    this.filterData = this.allUsers.filter((item) => {
      return Object.values(item).find((el) => {
        return (
          typeof el === 'string' &&
          el.toLowerCase().includes(data.toLowerCase())
        );
        
      });
    });
    this.display = this.filterData.length === 0;
    
  }

  passEdit(e: any) {
    this.sigleFilterUser = this.filterData.find((x) => x === e);
    console.log(this.sigleFilterUser);

    if (this.sigleFilterUser && Object.keys(this.sigleFilterUser).length > 0) {
      this.showSingleUser = true;
      this.visible=true
    } else {
      this.showSingleUser = false;
    }
  }

  passDelete(user: any) {
    this.filterData = this.filterData.filter((x) => x !== user);

    if (this.sigleFilterUser === user) {
      
      this.sigleFilterUser = {};
      this.visible=false
   
    }
    
  }
}
