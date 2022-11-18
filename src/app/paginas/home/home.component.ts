import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { usuarios } from 'src/app/models/usuarios';
import { HomeService } from 'src/app/servicios/home.service';
import { NgForm , FormsModule} from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
    public usuarios : usuarios | undefined;
    public editUsuario : usuarios | undefined;

    constructor(private homeService: HomeService ) { }

    
  ngOnInit(): void {
   this.getUser();
  }

 public getUser():void {
     this.homeService.getUser().subscribe({
      next: (Response: usuarios) => {
        this.usuarios = Response;
      },
      error:(error:HttpErrorResponse) => {
      alert(error.message);
      }
      
     })
  }

}
