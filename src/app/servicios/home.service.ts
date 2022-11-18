import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUser():Observable<usuarios>{
    return this.http.get<usuarios>(`${this.apiServerUrl}/usuarios/id/1`);
  }

  public updateUsuario(usuario: usuarios):Observable<usuarios>{
    return this.http.put<usuarios>(`${this.apiServerUrl}/usuarios/update`, usuario);
  }
}
