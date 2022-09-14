import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {

  btnCount:number =0;
  btnHitCount(){
    this.btnCount = this.btnCount + 1;
    this.totalCount.emit(this.btnLable);
  }

   @Output()
   totalCount=new EventEmitter();

  @Input()
  btnLable!: number;

}
