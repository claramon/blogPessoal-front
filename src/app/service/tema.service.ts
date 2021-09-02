import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://blogdaclara.herokuapp.com/tema', this.token) //pega o tema que declarei acima
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>('https://blogdaclara.herokuapp.com/tema', tema, this.token) //registra o tema nesse endpoint
  }
}