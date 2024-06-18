import { Component, OnInit } from '@angular/core';
import { PagservService } from '../pagserv.service';

@Component({
  selector: 'app-mypagination',
  templateUrl: './mypagination.component.html',
  styleUrls: ['./mypagination.component.scss']
})
export class MypaginationComponent implements OnInit {
  allusers: any[] = [];
  totalRecord:number=0;
  page:number=1
  pageSize: number = 5;
  constructor(private service:PagservService) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.service.getUsers().subscribe((res: any) => {
      this.allusers = res;
      this.totalRecord=res.length
      console.log(this.totalRecord)
      console.log(this.allusers)
    });

}

changePageSize(){
  this.page = 1;
  this.getData()

}
}
