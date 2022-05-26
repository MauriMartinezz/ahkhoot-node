"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Opcion_1 = require("./model/entities/preguntas/Opcion");
const Pregunta_1 = require("./model/entities/preguntas/Pregunta");
const http = require("http");
let unaPregunta = new Pregunta_1.Pregunta();
unaPregunta.setLeyenda("Cuantas provincias tiene Argentina?");
let opcionSi = new Opcion_1.Opcion();
opcionSi.setDescripcion("24");
opcionSi.setEsCorrecta(true);
let opcionIncorrecta = new Opcion_1.Opcion();
opcionIncorrecta.setDescripcion("22");
opcionIncorrecta.setEsCorrecta(false);
unaPregunta.agregarOpcion(opcionIncorrecta);
unaPregunta.agregarOpcion(opcionSi);
const server = http.createServer((req, res) => {
    console.log("Request recibida");
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(unaPregunta));
});
const port = 3000;
server.listen(port, "127.0.0.1", () => console.log(`Server listening on port ${port}`));
//# sourceMappingURL=index.js.map