import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { faCalendar, faUserFriends, faFileSignature } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  navBar : any;
  sticky: any;
  body: any;
  ngOnInit(): void {
    this.navBar = document.getElementById("nav2");
    this.body = document.getElementById("body");
    this.sticky = this.navBar.offsetTop;
  }
  constructor() {
  }
  user = faUserFriends;
  file = faFileSignature;
  calendar = faCalendar;
  public searchContext = "degree";
  public searchText = "";
  public contexts = ["name", "degree", "ccc"];
  onScroll(event) {
    console.log(this.sticky, event.srcElement.scrollTop);
    if (event.srcElement.scrollTop >= this.sticky) {
      this.navBar.classList.add("sticky");
      this.body.classList.add("sticky-content");
    } else {
      this.navBar.classList.remove('sticky');
      this.body.classList.remove("sticky-content");
    }
  }

  f1Click(id) {
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');
    const form4 = document.getElementById('form4');
    form1.style['visibility'] = 'hidden';
    form2.style['visibility'] = 'hidden';
    form3.style['visibility'] = 'hidden';
    switch (id) {
      case 1:
        form1.style['visibility'] = 'visible';
        break;
      case 2:
        form2.style['visibility'] = 'visible';
        break;
      case 3:
        form3.style['visibility'] = 'visible';
        break;
    }
  }

}
