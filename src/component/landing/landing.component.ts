import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
  selector: 'landing',
  template: require('./landing.component.html'),
  directives: [ ROUTER_DIRECTIVES ]
})
export class LandingComponent { 
  constructor() { }
}