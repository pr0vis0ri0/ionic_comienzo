import { Injectable, OnInit } from '@angular/core';
import { Propiedad, DetallePropiedad, RegistroPropiedad,AdmPropiedadBase } from '../interfaces/interface';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

const httpOptions = { headers : new HttpHeaders({'Content-Type' : 'application/json'})}

@Injectable({
  providedIn: 'root'
})

export class PerfilService implements OnInit {

  constructor(private http : HttpClient) {}

  ngOnInit() {
    this.dtlPerfilUser(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyOTA2MjU4LCJpYXQiOjE3MDAzMTQyNTgsImp0aSI6ImRhN2Q1ZjFiMzc5NDQ5YTc5ZjkxNDBjMTg2YzgyNjFhIiwidXNlcl9pZCI6MSwiaWRfcGVyZmlsIjoxLCJpZF91c3VhcmlvIjoxfQ.MegftCl3ecl0xMqVsxzSMDCNNNz1t88zcBnc-c_vPXQ');
  }

  private handleError<T> (operation = 'operation', result? : T) {
      return (error : any) : Observable <T> => {
        console.error("ERR: " , error)
        return of(result as T)
      }
  }

  dtlPerfilUser(id_usuario: number, auth_token: string){
    const httpOptionsToken = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${auth_token}`} )}
    const url = 'http://localhost:9000/perfil_usuario/'
    return this.http.post<any>(url, {id_usuario : id_usuario}, httpOptionsToken)
    .pipe(
      tap((dtl_user: any) => console.log(dtl_user)),
      catchError(this.handleError<any>('ERROR: DETALLE PERFIL USUARIO'))
    )
  }

}
