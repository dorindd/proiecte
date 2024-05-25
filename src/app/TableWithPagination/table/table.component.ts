import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor() {}
  supplayer: any[] = [
    {
      name: 'Suplayer 1',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 2',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 3',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 4',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 5',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 6',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 7',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 8',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 9',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 10',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 11',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 12',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 13',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 14',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 15',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 16',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 17',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 18',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 19',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 20',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 21',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 22',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 20',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 21',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 22',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 21',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
    {
      name: 'Suplayer 22',
      adress: 'Adress1',
      phone: 33333,
      email: 'suplayer@yahoo.com',
    },
  ];
  currentPage: number = 1;
  pageSize: number = 5;
  filterSuplayers: any[] = this.supplayer;

  pageSizes: any[] = [5, 10, 20];
  ngOnInit(): void {
    this.visibleData();
    this.pageNumber();
  }
  visibleData() {
    let startPage = (this.currentPage - 1) * this.pageSize;
    let endPage = startPage + this.pageSize;
    return this.filterSuplayers.slice(startPage, endPage);
  }

  previous() {
    if (this.currentPage !== 1) {
      this.currentPage--;
      this.visibleData();
    }
  }
  next() {
    if (this.currentPage !== this.pageNumber().length) {
      this.currentPage++;
      this.visibleData();
    }
    
  }

  pageNumber() {
    let totalPages = Math.ceil(this.filterSuplayers.length / this.pageSize);

    let pageNumArray = new Array(totalPages);
    return pageNumArray;
  }

  getCurrent(i: number) {
    this.currentPage = i;
    this.visibleData();
  }

  filterData(filter: any) {
    console.log(filter);
    this.filterSuplayers = this.supplayer.filter((item: any) => {
      return Object.values(item).some((val: any) => {
        return (
          typeof val === 'string' &&
          val.toLowerCase().includes(filter.toLowerCase())
        );
      });
    });
    this.visibleData();
  }

  changePageSize(pageSize: any) {
    console.log(pageSize);

    this.pageSize = parseInt(pageSize);
    //  this.pageSize = +pageSize;  // or convrsie din string in nr

    this.visibleData();
    this.currentPage = 1;
  }
}
