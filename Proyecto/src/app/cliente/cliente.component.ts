import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  nacionalidad = ['', 'El Salvador', 'México', 'Rusia', 'Mongolia'];
  Cliente = new Cliente(
    '1',
    'Andres',
    'Chapeton',
    'Mascota1',
    'Tratamiento1',
    'Medicamento1',
    100,
    2
  );
  facturar = false;
  visitas = 0;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.visitas++;
    this.facturar = true;
  }
}
