import { Component, OnInit, NgZone } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private titleService: Title,
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService

  ) { }
    public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessagesService.show('You are logged out', { cssClass: 'successLogout, center-align' });
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
