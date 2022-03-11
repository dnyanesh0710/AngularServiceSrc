import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "HELLO HOW ARE YOU?";
  name="Zensar";
  trueOrFalse=false;
  success="green";
  mySuccessClass="mySuccess";

  check(){
    this.title="You are in the angular world !!";
    console.log(this.title);
    this.success="yellow"
    this.mySuccessClass="mySecondClass";
  }
  checkOne(str:string):void{
    console.log(str);
  }
}
