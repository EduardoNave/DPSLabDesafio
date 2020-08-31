export class Cliente {
  constructor(
    public dui: string,
    public nombres: string,
    public apellidos: string,
    public nombreMascota: string,
    public tratamiento: string,
    public medicamentos: string,
    public costo: number,
    public visitas: number,
    public descuento: number
  ) {}

  descuentos = () => {
    if (this.visitas == 2) {
      this.descuento = this.costo * 0.95;
      return this.descuento;
    } else if (this.visitas == 4) {
      this.descuento = this.costo * 0.9;
      return this.descuento;
    } else {
      return this.descuento;
    }
  };
}
