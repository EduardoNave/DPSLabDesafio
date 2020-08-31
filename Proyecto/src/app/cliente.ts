export class Cliente {
  constructor(
    public dui: string,
    public nombres: string,
    public apellidos: string,
    public nombreMascota: string,
    public tratamiento: string,
    public medicamentos: string,
    public costo: number,
    public visitas: number
  ) {}
}
