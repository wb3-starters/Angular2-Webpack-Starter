import { Component } from '@angular/core';
import {
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Validators,
  Control
} from '@angular/common';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { LandingComponent } from '../../component';

@Component({
  selector: 'new-account',
  template: require('./new-account.component.html'),
  styleUrls: [require('./new-account.component.css')],
  directives: [ FORM_DIRECTIVES ]
})

export class NewAccountComponent {

  newAccountForm: ControlGroup;

  firstNameControl: Control;
  lastNameControl: Control;
  emailControl: Control;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder) {

    this.firstNameControl = new Control('', Validators.required);
    this.lastNameControl = new Control('', Validators.required);
    this.emailControl = new Control('', Validators.required);

    this.newAccountForm = _formBuilder.group({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      email: this.emailControl
    });

  }

  title = "Create a New Account";

  onCreateAccount(user: any) {
    console.log(user);
    this._router.navigateByUrl('/new-account/confirmation');
  }
}