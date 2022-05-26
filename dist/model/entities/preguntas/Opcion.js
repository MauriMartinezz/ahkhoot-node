"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Opcion = void 0;
class Opcion {
    constructor() {
        this.descripcion = "";
        this.esCorrecta = false;
    }
    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
    getEsCorrecta() {
        return this.esCorrecta;
    }
    setEsCorrecta(value) {
        this.esCorrecta = value;
    }
}
exports.Opcion = Opcion;
;
//# sourceMappingURL=Opcion.js.map