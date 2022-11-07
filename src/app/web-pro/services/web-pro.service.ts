import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Asistencia, Info, Secciones } from '../interfaces/interfaces.component';

@Injectable({
  providedIn: 'root'
})
export class WebProService {

  getAll(): Observable<Secciones> {
    return this.http.get<Secciones>(`assets/db-json/db.json`)
  }

  constructor(private http: HttpClient) {
  }
}
