import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faArrowDown, faTimesCircle, faDownload, faShareSquare } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    console.log(this.downloadBox)
  }

  @Input() downloadBox : {}[];
  @Output() navBarEventEmitter = new EventEmitter();

  arrowIcon = faArrowDown;
  timesCircleIcon = faTimesCircle;
  downloadIcon = faDownload;
  shareSquareIcon = faShareSquare;

  navBarEventListner (eventId) {
    this.navBarEventEmitter.emit(eventId);
  }
  toggle() {
    let parentWidth = document.getElementById("sidenav").parentElement.parentElement.offsetWidth;
    const sidenav = document.getElementById("sidenav");
    const icon2 = document.getElementById('icon2');
    const badge = document.getElementById('badge');
    const iconDHandler = document.getElementById('download-icon-handler');
    const position = sidenav.style['right'];
    if (position == '0px') {
      sidenav.style['right'] = -parentWidth * 0.3+"px";
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
