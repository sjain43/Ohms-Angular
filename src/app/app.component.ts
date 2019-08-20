import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hms';
  check= false;

  constructor(private router:Router){
    
  }

  redirect(){
    this.check= true;
    this.router.navigateByUrl("Activity");
  }
  Redirect(){
    this.check= true;
    this.router.navigateByUrl("register");
  }
}
