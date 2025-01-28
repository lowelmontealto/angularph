import { Component, inject, OnInit,AfterViewInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { BackgroundComponent } from './components/background/background.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScrollWatcherService } from './services/scroll-watcher.service';
import { TeamComponent } from './components/team/team.component';
import { MeetupComponent } from './components/meetup/meetup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    BackgroundComponent,
    LogoComponent,
    NavbarComponent,
    TeamComponent,
    MeetupComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  activeFragment: string | null = '';
  scrollWatcher = inject(ScrollWatcherService);

  ngAfterViewInit(){
    this.scrollWatcher.init();
  }

}
