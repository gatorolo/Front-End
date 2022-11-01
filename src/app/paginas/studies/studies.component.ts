import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Studies } from 'src/app/models/studies';
import { StudiesService } from 'src/app/servicios/studies.service';

@Component ({
    selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})

export class StudiesComponent implements OnInit {

  public studiess:Studies[]=[];

    constructor(private studiesService:StudiesService) { }

  ngOnInit(): void {
    this.getStudiess();
  }

  public getStudiess():void{
    this.studiesService.getStudies().subscribe({
      next:(Response: Studies[])=>{
        this.studiess=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
     }
    })
  }
}