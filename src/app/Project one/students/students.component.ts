import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  show = false;
  selectall: any;
  checked: any;
  user: any;
  students: any[] = [];
  student: any = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    adress: '',
  };
  constructor() {}

  ngOnInit(): void {
    const local = localStorage.getItem('students');
    if (local != null) {
      this.students = JSON.parse(local);
    }
  }

  add() {
    this.show = true;
    this.student = {
      id: 0,
      fullName: '',
      email: '',
      mobile: '',
      adress: '',
    };
  }
  close() {
    this.show = false;
  }
  save() {
    this.student.id = this.students.length + 1;
    this.students.push(this.student);
    this.student = {
      id: 0,
      fullName: '',
      email: '',
      mobile: '',
      adress: '',
    };
    console.log(this.students);
    localStorage.setItem('students', JSON.stringify(this.students));
    this.show = false;
  }
  edit(s: any) {
    this.user = {
      id: s.id,
      fullName: s.fullName,
      email: s.email,
      mobile: s.mobile,
      adress: s.adress,
    };

    this.show = true;
    this.student = this.user;
  }

  update() {
    const record = this.students.find((x) => x.id == this.user.id);
    record.fullName = this.student.fullName;
    record.email = this.student.email;
    record.mobile = this.student.mobile;
    record.adress = this.student.adress;
    localStorage.setItem('students', JSON.stringify(this.students));
    console.log(record.fullName);
    this.show = false;
  }
  remove(index: any) {
    this.students.splice(this.students.indexOf(index), 1);
    localStorage.setItem('students', JSON.stringify(this.students));
  }
  check() {
    for (let i = 0; i < this.students.length; i++) {
      this.students[i].checked = this.selectall;
    }
  }
}
