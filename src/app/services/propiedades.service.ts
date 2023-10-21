import { Injectable } from '@angular/core';
import { Propiedades } from '../interfaces/propiedades';
import { DetallePropiedad } from '../interfaces/detalle_propiedad';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

const ruta_lista_propiedades : string = 'http://localhost:9000/lista_propiedades/'
const ruta_detalle_propiedad : string = 'http://localhost:9000/detalle_propiedad'
const httpOptions = { headers : new HttpHeaders({'Content-Type' : 'application/json'})}

@Injectable({
    providedIn: 'root'
  })

export class PropiedadesService {
    constructor(private http : HttpClient) {}

    private handleError<T> (operation = 'operation', result? : T) {
        return (error : any) : Observable <T> => {
          console.error("ERR: " , error)
          return of(result as T)
        }
    }

    devolverListaPropiedades(): Observable<Propiedades[]> {
        console.log("RESTful API enviando GET Lista Propiedades");
        return this.http.get<Propiedades[]>(ruta_lista_propiedades)
          .pipe(
            tap((propiedad: Propiedades[]) => console.log('Lista Propiedades :',propiedad)),
            catchError(this.handleError<Propiedades[]>('ERROR: Lista Propiedades'))
          );
    }

    devolverDetallePropiedad(id : number): Observable<DetallePropiedad> {
        console.log("RESTful API enviando GET Detalle Propiedad");
        const url = `${ruta_detalle_propiedad}/${id}`;
        return this.http.get<DetallePropiedad>(url)
          .pipe(
            tap((propiedad: DetallePropiedad) => console.log('Detalle Propiedad :',propiedad)),
            catchError(this.handleError<DetallePropiedad>('ERROR: Detalle Propiedad'))
          );
    }
}