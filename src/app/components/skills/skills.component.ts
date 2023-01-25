import { Component, OnInit } from '@angular/core';
import{SkillsService} from 'src/app/Services/skills.service';
import { Habilidad } from 'src/app/model/habilidad';





@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidades: Habilidad[] = [];

  constructor( private skillData:SkillsService) { }

  ngOnInit(): void {
    this.skillData.getData().subscribe(data => {    
    for(const prop in data){
      this.habilidades.push(data[prop])
    } 
    console.log(this.habilidades);
    console.log(this.habilidades[3].name);
    console.log(this.habilidades[3].percentage);
    console.log(this.habilidades[3].imageURL);
    console.log(this.habilidades[3].isHard);
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
