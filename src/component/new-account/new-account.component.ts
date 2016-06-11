import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { LandingComponent } from '../../component';

@Component({
  selector: 'new-account',
  template: require('./new-account.component.html'),
  styleUrls:[require('./new-account.component.css')],
  directives: [ ROUTER_DIRECTIVES ]
})


export class NewAccountComponent {   
  constructor(
    private _router: Router) {}
   
  title = "Create a New Account";

  user = {
      firstName: "", 
      lastName: "",
      email: ""
  };
  
  CreateAccount(user: any)
  { 
      console.log(user);
      this._router.navigateByUrl('/new-account/confirmation');
  }
}