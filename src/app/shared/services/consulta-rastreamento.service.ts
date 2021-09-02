import { Consulta } from './../interfaces/consulta.interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConsultaRastreamentoService {

  consultas!: Consulta;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
/*
  public getConsulta(): Observable<any> {

    return this.http.get('http://localhost:3000/consulta');

  }*/

  public getConsulta(): Observable<any> {

    return this.http.get('http://localhost:3000/consulta');

  }

  public consultar(codigo: number) {
    
    this.router.navigate(['/acompanhamento']);
    
  }

}
