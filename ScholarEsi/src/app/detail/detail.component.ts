import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {ServService} from '../services/serv.service';
import {ActivatedRoute} from '@angular/router';
import {faArrowAltCircleDown, faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private serv : ServService,
    private appComponent : AppComponent,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.teacherId =parseInt(this.route.snapshot.paramMap.get('id'));
    this.getArticles(parseInt(this.route.snapshot.paramMap.get('id')))
  }
  teacherId : any;
  Articles = ['mlkj', 'mlkj', 'mlkj', 'mlkj', 'mlkj', 'mlkj', 'mlkj'];

  rightArrow = faArrowRight;
  CartArrowDown = faArrowAltCircleDown;
  // chart params ---------------------------------------------------
  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: [0,1,0,3,1,2], label: 'publications' }
  ];
  chartLabels = [2014, 2015, 2016, 2017, 2018, 2019];

  onChartClick(event) {
    console.log(event);
  }
  // End chart params -----------------------------------------------

  addToDownload(i: number) {
    this.appComponent.addToDownloadBox({"id" : this.Articles[i]["_id"], "title":this.Articles[i]["title"], "authors":JSON.stringify(this.Articles[i]["author"]), "state" : true});
  }
  getArticles(id) {
    this.serv.getArticlesByTeacher(id).subscribe(
      data => {
        this.Articles = data
      },
      err => console.log(err.error)
    )
  }
}
