import { Component } from '@angular/core';


@Component({
  selector: 'new-account-confirmation',
  template: require('./confirmation.component.html'),
})

export class NewAccountConfirmationComponent {   
  constructor() {}
   
  title = "Created Successfully";


}