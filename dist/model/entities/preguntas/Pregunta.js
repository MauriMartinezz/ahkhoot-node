"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pregunta = void 0;
class Pregunta {
    constructor() {
        this.leyenda = "";
        this.opciones = [];
    }
    agregarOpcion(opcion) {
        this.opciones.push(opcion);
    }
    opcionesCorrectas() {
        return this.opciones.filter(o => o.getEsCorrecta());
    }
    setLeyenda(leyenda) {
        this.leyenda = leyenda;
    }
}
exports.Pregunta = Pregunta;
//# sourceMappingURL=Pregunta.js.map