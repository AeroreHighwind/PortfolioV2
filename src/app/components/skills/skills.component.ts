import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{SkillsService} from 'src/app/Services/skills.service';




@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor( private skillData:SkillsService) { }

  ngOnInit(): void {
    this.skillData.getData().subscribe(data => {
    console.log(data);      
    });
  }


   myFunction():void {
    var x = document.getElementById("info");
    console.log(x);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
}
