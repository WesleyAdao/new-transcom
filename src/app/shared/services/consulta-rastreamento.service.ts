import { Consulta } from './../interfaces/consulta.interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Consultas } from '../models/consultas.model';

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

  public getConsulta(): Observable<Array<Consultas>> {
    return this.http.get<Array<Consultas>>('http://localhost:3000/consulta');
  }

  public consultar(codigo: number) {
    this.getConsulta().subscribe(resp => {
      const pbjet = resp.find(v => v.codigo === codigo)
    })
    this.router.navigate(['/acompanhamento']);
  }

}
