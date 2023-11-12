import { Injectable, OnInit } from '@angular/core';
import { Propiedad, DetallePropiedad } from '../interfaces/interface';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

const ruta_lista_propiedades : string = 'http://localhost:9000/lista_propiedades/'
const ruta_detalle_propiedad : string = 'http://localhost:9000/detalle_propiedad'
const httpOptions = { headers : new HttpHeaders({'Content-Type' : 'application/json'})}

@Injectable({
    providedIn: 'root'
  })

export class PropiedadesService implements OnInit {

    constructor(private http : HttpClient) {}

    ngOnInit() {
      this.devolerRegiones().subscribe((res) => {
        console.log("Regiones : ", res)
      })
    }

    private handleError<T> (operation = 'operation', result? : T) {
        return (error : any) : Observable <T> => {
          console.error("ERR: " , error)
          return of(result as T)
        }
    }

    devolverListaPropiedades(): Observable<Propiedad[]> {
        console.log("RESTful API enviando GET Lista Propiedades");
        return this.http.get<Propiedad[]>(ruta_lista_propiedades)
          .pipe(
            tap((propiedad: Propiedad[]) => console.log(propiedad)),
            catchError(this.handleError<Propiedad[]>('ERROR: Lista Propiedades'))
          );
    }

    devolverDetallePropiedad(id : number): Observable<DetallePropiedad> {
        const url = `${ruta_detalle_propiedad}/${id}`;
        return this.http.get<DetallePropiedad>(url)
          .pipe(
            tap((propiedad: DetallePropiedad) => console.log(propiedad)),
            catchError(this.handleError<DetallePropiedad>('ERROR: Detalle Propiedad'))
          );
    }

    devolerRegiones(): Observable<any> {
      const ruta_regiones = 'http://localhost:9000/region/'
      return this.http.get<any>(ruta_regiones)
        .pipe(
          tap((region: any) => console.log(region)),
          catchError(this.handleError<any>('ERROR: Regiones'))
        );
    }

    devolverComunas(id_region : number) {
      const ruta_comunas = 'http://localhost:9000/comuna/filtroRegiones'
      const url = `${ruta_comunas}/${id_region}/`;
      const body = {
        id_region : id_region
      }
      return this.http.post<any>(url, body, httpOptions)
        .pipe(
          tap((comuna: any) => console.log(comuna)),
          catchError(this.handleError<any>('ERROR: Comunas'))
        );
    }

    devolverPropiedadesFiltradas(id_comuna: number, valor_desde: number, valor_hasta: number, es_arriendo: boolean, es_venta: boolean){
      const url = 'http://localhost:9000/propiedades_filtradas/'
      const body = {
        id_comuna : id_comuna,
        valor_desde : valor_desde,
        valor_hasta : valor_hasta,
        es_arriendo : es_arriendo,
        es_venta : es_venta
      }
      return this.http.post<Propiedad>(url, body, httpOptions)
        .pipe(
          tap((propiedad: Propiedad) => console.log(propiedad)),
          catchError(this.handleError<Propiedad>('ERROR: Propiedades Filtradas'))
        );
    }
}