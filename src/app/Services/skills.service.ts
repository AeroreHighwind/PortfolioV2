import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  getData() : Observable<any>{
    console.log("Skills data loaded");
    return this.http.get('./assets/scripts/skillsData.json');
  }
}
