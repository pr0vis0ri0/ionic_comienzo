import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

const ruta_login : string = 'http://localhost:9000/login/'
const httpOptions = { headers : new HttpHeaders({'Content-Type' : 'application/json'})}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) {}

  private handleError<T> (operation = 'operation', result? : T) {
    return (error : any) : Observable <T> => {
      console.error("ERR: " , error)
      return of(result as T)
    }
  }

  iniciarSesion(user: User): Observable<User> {
    console.log("RESTful API enviando POST Login : ",user);
    return this.http.post<User>(ruta_login, user, httpOptions)
      .pipe(
        tap((user: User) => console.log('Usuario logeado :',user)),
        catchError(this.handleError<User>('ERROR: Login'))
      );
  }
}
