import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  leads = [
    {name: 'Seiji', imgUrl:'/assets/images/profile/seij.jpg'},
    {name: 'Jez', imgUrl:'/assets/images/profile/jez.jpg'},
    {name: 'Roselle', imgUrl:'/assets/images/profile/roselle.png'},
    {name: 'Matthew', imgUrl:'/assets/images/profile/matt.jpg'},
    {name: 'Jp', imgUrl:'/assets/images/profile/jp.jpg'},
    {name: 'Mark', imgUrl:'/assets/images/profile/mark.jpg'},
    {name: 'Ryan', imgUrl:'/assets/images/profile/ryan.jpg'},
    {name: 'Matt', imgUrl:'/assets/images/profile/matt2.jpg'},
    {name: 'Thonie', imgUrl:'/assets/images/profile/thonie.jpg'},
    {name: 'Dani', imgUrl:'/assets/images/profile/dani.png'},
    {name: 'Phillip', imgUrl:'/assets/images/profile/philip.jpg'},
  ]
}
