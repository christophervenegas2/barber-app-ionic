import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navigate', url: '/folder/navigate', icon: 'navigate' },
    { title: 'Profile', url: '/folder/profile', icon: 'star' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' }
  ];
  public labels = ['navigate', 'star', 'heart'];
  constructor() {}

  goToScreen() {
    console.log("Aqui estoy xddd");

  }
}
