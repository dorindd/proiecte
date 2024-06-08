import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReusableshareService } from '../reusableshare.service';

@Component({
  selector: 'app-reusablechild',
  templateUrl: './reusablechild.component.html',
  styleUrls: ['./reusablechild.component.scss']
})
export class ReusablechildComponent implements OnInit {
@Input()tableUsers:any
@Input()tableColumns:any
@Input()showButtons:any

@Output() editData=new EventEmitter()
@Output() deleteData=new EventEmitter()
showdata=true
@Input() showMsg=true

  constructor() { }

  ngOnInit(): void {
    
  }

  edit(user:any){
  
    this.editData.emit(user)

  }
  delete(user:any){
    

    this.deleteData.emit(user)
  
   

   
  }

}
