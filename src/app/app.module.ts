import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from './paginas/login/login.component';
import { ProjectsComponent} from './paginas/projects/projects.component';
import { StudiesComponent } from './paginas/studies/studies.component';
import { HomeComponent } from './paginas/home/home.component';
import { AboutComponent } from './paginas/about/about.component';
import { SkillsComponent } from './paginas/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SocialComponent } from './paginas/social/social.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectsComponent,
    StudiesComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    SocialComponent
    
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
