'use strict';
var Valor = null;

function figonachiWhile(Valor) {
    var a = 1;
    var b = 0;
    var suma = null;
    if (Valor < 0) {
        console.log('no hay numeros negativos, sorry');
    }
    while (b <= Valor) {
        console.log(b);
        suma = b;
        b = a + b;
        a = suma;
    }
}

function figonachiFor(Valor) {
    var a = 1;
    var b = 0;
    var suma = null;
    if (Valor < 0) {
        console.log('no hay numeros negativos, sorry');
    }
    for (var i = 0; b <= Valor; i++) {
        console.log(b);
        suma = b;
        b = a + b;
        a = suma;
    }
    console.log('ha hecho ' + i + ' interacciones');
}