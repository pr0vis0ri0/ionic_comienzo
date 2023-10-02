import { Injectable } from '@angular/core';
import { Producto } from 'src/model/producto';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

const api_prod = 'http://localhost:3000/productos'
const httpOptions = { headers : new HttpHeaders({'Content-Type' : 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http : HttpClient) { }

  private handleError<T> (operation = 'operation', result? : T) {
    return (error : any) : Observable <T> => {
      console.error("Manejo de error Prueba " , error)
      return of(result as T)
    }
  }

  addProduct(producto: Producto): Observable<Producto> {
    console.log("RESTful API enviando POST AddProducto : ",producto);
    return this.http.post<Producto>(api_prod, producto, httpOptions)
      .pipe(
        tap((producto: Producto) => console.log('Producto añadido w/:',producto)),
        catchError(this.handleError<Producto>('¿?'))
      );
  }
}
