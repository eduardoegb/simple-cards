import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      content: 'I saw this awesome tree during my hike today',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
    },
    {
      title: 'Snowy Mountaint',
      content: 'I saw this awesome tree during my hike today',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
    },
    {
      title: 'Mountain Biking',
      content: 'I saw this awesome tree during my hike today',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking1222',
    },
  ];
}
