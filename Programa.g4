grammar Programa;
//gramatica
programa       : instruccion+   #Programa;
instruccion    : repeticion     #Instruccion;

repeticion     : 'repetir' '{' sentencia* '}' 'hasta' condicion ';'     #Repeticion;
sentencia      : salida | terminar      #Sentencia;

salida         : 'imprimir' '(' CADENA ')' ';'      #Salida;
terminar       : 'salir' ';'        #Terminar;

condicion      : 'verdadero' | 'falso'      #Condicion;


// Lexemas
CADENA         : '"' (~["\\])* '"' ;

REPETIR       : 'repetir';
IMPRIMIR      : 'imprimir';
SALIR         : 'salir';
HASTA         : 'hasta';
VERDADERO     : 'verdadero';
FALSO         : 'falso';

LPAREN        : '(' ;
RPAREN        : ')' ;
LBRACE        : '{' ;
RBRACE        : '}' ;
SEMICOLON     : ';' ;

SIMBOLO       : [.,!?;:] ;

WS            : [ \t\r\n]+ -> skip ;
