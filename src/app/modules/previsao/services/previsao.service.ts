import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevisaoService {

  private apiKey = "6f1640afb77e4ba17ac133d6baf22646";  


constructor(private http: HttpClient) { }

    getPrevsiaoDados(nomeCidade: string): Observable<any>{
      return this.http.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&units=metric&mode=json&appid=${this.apiKey}`,{}
      );
    }

}
