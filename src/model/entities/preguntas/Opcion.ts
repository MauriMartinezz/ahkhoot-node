export class Opcion{
    private descripcion: string = "";
    private esCorrecta: boolean = false;


    public setDescripcion(descripcion: string): void{
        this.descripcion = descripcion;
    }

    public getEsCorrecta(){
        return this.esCorrecta;
    }

    public setEsCorrecta(value: boolean): void{
        this.esCorrecta = value;
    }
};