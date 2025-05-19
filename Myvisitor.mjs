import ProgramaVisitor from './generated/ProgramaVisitor.js';
import ProgramaParser from './generated/ProgramaParser.js';

class Myvisitor extends ProgramaVisitor {
    constructor() {
        super();
        this.memory = {}; // Almacén de variables
    }
    visitPrograma(ctx) {
        return ctx.instruccion().map(instr => this.visit(instr));
    }

    visitInstruccion(ctx) {
    return this.visit(ctx.repeticion());
    }

    visitRepeticion(ctx) {
        const instrucciones = ctx.sentencia().map(s => this.visit(s));
        const condicion = this.visit(ctx.condicion());
        console.log("Ejecutando bucle hasta que la condición sea:", condicion);
        instrucciones.forEach(instr => instr());
    }

    visitSentencia(ctx) {
        if (ctx.salida()) return this.visit(ctx.salida());
        if (ctx.terminar()) return this.visit(ctx.terminar());
    }

    visitSalida(ctx) {
        const texto = ctx.CADENA().getText();//CADENA
        return () => console.log(texto.slice(1, -1)); // quitar comillas
    }

    visitTerminar(ctx) {
        return () => console.log("Saliendo del programa.");
    }

    visitCondicion(ctx) {
        return ctx.getText() === "verdadero";
    }
}

export default Myvisitor;
