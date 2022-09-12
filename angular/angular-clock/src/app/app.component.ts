import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  props:any;
   loadClock(props:any){
    this.props=props;
    return new Date().toLocaleTimeString('en-US',props)
   }

   nmber=setInterval(()=>{
      this.loadClock(this.props);
   },1000)





}
