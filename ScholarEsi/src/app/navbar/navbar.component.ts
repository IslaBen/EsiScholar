import { Component, OnInit } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  icon = faArrowDown;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    const sidenav = document.getElementById("sidenav");
    const icon2 = document.getElementById('icon2');
    const badge = document.getElementById('badge');
    const iconDHandler = document.getElementById('download-icon-handler');
    const position = sidenav.style['right'];
    console.log(position);
    if (position == '0px') {
      sidenav.style['right'] = "-350px";
      icon2.style['animation-name'] = 'rotation1';
      badge.style.visibility = 'visible';
      iconDHandler.style['padding'] = '4px 6px';
    } else {
      sidenav.style['right'] = '0';
      icon2.style['animation-name'] = 'rotation2';
      badge.style.visibility = 'hidden';
      iconDHandler.style['padding'] = '2px 6px';
    }
  }
}
