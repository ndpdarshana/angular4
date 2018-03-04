import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 [class]="titleClass"> Hello! </h1>
    <h1 [class.red-title]="cssClass"> Hello! </h1>
    <h1 [ngClass]="titleClasses"> Hello! </h1>
  `,
  styles: [`
    h1{
      text-decoration: underline;
    }

    .red-title{
      color:red;
    }
    
    .large-title{
      font-size: 60px;
    }
  `]
})
export class AppComponent {
  title = 'app';
  titleClass = 'red-title';
  cssClass = false;

  titleClasses = {
    'red-title':false,
    'large-title':true
  };
}
