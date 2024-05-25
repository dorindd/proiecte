import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  allNotes: any[] = [];
  note = {
    id: 0,
    mynote: '',
  };
  newnote: any;
  change: any;
  show: boolean = false;
  disbtn = false;
  constructor() {
    
  }

  ngOnInit(): void {
    const local = localStorage.getItem('notes');
    if (local !== null) {
      
      this.allNotes = JSON.parse(local);
    }
   if (this.allNotes.length !== 0) {
      this.show = true;
    }
  }
  add() {
    this.show = true;

    this.note.id = this.allNotes.length + 1;
    this.allNotes.push(this.note);
    localStorage.setItem('notes', JSON.stringify(this.allNotes));

    this.note = {
      id: 0,
      mynote: '',
    };
  }
  edit(newn: any) {
    this.disbtn = true;
    this.newnote = {
      id: newn.id,
      mynote: newn.mynote,
    };

    this.note = this.newnote;
  }

  update() {
    this.disbtn = false;
    this.change = this.allNotes.find((el: any) => {
      return el.id === this.newnote.id;
    });

    this.change.mynote = this.note.mynote;

    this.note = {
      id: 0,
      mynote: '',
    };
    localStorage.setItem('notes', JSON.stringify(this.allNotes));
  }

  delete(index: any) {
    this.allNotes.splice(this.allNotes.indexOf(index), 1);
    localStorage.setItem('notes', JSON.stringify(this.allNotes));
    if (this.allNotes.length === 0) {
      this.show = false;
    }
  }
  cancel(){
    this.note = {
      id: 0,
      mynote: '',
    };

  }

 
}
