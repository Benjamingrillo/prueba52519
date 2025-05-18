// Generated from c:/Users/glben/OneDrive/Escritorio/lenguaje/Programa.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ProgramaListener from './ProgramaListener.js';
import ProgramaVisitor from './ProgramaVisitor.js';

const serializedATN = [4,1,14,50,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,17,1,1,1,1,1,2,1,2,1,2,5,2,25,8,
2,10,2,12,2,28,9,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,3,3,37,8,3,1,4,1,4,1,4,1,
4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,1,1,0,6,7,45,0,
15,1,0,0,0,2,19,1,0,0,0,4,21,1,0,0,0,6,36,1,0,0,0,8,38,1,0,0,0,10,44,1,0,
0,0,12,47,1,0,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,17,1,0,0,0,17,15,1,0,0,
0,17,18,1,0,0,0,18,1,1,0,0,0,19,20,3,4,2,0,20,3,1,0,0,0,21,22,5,2,0,0,22,
26,5,10,0,0,23,25,3,6,3,0,24,23,1,0,0,0,25,28,1,0,0,0,26,24,1,0,0,0,26,27,
1,0,0,0,27,29,1,0,0,0,28,26,1,0,0,0,29,30,5,11,0,0,30,31,5,5,0,0,31,32,3,
12,6,0,32,33,5,12,0,0,33,5,1,0,0,0,34,37,3,8,4,0,35,37,3,10,5,0,36,34,1,
0,0,0,36,35,1,0,0,0,37,7,1,0,0,0,38,39,5,3,0,0,39,40,5,8,0,0,40,41,5,1,0,
0,41,42,5,9,0,0,42,43,5,12,0,0,43,9,1,0,0,0,44,45,5,4,0,0,45,46,5,12,0,0,
46,11,1,0,0,0,47,48,7,0,0,0,48,13,1,0,0,0,3,17,26,36];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ProgramaParser extends antlr4.Parser {

    static grammarFileName = "Programa.g4";
    static literalNames = [ null, null, "'repetir'", "'imprimir'", "'salir'", 
                            "'hasta'", "'verdadero'", "'falso'", "'('", 
                            "')'", "'{'", "'}'", "';'" ];
    static symbolicNames = [ null, "CADENA", "REPETIR", "IMPRIMIR", "SALIR", 
                             "HASTA", "VERDADERO", "FALSO", "LPAREN", "RPAREN", 
                             "LBRACE", "RBRACE", "SEMICOLON", "SIMBOLO", 
                             "WS" ];
    static ruleNames = [ "programa", "instruccion", "repeticion", "sentencia", 
                         "salida", "terminar", "condicion" ];

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
	        this.state = 15; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this.instruccion();
	            this.state = 17; 
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
	        this.state = 19;
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
	        this.state = 21;
	        this.match(ProgramaParser.REPETIR);
	        this.state = 22;
	        this.match(ProgramaParser.LBRACE);
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===4) {
	            this.state = 23;
	            this.sentencia();
	            this.state = 28;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 29;
	        this.match(ProgramaParser.RBRACE);
	        this.state = 30;
	        this.match(ProgramaParser.HASTA);
	        this.state = 31;
	        this.condicion();
	        this.state = 32;
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
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.salida();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
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
	        this.state = 38;
	        this.match(ProgramaParser.IMPRIMIR);
	        this.state = 39;
	        this.match(ProgramaParser.LPAREN);
	        this.state = 40;
	        this.match(ProgramaParser.CADENA);
	        this.state = 41;
	        this.match(ProgramaParser.RPAREN);
	        this.state = 42;
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
	        this.state = 44;
	        this.match(ProgramaParser.SALIR);
	        this.state = 45;
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
	        this.state = 47;
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


}

ProgramaParser.EOF = antlr4.Token.EOF;
ProgramaParser.CADENA = 1;
ProgramaParser.REPETIR = 2;
ProgramaParser.IMPRIMIR = 3;
ProgramaParser.SALIR = 4;
ProgramaParser.HASTA = 5;
ProgramaParser.VERDADERO = 6;
ProgramaParser.FALSO = 7;
ProgramaParser.LPAREN = 8;
ProgramaParser.RPAREN = 9;
ProgramaParser.LBRACE = 10;
ProgramaParser.RBRACE = 11;
ProgramaParser.SEMICOLON = 12;
ProgramaParser.SIMBOLO = 13;
ProgramaParser.WS = 14;

ProgramaParser.RULE_programa = 0;
ProgramaParser.RULE_instruccion = 1;
ProgramaParser.RULE_repeticion = 2;
ProgramaParser.RULE_sentencia = 3;
ProgramaParser.RULE_salida = 4;
ProgramaParser.RULE_terminar = 5;
ProgramaParser.RULE_condicion = 6;

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




ProgramaParser.ProgramaContext = ProgramaContext; 
ProgramaParser.InstruccionContext = InstruccionContext; 
ProgramaParser.RepeticionContext = RepeticionContext; 
ProgramaParser.SentenciaContext = SentenciaContext; 
ProgramaParser.SalidaContext = SalidaContext; 
ProgramaParser.TerminarContext = TerminarContext; 
ProgramaParser.CondicionContext = CondicionContext; 
