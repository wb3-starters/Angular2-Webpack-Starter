import { Component } from '@angular/core';
import {
    FORM_DIRECTIVES,
    FormBuilder,
    ControlGroup,
    Validators,
    Control
} from '@angular/common';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'user-profile',
    template: require('./user-profile.component.html'),
    directives: [FORM_DIRECTIVES]
})

export class UserProfileComponent {

    userProfileForm: ControlGroup;

    firstNameControl: Control;
    lastNameControl: Control;
    emailControl: Control;

    addressLine1Control: Control;
    addressLine2Control: Control;
    zipcodeControl: Control;

    descriptionControl: Control;

    title = "Create a New Account";

    constructor(
        private _router: Router,
        private _formBuilder: FormBuilder) {

        this.firstNameControl = new Control('', Validators.required);
        this.lastNameControl = new Control('');
        this.emailControl = new Control('', Validators.required);

        this.addressLine1Control = new Control('', Validators.required);
        this.addressLine2Control = new Control('', Validators.required);
        this.zipcodeControl = new Control('', Validators.required);

        this.descriptionControl = new Control('');

        this.userProfileForm = _formBuilder.group({
            firstName: this.firstNameControl,
            lastName: this.lastNameControl,
            email: this.emailControl,
            addressLine1: this.addressLine1Control,
            addressLine2: this.addressLine2Control,
            zipcode: this.zipcodeControl,
            description: this.descriptionControl
        });

    }

    onCreateUserProfile(profile: any) {
        console.log(profile);
        this._router.navigateByUrl('/new-account/confirmation');
    }
}