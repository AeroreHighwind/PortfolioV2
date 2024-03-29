import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    HomeComponent,
    EducationComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 60,
      titleFontSize:"15",
      titleColor:"#ff004c",
      outerStrokeWidth: 7,
      innerStrokeWidth: 3,
      outerStrokeColor: "#00ffa2",
      innerStrokeColor: "#7bff00",
      animationDuration: 950,
      showUnits:false,
      showSubtitle:false,
      showImage:true,
      responsive:true,
      imageHeight:50,
      imageWidth:50,
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
