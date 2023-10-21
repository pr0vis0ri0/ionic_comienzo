import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

const ruta_login : string = 'http://localhost:9000/registro/'
const httpOptions = { headers : new HttpHeaders({'Content-Type' : 'application/json'})}

@Injectable({
    providedIn: 'root'
  })

export class RegistroService {
    constructor(private http : HttpClient) {}

    private handleError<T> (operation = 'operation', result? : T) {
        return (error : any) : Observable <T> => {
          console.error("ERR: " , error)
          return of(result as T)
        }
    }

    registrarUsuario(user: User): Observable<User> {
        console.log("RESTful API enviando POST Registro : ",user);
        return this.http.post<User>(ruta_login, user, httpOptions)
          .pipe(
            tap((user: User) => console.log('Usuario registrado :',user)),
            catchError(this.handleError<User>('ERROR: Registro'))
          );
    }
}