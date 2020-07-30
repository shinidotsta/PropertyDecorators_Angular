import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
@Input('ParentValue') ParentTextboxvalue :string;
@Input()  ParentClick :Subject<void>;
@Output('onTextfromChild') passToParent : EventEmitter<String> =new EventEmitter<String>();

clickCount :number=0;

ChildTextboxvalue:string;
  ngOnInit(): void {
    this.ParentClick.subscribe(()=> this.Increment())
  }

  Increment()
  {
    this.clickCount =this.clickCount+1;
  }
  PassDatatoParent()
  {
 this.passToParent.emit(this.ChildTextboxvalue);
  }
}
