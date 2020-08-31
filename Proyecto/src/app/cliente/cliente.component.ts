import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  Cliente = new Cliente('', '', '', '', '', '', 0, 0, 0);
  registrar = false;
  visitas = 0;
  costo = 0;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.visitas++;
    this.registrar = true;

    // if (Cliente.visitas == 2) {
    //   Cliente.costo = this.costo * 0.95;
    // } else if (this.visitas == 4) {
    //   this.costo = this.costo * 0.8;
    // // }
  }
}
