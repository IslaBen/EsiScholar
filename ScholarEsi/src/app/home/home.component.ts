import { Component, OnInit, Output} from '@angular/core';
import { faCalendar, faUserFriends, faFileSignature, faArrowRight, faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons';
import { ServService} from '../services/serv.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  constructor(private serv : ServService, private appComponent: AppComponent) {

  }
  ngOnInit(): void {
    this.navBar = document.getElementById("nav2");
    this.sticky = this.navBar.offsetTop;
    this.getAuthors();
    this.getArticles()
  }

  navBar : any;
  sticky: any;
  displayType = 'authors';
  authors = [];
  Articles = [];

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

  // --------
  getAuthors() {
    this.serv.getAuthors().subscribe(
      data => {
        this.authors = data
      },
      err => console.log(err.error)
    )
  }

  getArticles() {
    this.serv.getArticles().subscribe(
      data => {
        this.Articles = data
      },
      err => console.log(err.error)
    )
  }

  addToDownload(i: number) {
    this.appComponent.addToDownloadBox({"id" : this.Articles[i]["_id"], "title":this.Articles[i]["title"], "authors":JSON.stringify(this.Articles[i]["author"]), "state" : true});
  }
}

