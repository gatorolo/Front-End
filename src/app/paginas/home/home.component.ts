import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { HomeService } from 'src/app/servicios/home.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
    public usuario : Usuario | undefined;
    public editUsuario : Usuario | undefined;

    constructor(private homeService : HomeService ) { }

    
  ngOnInit(): void {
    this.getUser();
  }

  public getUser():void {
     this.homeService.getUser().subscribe({
      next: (Response: Usuario) => {
        this.usuario = Response;
      },
      error:(error:HttpErrorResponse) => {
      alert(error.message);
      }
      
     })
  }

}
