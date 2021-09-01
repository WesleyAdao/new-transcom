import { ConsultaRastreamentoService } from './../../services/consulta-rastreamento.service';
import { Component, OnInit } from '@angular/core';
import { Consulta } from '../../interfaces/consulta.interfaces';

@Component({
  selector: 'app-rastreamento',
  templateUrl: './rastreamento.component.html',
  styleUrls: ['./rastreamento.component.scss']
})
export class RastreamentoComponent implements OnInit {

  consultas!: Consulta;
  codigo!: number;

  constructor(

    private consultaRastreamentoService: ConsultaRastreamentoService,

  ) { }

  ngOnInit(): void {
  }

  consultar(form: any) {

    this.consultaRastreamentoService.consultar(this.codigo);
    console.log(form.value);
    console.log(this.codigo);

  }

}

