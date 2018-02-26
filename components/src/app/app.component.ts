import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p>How do you do?</p>
  <h1>Hello guys</h1>
  {{myObj.name}}
  <ul>
    <li *ngFor = "let arr of myarr">{{arr}}</li>
  </ul>
  <p *ngIf="!myarr">Exists</p>
  <p *ngIf="myarr[0] == 'am'; then tmpl1 else tmpl2"> </p>

  <ng-template #tmpl1>Temp 1 true</ng-template>
  <ng-template #tmpl2>No, I don't exists</ng-template>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myObj = {
    name : 'Prabhath',
    age: 28
  };

  myarr = ['am', 'is', 'are'];
}
