import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    h1{
      text-decoration: underline;
      color: #0000cc;
    } 
  `]
})
export class AppComponent {
  title = 'app';
}
