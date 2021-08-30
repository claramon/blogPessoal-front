import { User } from './../model/User'
import { UserLogin } from './../model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(UserLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://blogdaclara.herokuapp.com/usuarios/logar',UserLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://blogdaclara.herokuapp.com/usuarios/cadastrar',user)
  }

}
