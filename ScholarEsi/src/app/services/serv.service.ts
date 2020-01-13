import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http: HttpClient) { }

  getArticles() : Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/scholarESI/articles")
  }

  getArticlesByTeacher(teacher_id) : Observable<any[]>{
    // return this.http.get<any[]>("http://localhost:3000/scholarESI/articles-by-teacher/"+teacher_id)
    return this.http.get<any[]>("http://localhost:3000/scholarESI/articles")
  }
  getAuthors() : Observable<any[]>{
    return this.http.get<any[]>("http://127.0.0.1:3000/scholarESI/teachers")
  }

}
