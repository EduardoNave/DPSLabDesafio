import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  Cliente = new Cliente('', '', '', '', '', '', 0, 0);
  registrar = false;
  visitas = 0;
  constructor() {}

  ngOnInit(): void {}

  onSubmit( ) {
    this.visitas++;
    this.registrar = true;
  }
}
