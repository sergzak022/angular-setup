import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'my-app',
  styles: [
    `h1 {
      color:#545454;
      background:#02A8F4;
      padding:15px;
      box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
    }`
  ],

  template: `<h1>Hello from the {{componentName}}.</h1>`
})

export class AppComponent {
  componentName: 'AppComponent'
}

bootstrap(AppComponent);
