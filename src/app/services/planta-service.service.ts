import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planta } from '../models/planta';

@Injectable({
  providedIn: 'root'
})
export class PlantaServiceService {
  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }
}
