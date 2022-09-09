import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasroutingModule } from './paginasrouting.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { StudiesComponent } from './studies/studies.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    StudiesComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    PaginasroutingModule
  ]
})
export class PaginasModule { }
