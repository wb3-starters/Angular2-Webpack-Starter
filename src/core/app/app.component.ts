import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { LandingComponent, NewAccountComponent } from '../../component';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styleUrls: [require('./app.component.css')],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/...', name: 'Landing', component: LandingComponent, useAsDefault: true}
])
export class AppComponent {
  constructor(){}
 }