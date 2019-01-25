import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anim-home',
  template: `
    <h1>
      home works!
    </h1>
  `,
  styles: [
      `
      :host {
        flex: 1 1 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("assets/home-cover.jpg");
        background-size: cover;
        background-repeat: no-repeat;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}