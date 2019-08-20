import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Register } from '../data/IRegister';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reg-control',
  templateUrl: './reg-control.component.html',
  styleUrls: ['./reg-control.component.scss']
})
export class RegControlComponent implements OnInit {
// class for values initialize and persiting into database
  reg: Register = { firstname: null, lastname: null, password: null, email: null, phone:null, state:null,city:null, pincode:null,homeno:null}
  public id = [];
  message: string=null;

  constructor(private register: RegisterService,private router:Router) { }

  ngOnInit() {
  }

  OnSubmit(){
    //Persisting the data of the customer by calling service class method
    this.register.doRegistration(this.reg).subscribe(
      value => {
        this.id = value;
        alert("Your user id is "+this.id);
        this.router.navigateByUrl("success");

      },
      error => {
        this.message = error.error.message;
        alert(this.message);
        console.log(error);
      }
    );
  }

}
