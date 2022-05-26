import { Opcion } from "./Opcion";

export class Pregunta {
    private leyenda: string = "";
    private opciones: Array<Opcion> = [];

    public agregarOpcion(opcion: Opcion){
        this.opciones.push(opcion);
    }

    public opcionesCorrectas(): Array<Opcion>{
        return this.opciones.filter(o => o.getEsCorrecta());
    }

    public setLeyenda(leyenda: string): void{
        this.leyenda = leyenda;
    }
}