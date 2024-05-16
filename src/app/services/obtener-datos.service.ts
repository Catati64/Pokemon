import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ObtenerDatosService {

  constructor(private http: HttpClient) { };

  getPokemon(url: string): Observable<object> {
    return this.http.get(url, HttpOptions);
  }
}
