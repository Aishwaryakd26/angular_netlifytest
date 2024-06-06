import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // @Input() data :any;



  @Output() messageEvent =new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit("this message from child component");
  }
}
