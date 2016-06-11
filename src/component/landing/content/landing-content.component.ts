import { Component } from '@angular/core';

@Component({
  selector: 'landing-content',
  template: require('./landing-content.component.html'),
})
export class LandingContentComponent { 
  title = "Welcome";
  description = "This is the Angular2Webpack Starter Project.";
}