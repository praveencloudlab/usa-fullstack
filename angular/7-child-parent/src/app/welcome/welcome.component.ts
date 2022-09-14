import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  totalBtnHitsCount = 0;

  buttons=[10,5,15,-10,20,-5,40,-15]

  totalCountGen(msg:number){
    this.totalBtnHitsCount=this.totalBtnHitsCount+msg
  }
}
