export class Cliente {
    constructor(
        public dui:string,
        public nombres:string,
        public apellidos:string,
        public nombreMascota:string,
        public tratamiento:Text,
        public medicamentos:Text,
        public costo:number,
        public visitas:number
    ) {}
}
