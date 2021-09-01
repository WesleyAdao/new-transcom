import { Component, OnInit } from '@angular/core';
import { ConsultaRastreamentoService } from './../../services/consulta-rastreamento.service';
import { Consulta } from '../../interfaces/consulta.interfaces';

@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.scss']
})
export class AcompanhamentoComponent implements OnInit {

  consultas!: Array<Consulta>;

  constructor(
    private consultaRastreamentoService: ConsultaRastreamentoService
  ) { }

  ngOnInit(): void {
    this.getter();
  }

  getter() {

    this.consultaRastreamentoService.getConsulta()
    .subscribe(data => {
      this.consultas = data;
      //debugger;
      console.log("Teste1", data);
    }, error => {
       console.log("Teste2", error);
    });

  }



}
