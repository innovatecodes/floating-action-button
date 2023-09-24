import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-main></app-main> <router-outlet></router-outlet>`,
  styles: [``],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
