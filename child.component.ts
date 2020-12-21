import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  name: string ;
  constructor() {this.name = "Sheveleva"}
    @Input() userName: string;
     _userAge: number;
    
 

     @Input()
     set userAge(age:number){
      if (age<0) {
        this._userAge=0
      } else if (age >100) {
        this._userAge=100
      } else {this._userAge=age}
      
    }
  
    get userAge(){
      return this._userAge  
    }
    
    @Output() onChanged = new EventEmitter <boolean>()  
    change(increased:boolean){
      this.onChanged.emit(increased)
    }
  

  ngOnInit(): void {
  }

}
