import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btngen',
  templateUrl: './btngen.component.html',
  styleUrls: ['./btngen.component.css']
})
export class BtngenComponent  {

  @Input()
  buttonLabels=new Array();

}
