import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm , FormsModule} from '@angular/forms';
import { Studies } from 'src/app/models/studies';
import { StudiesService } from 'src/app/servicios/studies.service';

  




@Component ({
    selector: 'app-studies',
    exportAs: 'app-studies',
    templateUrl: './studies.component.html',
    styleUrls: ['./studies.component.css']
})

  export class StudiesComponent implements OnInit {
   
  public studiess:Studies[]=[];
  public editStudy:Studies | undefined;
  public deleteStudy:Studies | undefined;

    constructor(private studiesService: StudiesService) { }

  ngOnInit(): void {
    this.getStudiess();
  }

  public getStudiess():void{
    this.studiesService.getStudies().subscribe({
      next:(Response: Studies[])=>{
        this.studiess=Response;
      },
      error:(error: HttpErrorResponse) =>{
        alert(error.message);
     }
    })
  }

  public onOpenModal(mode: string, studies?: Studies): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEducationModal');
    } else if (mode === 'delete') {
      this.deleteStudy = studies;
      button.setAttribute('data-target', '#deleteEducationModal');
    } else if (mode === 'edit') {
      this.editStudy = studies;
      button.setAttribute('data-target', '#editEducationModal');
    }

    container?.appendChild(button);
    button.click();
  }

public onAddEducation(addForm: NgForm): void {
  document.getElementById('add-education-form')?.click();
  this.studiesService.addStudies(addForm.value).subscribe({
    next: (response: Studies) => {
      console.log(response);
      this.getStudiess();
      addForm.reset();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    },
  });
}

public onUpdateStudy(studies: Studies){
  this.editStudy=studies;
  document.getElementById('add-education-form')?.click();
  this.studiesService.updateStudies(studies).subscribe({
    next: (Response:Studies) =>{
      console.log(Response);
      this.getStudiess();
      
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }

  })
}

public onDeleteStudy(ideEdu:number):void{
this.studiesService.deleteStudies(ideEdu).subscribe({
    next: (response:void) =>{
      console.log(Response);
      this.getStudiess();
      
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }

  })
}

}