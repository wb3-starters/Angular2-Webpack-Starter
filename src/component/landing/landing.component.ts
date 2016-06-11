import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NewAccountComponent } from '../new-account';
import { NewAccountConfirmationComponent } from '../new-account/confirmation';
import { LandingContentComponent,  } from './content';

@Component({
  selector: 'landing',
  template: require('./landing.component.html'),
  directives: [ ROUTER_DIRECTIVES ]
})

@RouteConfig([
  {path: '/', name: 'LandingContent', component: LandingContentComponent, useAsDefault: true },
  {path: '/new-account', name: 'NewAccount', component: NewAccountComponent },
  {path: '/new-account/confirmation', name: 'NewAccountConfirmation', component: NewAccountConfirmationComponent}
])

export class LandingComponent { 

}