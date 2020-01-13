import {Component, OnInit, Output} from '@angular/core';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {
    this.body = document.getElementById("body");
  }
  navBar : any;
  sticky: any;
  body: any;

  public downloadBox = [];

  //------------------------------ icons
  file = faFileSignature;
  //------------------------------ end icons

  navBarEventReceiver(eventId) {
    switch (eventId) {
      case -1: {
        console.log("empty download box");
        this.downloadBox.splice(0, this.downloadBox.length);
        break;
      }
      default: {
        if (this.downloadBox[eventId] != null) {
          this.downloadBox.splice(eventId, 1);
          break;
        }
      }
    }
  }

  onScroll(event) {
    this.navBar = document.getElementById("nav2");
    this.sticky = this.navBar.offsetTop;
    if (event.srcElement.scrollTop >= this.sticky) {
      this.navBar.classList.add("sticky");
      this.body.classList.add("sticky-content");
    } else {
      this.navBar.classList.remove('sticky');
      this.body.classList.remove("sticky-content");
    }
  }

  addToDownloadBox(item: any) {
    this.downloadBox.push(item);
    console.log(this.downloadBox);
  }
}
