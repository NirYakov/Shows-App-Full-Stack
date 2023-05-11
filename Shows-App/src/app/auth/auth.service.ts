import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthData } from './auth-data.model';


// const BACKEND_URL = environment.apiUrl + "/user/";
const BACKEND_URL = environment.apiUrl + "/user/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  signup(email: string, password: string) {
    console.log(email, password);
    console.log(BACKEND_URL + "signup");


    return this.http.post(BACKEND_URL + "signup", {
      email,
      password
    });

  }

  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    console.log(BACKEND_URL + "login");
    this.http
      .post(
        BACKEND_URL + "login",
        authData
      )
      .subscribe({
        next: result => { console.log(result); },
        error: error => { console.log(error); },
      });
  }


}
