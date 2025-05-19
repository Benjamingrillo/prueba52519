grammar Programa;
//gramatica
programa       : instruccion+ ;
instruccion    : repeticion ;

repeticion     : 'repetir' '{' sentencia* '}' 'hasta' condicion ';' ;
sentencia      : salida | terminar ;

salida         : 'imprimir' '(' CADENA ')' ';' ;
terminar       : 'salir' ';' ;

condicion      : 'verdadero' | 'falso' ;


// Lexemas
CADENA : '"' ([a-zA-Z0-9 .,!?;:])* '"' ;

caracter : letra | digito | simbolo ;
letra : LETRA ;
digito : DIGITO ;
simbolo : SIMBOLO ;


REPETIR       : 'repetir';
IMPRIMIR      : 'imprimir';
SALIR         : 'salir';
HASTA         : 'hasta';
VERDADERO     : 'verdadero';
FALSO         : 'falso';

COMILLAS      : '"';
LPAREN        : '(' ;
RPAREN        : ')' ;
LBRACE        : '{' ;
RBRACE        : '}' ;
SEMICOLON     : ';' ;

LETRA   : [a-zA-Z] ;
DIGITO  : [0-9] ;
SIMBOLO : [.,!?;:] ;

WS            : [ \t\r\n]+ -> skip ;
