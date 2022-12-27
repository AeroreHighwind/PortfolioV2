import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  getData() : Observable<any>{
    console.log("Skills data loaded");
    return this.http.get('src\assets\scripts\skillsData.json');
  }
}
