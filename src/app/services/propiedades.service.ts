import { Injectable, OnInit } from '@angular/core';
import { Propiedad, DetallePropiedad, RegistroPropiedad } from '../interfaces/interface';
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
          // tap((region: any) => console.log(region)),
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

    registrarPropiedadUsuario(propiedad : RegistroPropiedad, auth_token : string) {
      const httpOptionsToken = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${auth_token}`} )}
      const url = 'http://localhost:9000/registro_propiedad/'
      return this.http.post<RegistroPropiedad>(url, propiedad, httpOptionsToken)
        .pipe(
          tap((propiedad: RegistroPropiedad) => console.log(propiedad)),
          catchError(this.handleError<RegistroPropiedad>('ERROR: Registro Propiedad'))
        )
    }

    devolverPropiedadesPendientesUsuario(id_usuario: number, auth_token: string){
      const httpOptionsToken = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${auth_token}`} )}
      const url = 'http://localhost:9000/propiedades_pendientes/'
      return this.http.post<Propiedad[]>(url, {'id_usuario': id_usuario}, httpOptionsToken)
      .pipe(
        // tap((propiedad: Propiedad[]) => console.log(propiedad)),
        catchError(this.handleError<Propiedad[]>('ERROR: Registro Propiedad'))
      )
    }

    devolverDetallePropiedadesPendientesUsuario(id_usuario: number, id_propiedad: number, auth_token: string){
      const httpOptionsToken = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${auth_token}`} )}
      const url = 'http://localhost:9000/detalle_propiedad_pendiente/'
      return this.http.post<DetallePropiedad>(url, {'id_usuario': id_usuario, 'id_propiedad': id_propiedad}, httpOptionsToken)
      .pipe(
        // tap((detalle_propiedad: DetallePropiedad) => console.log(detalle_propiedad)),
        catchError(this.handleError<DetallePropiedad>('ERROR: Registro Propiedad'))
      )
    }
    // Listado de propiedades validadas del usuario
    listaBPropUsuario(id: number, auth_token: string){
      const httpOptionsToken = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${auth_token}`} )}
      const url = 'http://localhost:9000/propiedades_validadas/'
      return this.http.post<Propiedad[]>(url, {'id_usuario': id}, httpOptionsToken)
      .pipe(
        // tap((propiedad: Propiedad[]) => console.log(propiedad)),
        catchError(this.handleError<Propiedad[]>('ERROR: Registro Propiedad'))
      )
    }

    detailBPropUsuario(id: number, prop: number, auth_token: string){
      const httpOptionsToken = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${auth_token}`} )}
      const url = 'http://localhost:9000/detalle_propiedad_validada/'
      return this.http.post<DetallePropiedad>(url, {'id_usuario': id, 'id_propiedad': prop} , httpOptionsToken)
      .pipe(
        // tap((propiedad: DetallePropiedad) => console.log(propiedad)),
        catchError(this.handleError<DetallePropiedad>('ERROR: Registro Propiedad'))
      )
    }     
}