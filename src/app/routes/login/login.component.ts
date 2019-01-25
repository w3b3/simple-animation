import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anim-login',
  template: `
    <h1>
      login works!
    </h1>
  `,
  styles: [
      `
      :host {
        flex: 1 1 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("assets/beach-landscape.jpg");
        background-size: cover;
        background-repeat: no-repeat;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
