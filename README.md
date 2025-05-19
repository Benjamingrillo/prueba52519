# Lenguaje.g4

Este proyecto implementa un lenguaje de programación simple utilizando ANTLR4. Está diseñado con fines educativos para demostrar el proceso de análisis léxico, sintáctico y semántico. El lenguaje permite imprimir mensajes en consola, repetir instrucciones y finalizar la ejecución mediante una condición booleana.

## Instalacion

1. Clona este repositorio: git clone https://github.com/Benjamingrillo/52519.git
2. Instalar dependencias necesarias
```sh
npm install
```
3. Generar los archivos del parser y lexer con ANTLR
```sh
antlr4 -Dlanguage=JavaScript -o generated Programa.g4
```

## Instrucciones de uso
1. Escribir un programa en el archivo input.txt, por ejemplo:
```sh
repetir {
  imprimir("Hola!");
  imprimir("¿Cuánto es $21 + $23?");
  salir;
} hasta verdadero;
 
```
2. Ejecutar el intérprete:
```sh
npm start
```
3. Vera en la consola

  -La tabla de tokens generados por el lexer.
  -El árbol de derivación.
  -La ejecución de las instrucciones definidas en el input.

4. Para ver el parser tree Apretar F5
