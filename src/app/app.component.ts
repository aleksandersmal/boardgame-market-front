import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'board-borrow-app';
}
if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
  console.log('🎉 Dark mode is supported');
}