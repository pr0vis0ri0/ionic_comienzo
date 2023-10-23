import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http'

const create : string = 'http://localhost:9000/transbank/create/'
const headers = new HttpHeaders().set('Content-Type','application/json')
const httpOptions = { headers : new HttpHeaders({'Content-Type' : 'application/json'})}
const params = new HttpParams()
            .set('session_id','S-25671')
            .set('buy_order','O-51371')
            .set('amount','10000')
            .set('return_url','http://localhost:8100/propiedades')


@Injectable({
    providedIn: 'root'
  })

export class TransbankService {
    constructor(private http : HttpClient) {}

    private handleError<T> (operation = 'operation', result? : T) {
        return (error : any) : Observable <T> => {
          console.error("ERR: " , error)
          return of(result as T)
        }
    }
    
    crearTransaccion() : Observable<any> {
        console.log("RESTful API enviando POST Transaccion");
        const body = {
            session_id: 'S-25671',
            buy_order: 'O-51371',
            amount: '10000',
            return_url: 'http://localhost:8100/propiedades'
        };
        return this.http.post<any>(create, body, httpOptions)
            .pipe(
                map((response : any) => {
                    const parsedResponse = JSON.parse(response);
                    const cleanedURL = parsedResponse.url.replace(',','');
                    return {
                        token: parsedResponse.token,
                        url: cleanedURL
                    }
                }),
                tap((transaccion: any) => console.log('Transaccion :',transaccion)),
                catchError(this.handleError<any>('ERROR: Transaccion'))
            );
    }
}