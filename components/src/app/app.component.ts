import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello, world</h1>
  
  <button [disabled]="buttonStatus != 'enabled'">My Button</button>
  <img src="{{angularLogo}}">
  <img [src]="angularLogo">
  <img bind-src="angularLogo">  
    
    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonStatus = 'enabled';
  angularLogo = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
}
