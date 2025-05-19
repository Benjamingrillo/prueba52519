// Generated from c:/Users/glben/OneDrive/Escritorio/lenguaje/Programa.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ProgramaListener from './ProgramaListener.js';
import ProgramaVisitor from './ProgramaVisitor.js';

const serializedATN = [4,1,17,69,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,4,0,24,8,0,11,0,12,
0,25,1,1,1,1,1,2,1,2,1,2,5,2,33,8,2,10,2,12,2,36,9,2,1,2,1,2,1,2,1,2,1,2,
1,3,1,3,3,3,45,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,
7,3,7,61,8,7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,
18,20,0,1,1,0,6,7,62,0,23,1,0,0,0,2,27,1,0,0,0,4,29,1,0,0,0,6,44,1,0,0,0,
8,46,1,0,0,0,10,52,1,0,0,0,12,55,1,0,0,0,14,60,1,0,0,0,16,62,1,0,0,0,18,
64,1,0,0,0,20,66,1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,0,24,25,1,0,0,0,25,23,
1,0,0,0,25,26,1,0,0,0,26,1,1,0,0,0,27,28,3,4,2,0,28,3,1,0,0,0,29,30,5,2,
0,0,30,34,5,11,0,0,31,33,3,6,3,0,32,31,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,
0,34,35,1,0,0,0,35,37,1,0,0,0,36,34,1,0,0,0,37,38,5,12,0,0,38,39,5,5,0,0,
39,40,3,12,6,0,40,41,5,13,0,0,41,5,1,0,0,0,42,45,3,8,4,0,43,45,3,10,5,0,
44,42,1,0,0,0,44,43,1,0,0,0,45,7,1,0,0,0,46,47,5,3,0,0,47,48,5,9,0,0,48,
49,5,1,0,0,49,50,5,10,0,0,50,51,5,13,0,0,51,9,1,0,0,0,52,53,5,4,0,0,53,54,
5,13,0,0,54,11,1,0,0,0,55,56,7,0,0,0,56,13,1,0,0,0,57,61,3,16,8,0,58,61,
3,18,9,0,59,61,3,20,10,0,60,57,1,0,0,0,60,58,1,0,0,0,60,59,1,0,0,0,61,15,
1,0,0,0,62,63,5,14,0,0,63,17,1,0,0,0,64,65,5,15,0,0,65,19,1,0,0,0,66,67,
5,16,0,0,67,21,1,0,0,0,4,25,34,44,60];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ProgramaParser extends antlr4.Parser {

    static grammarFileName = "Programa.g4";
    static literalNames = [ null, null, "'repetir'", "'imprimir'", "'salir'", 
                            "'hasta'", "'verdadero'", "'falso'", "'\"'", 
                            "'('", "')'", "'{'", "'}'", "';'" ];
    static symbolicNames = [ null, "CADENA", "REPETIR", "IMPRIMIR", "SALIR", 
                             "HASTA", "VERDADERO", "FALSO", "COMILLAS", 
                             "LPAREN", "RPAREN", "LBRACE", "RBRACE", "SEMICOLON", 
                             "LETRA", "DIGITO", "SIMBOLO", "WS" ];
    static ruleNames = [ "programa", "instruccion", "repeticion", "sentencia", 
                         "salida", "terminar", "condicion", "caracter", 
                         "letra", "digito", "simbolo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ProgramaParser.ruleNames;
        this.literalNames = ProgramaParser.literalNames;
        this.symbolicNames = ProgramaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ProgramaParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 22;
	            this.instruccion();
	            this.state = 25; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ProgramaParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.repeticion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repeticion() {
	    let localctx = new RepeticionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ProgramaParser.RULE_repeticion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(ProgramaParser.REPETIR);
	        this.state = 30;
	        this.match(ProgramaParser.LBRACE);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===4) {
	            this.state = 31;
	            this.sentencia();
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 37;
	        this.match(ProgramaParser.RBRACE);
	        this.state = 38;
	        this.match(ProgramaParser.HASTA);
	        this.state = 39;
	        this.condicion();
	        this.state = 40;
	        this.match(ProgramaParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ProgramaParser.RULE_sentencia);
	    try {
	        this.state = 44;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.salida();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ProgramaParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(ProgramaParser.IMPRIMIR);
	        this.state = 47;
	        this.match(ProgramaParser.LPAREN);
	        this.state = 48;
	        this.match(ProgramaParser.CADENA);
	        this.state = 49;
	        this.match(ProgramaParser.RPAREN);
	        this.state = 50;
	        this.match(ProgramaParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ProgramaParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(ProgramaParser.SALIR);
	        this.state = 53;
	        this.match(ProgramaParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ProgramaParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===7)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ProgramaParser.RULE_caracter);
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.letra();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.digito();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 59;
	            this.simbolo();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	letra() {
	    let localctx = new LetraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ProgramaParser.RULE_letra);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(ProgramaParser.LETRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	digito() {
	    let localctx = new DigitoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ProgramaParser.RULE_digito);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(ProgramaParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simbolo() {
	    let localctx = new SimboloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ProgramaParser.RULE_simbolo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(ProgramaParser.SIMBOLO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ProgramaParser.EOF = antlr4.Token.EOF;
ProgramaParser.CADENA = 1;
ProgramaParser.REPETIR = 2;
ProgramaParser.IMPRIMIR = 3;
ProgramaParser.SALIR = 4;
ProgramaParser.HASTA = 5;
ProgramaParser.VERDADERO = 6;
ProgramaParser.FALSO = 7;
ProgramaParser.COMILLAS = 8;
ProgramaParser.LPAREN = 9;
ProgramaParser.RPAREN = 10;
ProgramaParser.LBRACE = 11;
ProgramaParser.RBRACE = 12;
ProgramaParser.SEMICOLON = 13;
ProgramaParser.LETRA = 14;
ProgramaParser.DIGITO = 15;
ProgramaParser.SIMBOLO = 16;
ProgramaParser.WS = 17;

ProgramaParser.RULE_programa = 0;
ProgramaParser.RULE_instruccion = 1;
ProgramaParser.RULE_repeticion = 2;
ProgramaParser.RULE_sentencia = 3;
ProgramaParser.RULE_salida = 4;
ProgramaParser.RULE_terminar = 5;
ProgramaParser.RULE_condicion = 6;
ProgramaParser.RULE_caracter = 7;
ProgramaParser.RULE_letra = 8;
ProgramaParser.RULE_digito = 9;
ProgramaParser.RULE_simbolo = 10;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_instruccion;
    }

	repeticion() {
	    return this.getTypedRuleContext(RepeticionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RepeticionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_repeticion;
    }

	REPETIR() {
	    return this.getToken(ProgramaParser.REPETIR, 0);
	};

	LBRACE() {
	    return this.getToken(ProgramaParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(ProgramaParser.RBRACE, 0);
	};

	HASTA() {
	    return this.getToken(ProgramaParser.HASTA, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	SEMICOLON() {
	    return this.getToken(ProgramaParser.SEMICOLON, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterRepeticion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitRepeticion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitRepeticion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(ProgramaParser.IMPRIMIR, 0);
	};

	LPAREN() {
	    return this.getToken(ProgramaParser.LPAREN, 0);
	};

	CADENA() {
	    return this.getToken(ProgramaParser.CADENA, 0);
	};

	RPAREN() {
	    return this.getToken(ProgramaParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(ProgramaParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(ProgramaParser.SALIR, 0);
	};

	SEMICOLON() {
	    return this.getToken(ProgramaParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_condicion;
    }

	VERDADERO() {
	    return this.getToken(ProgramaParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(ProgramaParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_caracter;
    }

	letra() {
	    return this.getTypedRuleContext(LetraContext,0);
	};

	digito() {
	    return this.getTypedRuleContext(DigitoContext,0);
	};

	simbolo() {
	    return this.getTypedRuleContext(SimboloContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LetraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_letra;
    }

	LETRA() {
	    return this.getToken(ProgramaParser.LETRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterLetra(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitLetra(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitLetra(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DigitoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_digito;
    }

	DIGITO() {
	    return this.getToken(ProgramaParser.DIGITO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterDigito(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitDigito(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitDigito(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SimboloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_simbolo;
    }

	SIMBOLO() {
	    return this.getToken(ProgramaParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterSimbolo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitSimbolo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitSimbolo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ProgramaParser.ProgramaContext = ProgramaContext; 
ProgramaParser.InstruccionContext = InstruccionContext; 
ProgramaParser.RepeticionContext = RepeticionContext; 
ProgramaParser.SentenciaContext = SentenciaContext; 
ProgramaParser.SalidaContext = SalidaContext; 
ProgramaParser.TerminarContext = TerminarContext; 
ProgramaParser.CondicionContext = CondicionContext; 
ProgramaParser.CaracterContext = CaracterContext; 
ProgramaParser.LetraContext = LetraContext; 
ProgramaParser.DigitoContext = DigitoContext; 
ProgramaParser.SimboloContext = SimboloContext; 
