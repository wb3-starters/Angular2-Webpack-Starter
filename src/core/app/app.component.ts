import { Component } from '@angular/core';
import { LandingComponent } from '../../component';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styleUrls: [require('./app.component.css')],
  directives: [ LandingComponent ]
})
export class AppComponent {
  constructor(){}
 }