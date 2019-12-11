import {Component, OnInit, Output} from '@angular/core';
import {faCalendar, faUserFriends, faFileSignature, faArrowRight, faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor() {

  }
  ngOnInit(): void {
    this.navBar = document.getElementById("nav2");
    this.body = document.getElementById("body");
    this.sticky = this.navBar.offsetTop;
  }
  navBar : any;
  sticky: any;
  body: any;

  downloadBox = [{"id" : "id1", "state" : true}, {"id" : "id2", "state" : true}];
  displayType = 'articles';
  authors = ['auth1', 'auth1', 'auth1', 'auth1', 'auth1', 'auth1', 'auth1', 'auth1', ]; // TODO should be updated in ngOnInit()
  Articles = ['Article1', 'Article1', 'Article1', 'Article1', 'Article1', 'Article1', 'Article1', 'Article1', ]; // TODO should be updated in ngOnInit()

  //------------------------------ icons
  user = faUserFriends;
  file = faFileSignature;
  calendar = faCalendar;
  rightArrow = faArrowRight;
  CartArrowDown = faArrowAltCircleDown;
  //------------------------------ end icons
  public searchValue = "";
  public contexts = ["name", "degree", "group"];

  public autoCompleteDataArray = [ // TODO should be updated in ngOnInit()
    ["name1", "name2", "name3", "name4", "name5", "name6", "name7"],
    ["degree1", "degree2", "degree3", "degree4", ],
    ["group1", "group2", "group3", "group4", "group5", ]
  ];
  public autoCompleteData =  this.autoCompleteDataArray[0];

  contextClick(value) { // update autocomplete values according to select option
    this.autoCompleteData = this.autoCompleteDataArray[this.contexts.indexOf(value)];
  }
  searchInputChange(value) { // bind local value with child component value
    this.searchValue = value;
  }

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
    if (event.srcElement.scrollTop >= this.sticky) {
      this.navBar.classList.add("sticky");
      this.body.classList.add("sticky-content");
    } else {
      this.navBar.classList.remove('sticky');
      this.body.classList.remove("sticky-content");
    }
  }
  filterClicked(id) {
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
