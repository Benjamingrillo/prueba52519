grammar Programa;

programa       : instruccion+ ;   #instruccion
instruccion    : repeticion ;

repeticion     : 'repetir' '{' sentencia* '}' 'hasta' condicion ';' ;
sentencia      : salida | terminar ;

salida         : 'imprimir' '(' CADENA ')' ';' ;
terminar       : 'salir' ';' ;

condicion      : 'verdadero' | 'falso' ;

// Aquí eliminamos la regla de cadena y caracter como parser rules,
// y definimos CADENA como token (lexer rule):

// Lexer tokens
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
