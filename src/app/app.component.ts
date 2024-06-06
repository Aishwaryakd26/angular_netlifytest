import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  // datafromParent="Hello Data from Parent";

  dataP={
    name:'Bruce',
    email:'bruce@gmail.com'
  }
  childData: any;

  parentMethod(data: any){
    this.childData=data;
  }
}
